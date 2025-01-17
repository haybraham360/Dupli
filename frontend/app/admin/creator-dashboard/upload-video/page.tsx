'use client'

import UploadIcon from '@/components/Icons/UploadIcon';
import { RecentVideoCard } from '@/components/Cards/RecentVideoCard';
import { recentVideoData } from '@/mock data/recentVideoData';
import axios, { AxiosProgressEvent } from 'axios';
import Link from 'next/link';
import React, { useState, useRef } from 'react';
import { FiUpload } from 'react-icons/fi';
import { TiArrowSortedDown } from 'react-icons/ti';
import { useAuth } from '@/lib/auth-context';
import Image from 'next/image';

interface CourseData {
  images: string[];
  price: number;
  type: 'course';
  courses: Array<{
    title: string;
    cover: string;
    thumbnail: string;
    description: string;
    duration: number;
    instructor: string;
    video: string;
    status: 'available' | 'unavailable';
  }>;
  status: 'draft' | 'published';
}

interface FileUploadResponse {
  url: string;
  filename?: string;
  contentType?: string;
  size?: number;
  uploadDate?: string;
}

export default function UploadVideo() {
    const { token } = useAuth()
  const videoInputRef = useRef<HTMLInputElement>(null);
  const thumbnailInputRef = useRef<HTMLInputElement>(null);
  const [showStatusDropdown, setShowStatusDropdown] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [uploadProgress, setUploadProgress] = useState({ video: 0, thumbnail: 0 });
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const [courseData, setCourseData] = useState<CourseData>({
    images: [],
    price: 0,
    type: 'course',
    courses: [{
      title: '',
      cover: '',
      thumbnail: '',
      description: '',
      duration: 0,
      instructor: '',
      video: '',
      status: 'available'
    }],
    status: 'published'
  });

  const [uploadedFiles, setUploadedFiles] = useState({
    video: null as File | null,
    thumbnail: null as File | null
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    if (name === 'price') {
      setCourseData(prev => ({
        ...prev,
        price: parseFloat(value) || 0
      }));
    } else {
      setCourseData(prev => ({
        ...prev,
        courses: [{
          ...prev.courses[0],
          [name]: value
        }]
      }));
    }
  };

  const handleStatusChange = (status: 'draft' | 'published') => {
    setCourseData(prev => ({ ...prev, status }));
    setShowStatusDropdown(false);
  };

  const handleFileSelect = (type: 'video' | 'thumbnail'): void => {
    setErrorMessage(null);
    
    if (type === 'video' && videoInputRef.current) {
      videoInputRef.current.click();
    } else if (type === 'thumbnail' && thumbnailInputRef.current) {
      thumbnailInputRef.current.click();
    }
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>, type: 'video' | 'thumbnail'): Promise<void> => {
    const file = e.target.files?.[0];
    if (!file) {
      console.log(`No ${type} file selected`);
      return;
    }

    try {
      if (type === 'video') {
        const validVideoTypes = ['video/mp4', 'video/webm', 'video/ogg'];
        if (!validVideoTypes.includes(file.type)) {
          throw new Error('Please upload a valid video file (MP4, WebM, or OGG)');
        }
        if (file.size > 100 * 1024 * 1024) {
          throw new Error('Video size should be less than 100MB');
        }
      } else {
        const validImageTypes = ['image/jpeg', 'image/png', 'image/webp'];
        if (!validImageTypes.includes(file.type)) {
          throw new Error('Please upload a valid image file (JPEG, PNG, or WebP)');
        }
        if (file.size > 5 * 1024 * 1024) {
          throw new Error('Thumbnail size should be less than 5MB');
        }
      }

      setUploadedFiles(prev => ({
        ...prev,
        [type]: file
      }));

      if (type === 'thumbnail') {
        const preview = URL.createObjectURL(file);
        setPreviewUrl(preview);
      }

      setErrorMessage(null);
    } catch (err) {
      if (err instanceof Error) {
        console.error(`${type} validation error:`, err);
        setErrorMessage(err.message);
      }
      e.target.value = '';
    }
  };


  const uploadFile = async (file: File, type: 'video' | 'thumbnail'): Promise<string> => {
    const formData = new FormData();
    formData.append('media', file);
    
    console.log(`Uploading ${type} file:`, file);

    try {
      setErrorMessage(null);
      
      const response = await axios.post<FileUploadResponse>(
        'https://api.hosoptima.com/api/v1/media',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
          onUploadProgress: (progressEvent: AxiosProgressEvent) => {
            const progress = progressEvent.total
              ? Math.round((progressEvent.loaded * 100) / progressEvent.total)
              : 0;
            setUploadProgress(prev => ({
              ...prev,
              [type]: progress
            }));
          }
        }
      );

      console.log(`${type} upload response:`, response);

      if (!response.data?.url) {
        throw new Error(`No URL returned from ${type} upload`);
      }

      return response.data.url;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const errorMessage = error.response?.data?.message || error.message;
        setErrorMessage(`Failed to upload ${type}: ${errorMessage}`);
        throw new Error(`Failed to upload ${type}: ${errorMessage}`);
      }
      throw error;
    }
  };

  const handleSubmit = async () => {
    try {
      setIsSubmitting(true);
      setErrorMessage(null);

      // Validation with visible feedback
      if (!courseData.courses[0].title.trim()) {
        alert('Course title is required');
        setErrorMessage('Course title is required');
        return;
      }
      if (!courseData.courses[0].description.trim()) {
        alert('Course description is required');
        setErrorMessage('Course description is required');
        return;
      }
      if (!courseData.price || courseData.price <= 0) {
        alert('Please enter a valid price');
        setErrorMessage('Please enter a valid price');
        return;
      }
      if (!uploadedFiles.video) {
        alert('Please upload a video file');
        setErrorMessage('Please upload a video file');
        return;
      }
      if (!uploadedFiles.thumbnail) {
        alert('Please upload a thumbnail');
        setErrorMessage('Please upload a thumbnail');
        return;
      }

      // Upload both files
      const [videoUrl, thumbnailUrl] = await Promise.all([
        uploadFile(uploadedFiles.video, 'video'),
        uploadFile(uploadedFiles.thumbnail, 'thumbnail')
      ]);

      // Update course data with the uploaded URLs
      const updatedCourseData = {
        ...courseData,
        images: [thumbnailUrl],
        courses: [{
          ...courseData.courses[0],
          video: videoUrl,
          thumbnail: thumbnailUrl,
          cover: thumbnailUrl
        }]
      };

      console.log(updatedCourseData);

      // Create course
      const response = await axios.post(
        'https://api.hosoptima.com/api/v1/product',
        updatedCourseData,
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}` 
          }
        }
      );

      if (response.status === 200 || response.status === 201) {
        alert('Course uploaded successfully!');
        // Optionally redirect or clear form
        setCourseData({
          images: [],
          price: 0,
          type: 'course',
          courses: [{
            title: '',
            cover: '',
            thumbnail: '',
            description: '',
            duration: 0,
            instructor: '',
            video: '',
            status: 'available'
          }],
          status: 'published'
        });
        setUploadedFiles({ video: null, thumbnail: null });
        setPreviewUrl(null);
      }
    } catch (err) {
      setErrorMessage(err instanceof Error ? err.message : 'Failed to upload course');
    } finally {
      setIsSubmitting(false);
      setUploadProgress({ video: 0, thumbnail: 0 });
    }
  };

  return (
    <div className="">
      <h5 className="text-[0.7rem] mb-3 max-md:mb-2 text-gray-600 flex gap-1">
        <Link href="/" className="hover:text-[#6694c2] hover:font-medium transition-colors duration-500 peer">
          Homepage
        </Link>
        &gt;
        <Link href="/admin/creator-dashboard" className="hover:text-[#6694c2] hover:font-medium transition-colors duration-500 peer">
          Creator Dashboard
        </Link>
        &gt;
        <span className="text-[#6694c2] font-medium transition-colors duration-500 peer-hover:text-gray-700">
          Upload Video
        </span>
      </h5>

      <div className="py-6 max-md:py-4">
        <h2 className="font-bold text-[1.15rem]">Course Name</h2>

        <div className="flex w-full py-3 justify-between gap-4">
          <input
            type="text"
            name="title"
            placeholder="Course Name"
            value={courseData.courses[0].title}
            onChange={handleInputChange}
            className="p-4 max-md:p-2 w-[58%] text-[0.86rem] outline-none bg-[#f7f7f7] rounded-md"
          />
          <div className="relative w-[42%]">
            <button
              onClick={() => setShowStatusDropdown(!showStatusDropdown)}
              className="p-4 max-md:p-2 bg-[#f7f7f7] w-full rounded-md"
            >
              <div className="flex pl-5 max-md:pl-1 items-center justify-between">
                <h3 className="font-semibold text-[0.86rem] capitalize">
                  {courseData.status}
                </h3>
                <TiArrowSortedDown />
              </div>
            </button>

            {showStatusDropdown && (
              <div className="absolute top-full left-0 w-full mt-1 bg-white border rounded-md shadow-lg z-10">
                <button
                  onClick={() => handleStatusChange('published')}
                  className="w-full text-left px-4 py-2 hover:bg-gray-100 text-[0.86rem]"
                >
                  Published
                </button>
                <button
                  onClick={() => handleStatusChange('draft')}
                  className="w-full text-left px-4 py-2 hover:bg-gray-100 text-[0.86rem]"
                >
                  Draft
                </button>
              </div>
            )}
          </div>
        </div>

        <div className="flex w-full py-4 max-md:flex-col h-[66vh] max-md:overflow-y-scroll justify-between gap-4">
          <div className="w-[58%] max-md:w-full space-y-4">
            <button
              onClick={() => handleFileSelect('video')}
              type="button"
              className="p-4 bg-[#f7f7f7] w-full h-[50%] rounded-md"
            >
              <input
                type="file"
                ref={videoInputRef}
                title="upload"
                onChange={(e) => handleFileChange(e, 'video')}
                accept="video/*"
                className="hidden"
              />
              <div className="flex flex-col items-center gap-2">
                <UploadIcon />
                <h3 className="text-[0.97rem] font-medium text-[#1A1A1A]">
                  {uploadedFiles.video ? (
                    <div className="flex flex-col items-center">
                      <span>{uploadedFiles.video.name}</span>
                      {uploadProgress.video > 0 && uploadProgress.video < 100 && (
                        <span className="text-sm text-gray-500">
                          Uploading: {uploadProgress.video}%
                        </span>
                      )}
                    </div>
                  ) : (
                    'Upload Course Video'
                  )}
                </h3>
                {uploadProgress.video > 0 && (
                  <div className="w-full max-w-xs bg-gray-200 rounded-full h-2.5">
                    <div
                      className="bg-[#1B3664] h-2.5 rounded-full transition-all duration-300"
                      style={{ width: `${uploadProgress.video}%` }}
                    />
                  </div>
                )}
              </div>
            </button>

            <button
              onClick={() => handleFileSelect('thumbnail')}
              title='select file'
              className="p-4 bg-[#f7f7f7] w-full h-[50%] rounded-md relative overflow-hidden"
            >
              <input
                type="file"
                ref={thumbnailInputRef}
                title='thumbnail'
                onChange={(e) => handleFileChange(e, 'thumbnail')}
                accept="image/*"
                className="hidden"
              />
              {previewUrl ? (
                <div className="relative w-full h-40">
                  <Image
                    src={previewUrl}
                    alt="Course thumbnail"
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 opacity-0 hover:opacity-100 transition-opacity">
                    <span className="text-white text-sm">Click to change thumbnail</span>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col items-center gap-2">
                  <UploadIcon />
                  <h3 className="text-[0.97rem] font-medium text-[#1A1A1A]">
                    Upload Course Thumbnail
                  </h3>
                </div>
              )}
              {uploadProgress.thumbnail > 0 && (
                <div className="w-full max-w-xs bg-gray-200 rounded-full h-2.5 mt-2">
                  <div
                    className="bg-[#1B3664] h-2.5 rounded-full"
                    style={{ width: `${uploadProgress.thumbnail}%` }}
                  />
                </div>
              )}
            </button>
          </div>

          <div className="w-[42%] max-md:w-full flex flex-col justify-between">
            <div className="flex gap-1 flex-col">
              {recentVideoData.slice(0, 3).map((data, index) => (
                <div key={index} className="w-full h-[33%]">
                  <RecentVideoCard image={data.image} title={data.title} desc={data.desc} />
                </div>
              ))}
            </div>
            <button
              onClick={() => handleFileSelect('video')}
              className="bg-[#1B3664] max-md:mt-4 p-2 text-white flex gap-2 items-center justify-center"
            >
              <FiUpload className="text-lg" />
              <span className="text-[0.86rem]">Upload Another Video</span>
            </button>
          </div>
        </div>

        <div className="w-[58%] max-md:w-full py-4">
          <div className="mb-5 flex space-x-2">
            <input
              type="number"
              name="price"
              placeholder="Course Price"
              value={courseData.price || ''}
              onChange={handleInputChange}
              className="p-4 w-full outline-none text-[0.86rem] bg-[#f7f7f7] rounded-md"
            />
            <input
              type="number"
              name="duration"
              placeholder="Write your title here"
              value={courseData.courses[0].duration}
              onChange={handleInputChange}
              className="p-4 w-full outline-none text-[0.86rem] bg-[#f7f7f7] rounded-md"
            />
          </div>

          <div className="mb-5">
            <input
              type="text"
              name="instructor"
              placeholder="Write instructor here"
              value={courseData.courses[0].instructor}
              onChange={handleInputChange}
              className="p-4 w-full outline-none text-[0.86rem] bg-[#f7f7f7] rounded-md"
            />
          </div>

          <h2 className="font-bold text-[1.15rem]">Add Video Title</h2>
          <div className="py-4 mb-5">
            <input
              type="text"
              name="title"
              placeholder="Write your title here"
              value={courseData.courses[0].title}
              onChange={handleInputChange}
              className="p-4 w-full outline-none text-[0.86rem] bg-[#f7f7f7] rounded-md"
            />
          </div>

          <h2 className="font-bold text-[1.15rem]">Add Video Description</h2>
            <div className="py-4">
              <textarea 
                placeholder='Write your ideas here' 
                name="description" 
                value={courseData.courses[0].description} 
                onChange={handleInputChange} 
                className='p-4 w-full h-[40vh] outline-none text-[0.86rem] bg-[#f7f7f7] rounded-md' />
            </div>
          </div>

          <button
            onClick={handleSubmit}
            disabled={isSubmitting}
            className="bg-[#1B3664] py-2 px-12 text-[0.86rem] rounded-md text-white disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Uploading...' : 'Post'}
          </button>
        </div>
        {errorMessage && (
          <div className="text-red-500 text-sm mt-2">
            {errorMessage}
          </div>
        )}
    </div>
  )
}
