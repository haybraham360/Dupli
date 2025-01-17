'use client'

import TextEditor from '@/helper/TextEditor';
import { useAuth } from '@/lib/auth-context';
import axios from 'axios';
import Link from 'next/link';
import React, { useState } from 'react';
import { AiOutlinePicture } from 'react-icons/ai';
import { FaPen } from 'react-icons/fa';
import { TiArrowSortedDown } from 'react-icons/ti';

interface BlogPost {
  title: string;
  description: string;
  content: string;
  keywords: string;
  status: 'draft' | 'published';
}

export default function UploadBlog() {
  const { token } = useAuth()
  const [blogData, setBlogData] = useState<BlogPost>({
    title: '',
    description: '',
    content: '',
    keywords: '',
    status: 'published'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showStatusDropdown, setShowStatusDropdown] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBlogData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleEditorChange = (content: string) => {
    setBlogData(prev => ({
      ...prev,
      content
    }));
  };

  const handleStatusChange = (status: 'draft' | 'published') => {
    setBlogData(prev => ({
      ...prev,
      status
    }));
    setShowStatusDropdown(false);
  };

  const handleSubmit = async () => {
    try {
      setIsSubmitting(true);
      setError(null);

      // Basic validation
      if (!blogData.title.trim()) {
        throw new Error('Blog title is required');
      }
      if (!blogData.content.trim()) {
        throw new Error('Blog content is required');
      }

      console.log(blogData);
      const response = await axios.post(
        'https://api.hosoptima.com/api/v1/blog',
        blogData,
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}` 
          }
        }
      );

      if (response.status === 200 || response.status === 201) {
        // Handle successful submission
        alert('Blog posted successfully!');
        // Optionally redirect or clear form
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to post blog');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4">
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
          Upload Blog
        </span>
      </h5>

      <div className="py-8 max-md:py-4">
        <h2 className="font-bold text-[1.15rem]">Blog Name</h2>

        <div className="flex w-full py-4 justify-between gap-4 max-md:flex-col">
          <input
            type="text"
            name="title"
            placeholder="Blog Name"
            value={blogData.title}
            onChange={handleInputChange}
            className="p-4 max-md:p-2 w-[58%] max-md:w-full text-[0.86rem] outline-none bg-[#f7f7f7] rounded-md"
          />
          
          <div className="relative w-[42%] max-md:w-full">
            <button
              title="dropdown"
              onClick={() => setShowStatusDropdown(!showStatusDropdown)}
              className="p-4 max-md:p-2 bg-[#f7f7f7] w-full rounded-md"
            >
              <div className="flex pl-5 max-md:pl-1 items-center justify-between">
                <h3 className="font-semibold text-[0.86rem] capitalize">{blogData.status}</h3>
                <TiArrowSortedDown />
              </div>
            </button>
            
            {showStatusDropdown && (
              <div className="absolute top-full left-0 w-full mt-1 bg-white border rounded-md shadow-lg">
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

        <div className="flex w-[46%] max-md:w-full items-center gap-4 mb-4">
          <button className="flex items-center justify-center pr-12 max-md:pr-5 pl-4 py-3 text-[0.86rem] rounded-lg bg-[#f7f7f7] gap-3">
            <AiOutlinePicture />
            <span>Add Media</span>
          </button>
          <button className="flex items-center justify-center pr-12 max-md:pr-5 pl-4 py-3 text-[0.86rem] rounded-lg bg-[#f7f7f7] gap-3">
            <FaPen />
            <span>Add Textbox</span>
          </button>
        </div>

        <div className="flex space-x-2">
          <input
            type="text"
            name="keywords"
            placeholder="Keywords (comma-separated)"
            value={blogData.keywords}
            onChange={handleInputChange}
            className="w-full p-4 max-md:p-2 mb-4 text-[0.86rem] outline-none bg-[#f7f7f7] rounded-md"
          />
          <input
            type="text"
            name="description"
            placeholder="Description"
            value={blogData.description}
            onChange={handleInputChange}
            className="w-full p-4 max-md:p-2 mb-4 text-[0.86rem] outline-none bg-[#f7f7f7] rounded-md"
          />

        </div>

        <div className="w-[58%] max-md:w-full py-4">
          <TextEditor onContentChange={handleEditorChange} />
        </div>

        {error && (
          <div className="text-red-500 text-sm mb-4">
            {error}
          </div>
        )}

        <button
          onClick={handleSubmit}
          disabled={isSubmitting}
          className="bg-[#1B3664] py-2 px-12 rounded-md text-white text-[0.86rem] disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Posting...' : 'Post'}
        </button>
      </div>
    </div>
  );
}