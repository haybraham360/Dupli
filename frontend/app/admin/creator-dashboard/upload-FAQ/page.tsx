'use client'

import React, { useState } from 'react';
import Link from 'next/link';
import QuestionAccordion from '@/components/Accordion/QuestionAccordion';

interface Question {
  id: number;
  question: string;
  answer: string;
}

interface CustomInputProps {
    type: 'radio' | 'checkbox';
    checked: boolean;
    onChange: () => void;
    className?: string;
  }

const CustomInput: React.FC<CustomInputProps> = ({ type, checked, onChange, className = '' }) => (
    <div 
      className={`relative w-[1.35rem] h-[1.35rem] flex-shrink-0 ${className}`}
    >
      <input
        type={type}
        checked={checked}
        title='set as answer'
        onChange={onChange}
        className="peer absolute w-full h-full opacity-0 cursor-pointer"
      />
        <div className="w-full h-full border-2 bg-[#F7F7F7] rounded-full peer-checked:border-none peer-hover:border-gray-400 transition-colors duration-200" />
        {checked && (
            <div className="absolute inset-0 bg-[#2CD341] rounded-full flex items-center justify-center">
                <svg 
                    className="w-4 h-4 text-[#222222]" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                >
                    <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth="2" 
                    d="M5 13l4 4L19 7"
                    />
                </svg>
            </div>
        )}
    </div>
  );

export default function UploadFAQ() {
  // Previous state declarations remain the same...
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState<Question>({
    id: 1,
    question: '',
    answer: ''
  });
  const [showQuestionType, setShowQuestionType] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [questionToDelete, setQuestionToDelete] = useState<number | null>(null);
  const [isMultipleAnswer, setIsMultipleAnswer] = useState(false);
  const [editingQuestion, setEditingQuestion] = useState<Question | null>(null);

  // Previous handlers remain the same...
  const handleQuestionChange = (value: string) => {
    setCurrentQuestion(prev => ({
      ...prev,
      question: value
    }));
  };

  const handleAnswerChange = (value: string) => {
    setCurrentQuestion(prev => ({
      ...prev,
      answer: value
    }));
  };

  const handleAddQuestion = () => {
    if (editingQuestion) {
      setQuestions(prev => prev.map(q => 
        q.id === editingQuestion.id ? currentQuestion : q
      ));
      setEditingQuestion(null);
    } else {
      setQuestions(prev => [...prev, currentQuestion]);
    }
    setCurrentQuestion({
      id: editingQuestion ? currentQuestion.id + 1 : questions.length + 2,
      question: '',
      answer: '',
    });
    setShowQuestionType(false);
  };

  const handleEdit = (question: Question) => {
    setEditingQuestion(question);
    setCurrentQuestion(question);
  };

  const handleSave = () => {
    // Check if the question is empty/unchanged from initial state
    const isQuestionEmpty = 
      currentQuestion.question.trim() === '' && 
      currentQuestion.answer.trim() === '' 
    
    if (isQuestionEmpty) {
      alert('Please add a question before saving');
      return;
    }
  
    // Validate that we have a question
    if (!currentQuestion.question.trim()) {
      alert('Please enter a question');
      return;
    }
  
    // Validate that we have at least one answer
    if (!currentQuestion.answer.trim()) {
      alert('Please enter at least one answer');
      return;
    }
  
  
    // Check if this question already exists in the questions array
    const questionExists = questions.some(q => 
      q.id === currentQuestion.id && !editingQuestion
    );
  
    if (questionExists) {
      alert('This question has already been saved. Click "Add question" to create a new question.');
      return;
    }
  
    // If editing, update the existing question
    if (editingQuestion) {
      setQuestions(prev => prev.map(q => 
        q.id === editingQuestion.id ? currentQuestion : q
      ));
      setEditingQuestion(null);
    } else {
      // Generate a new ID based on the highest existing ID + 1
      const newId = Math.max(0, ...questions.map(q => q.id)) + 1;
      const newQuestion = {
        ...currentQuestion,
        id: newId
      };
      
      // Add the current question to the questions array
      setQuestions(prev => [...prev, newQuestion]);
    }
  
    // Show success modal
    setShowSuccessModal(true);
  };
  
  const handleDelete = (id: number) => {
    setQuestionToDelete(id);
    setShowDeleteModal(true);
  };

  const confirmDelete = () => {
    if (questionToDelete) {
      setQuestions(prev => prev.filter(q => q.id !== questionToDelete));
      setShowDeleteModal(false);
    }
  };


  return (
    <div className="w-full min-h-screen px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb - Made responsive with flexible text sizing */}
        <h5 className="sm:text-sm mb-3 max-md:mb-2 text-gray-600 flex flex-wrap gap-1 items-center">
            <Link href="/" className="hover:text-[#6694c2] text-[0.7rem] hover:font-medium transition-colors duration-500 peer whitespace-nowrap">
            Homepage
            </Link>
            <span className="text-gray-400  text-[0.7rem]">&gt;</span>
            <Link href="/admin/creator-dashboard" className="hover:text-[#6694c2] text-[0.7rem] hover:font-medium transition-colors duration-500 peer whitespace-nowrap">
            Creator Dashboard
            </Link>
            <span className="text-gray-400  text-[0.7rem]">&gt;</span>
            <span className="text-[#6694c2] font-medium text-[0.7rem] transition-colors duration-500 peer-hover:text-gray-700 whitespace-normal">
            Upload FAQs
            </span>
        </h5>
      <div className="py-3 sm:py-4 lg:py-6">
        <div className="w-full bg-white rounded-md shadow-lg p-4 sm:p-6 lg:p-8">
          {/* Question Section */}
          <div className="mb-4 sm:mb-6">
            <h3 className="text-[1.25rem] font-medium mb-2 sm:mb-3">
              {editingQuestion ? `Edit Question ${editingQuestion.id}` : `Question ${currentQuestion.id}`}
            </h3>
            <h4 className='text-[0.875rem] font-medium my-2'>Question</h4>
            <textarea
              className="w-full p-3 border rounded-md text-[0.875rem] outline-gray-400 bg-[#F7F7F7] min-h-[60px] resize-y"
              placeholder="Enter question"
              value={currentQuestion.question}
              onChange={(e) => handleQuestionChange(e.target.value)}
            />
          </div>

          {/* Answers Section */}
          <div className="mb-4 sm:mb-6">
            <h4 className="mb-2 sm:mb-3 [0.875rem] font-medium">Answers</h4>
            <textarea
              className="w-full p-3 border rounded-md text-[0.875rem] outline-gray-400 bg-[#F7F7F7] min-h-[140px] resize-y"
              placeholder="Enter answer"
              value={currentQuestion.answer}
              onChange={(e) => handleAnswerChange(e.target.value)}
            />
            {/* {currentQuestion.answers.map((answer, index) => (
              <div key={index} className="flex items-center gap-2 mb-2 sm:mb-3">
                <div className="flex-shrink-0">
                    <CustomInput
                        type={isMultipleAnswer ? "checkbox" : "radio"}
                        checked={currentQuestion.correctAnswers.includes(index)}
                        onChange={() => handleCorrectAnswerToggle(index)}
                    />
                </div>
                <input
                  type="text"
                  className="w-full p-2 sm:p-3 border rounded-md text-[0.85rem] outline-gray-400 bg-[#F7F7F7]"
                  placeholder="Enter answer"
                  value={answer}
                  onChange={(e) => handleAnswerChange(index, e.target.value)}
                />
              </div>
            ))} */}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:justify-end mb-8">
            <button
              onClick={handleSave}
              className="px-6 py-2 bg-[#1B3664] text-white rounded-md hover:bg-blue-800 text-sm sm:text-[0.88rem] transition-colors duration-300"
            >
              Save
            </button>
            <button
              onClick={handleAddQuestion}
              className="px-4 py-2 text-[#1B3664] border border-[#1B3664] rounded-md hover:bg-blue-50 text-sm sm:text-[0.88rem] transition-colors duration-300"
            >
              + Add question
            </button>
          </div>


          <QuestionAccordion
            questions={questions}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
            />
        </div>
      </div>

      {/* Question Type Modal */}
      {showQuestionType && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg p-4 sm:p-6 w-full max-w-md">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg sm:text-xl font-semibold">Question type</h2>
              <button 
                onClick={() => setShowQuestionType(false)} 
                className="text-gray-500 hover:text-gray-700 text-2xl"
              >
                ×
              </button>
            </div>
            <p className="mb-4 text-sm sm:text-base">Please Select the option below</p>
            <div className="space-y-3 mb-4">
              <button className="flex w-full items-center gap-3 p-3 bg-gray-50 rounded-md cursor-pointer hover:bg-gray-100 transition-colors duration-300" onClick={() => setIsMultipleAnswer(false)}>
                {/* <input
                  type="radio"
                  name="questionType"
                  checked={!isMultipleAnswer}
                  title='answer'
                  onChange={() => setIsMultipleAnswer(false)}
                  className="w-4 h-4 sm:w-5 sm:h-5"
                  /> */}
                <CustomInput 
                    type='radio'
                    checked={!isMultipleAnswer}
                    onChange={() => setIsMultipleAnswer(false)}
                    className="w-4 h-4 sm:w-5 sm:h-5"
                />
                <span className="text-sm font-medium sm:text-base">Single answer</span>
              </button>
              <button className="flex items-center w-full gap-3 p-3 bg-gray-50 rounded-md cursor-pointer hover:bg-gray-100 transition-colors duration-300" onClick={() => setIsMultipleAnswer(true)}>
                {/* <input
                  type="radio"
                  name="questionType"
                  checked={isMultipleAnswer}
                  onChange={() => setIsMultipleAnswer(true)}
                  title='answer'
                  className="w-4 h-4 sm:w-5 sm:h-5"
                  /> */}
                <CustomInput 
                    type='radio'
                    checked={isMultipleAnswer}
                    onChange={() => setIsMultipleAnswer(true)}
                    className="w-4 h-4 sm:w-5 sm:h-5"
                />
                <span className="text-sm font-medium sm:text-base">Multiple answers</span>
              </button>
            </div>
            <button
              onClick={() => {
                handleAddQuestion();
                setShowQuestionType(false);
              }}
              className="w-full py-3 bg-blue-900 text-white rounded-md hover:bg-blue-800 text-sm sm:text-base transition-colors duration-300"
            >
              Proceed
            </button>
          </div>
        </div>
      )}


      {/* Delete Modal */}
      {showDeleteModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg p-4 sm:p-6 w-full max-w-md">
            <div className="flex justify-end items-center">
                <button 
                    onClick={() => setShowDeleteModal(false)} 
                    className="text-gray-500 hover:text-gray-700 hover:text-4xl transition-transform duration-500 hover:shadow-lg hover:border-none border rounded-full w-10 h-10 text-3xl"
                >
                    ×
                </button>
            </div>
            <div className="flex justify-center items-center mb-4">
              <h2 className="text-lg sm:text-[1.55rem] font-bold">Delete question</h2>
            </div>
            <p className="mb-6 text-center font-normal text-sm sm:text-[0.92rem]">Are you sure you want to <br /> delete this question?</p>
            <div className="flex flex-col mb-6 sm:flex-row gap-3">
              <button
                onClick={() => setShowDeleteModal(false)}
                className="flex-1 py-3 bg-[#1B3664] text-white rounded-md hover:bg-blue-800 text-sm sm:text-[0.94rem] transition-colors duration-300"
              >
                No, cancel
              </button>
              <button
                onClick={confirmDelete}
                className="flex-1 py-3 border border-[#1B3664] text-[#1B3664] rounded-md hover:bg-red-100 hover:text-red-600 hover:border-red-500 text-sm sm:text-[0.94rem] transition-colors duration-300"
              >
                Yes, delete
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Success Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg p-4 sm:p-6 w-full max-w-md text-center">
            <div className="flex justify-end">
              <button 
                onClick={() => setShowSuccessModal(false)} 
                className="text-gray-500 hover:text-gray-700 text-2xl"
              >
                ×
              </button>
            </div>
            <div className="mb-4">
              <div className="w-16 h-16 bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-lg sm:text-xl font-semibold mb-2">Questions added</h2>
              <p className="text-sm sm:text-base">You have successfully added {questions.length} questions</p>
            </div>
            <button
              onClick={() => {
                setShowSuccessModal(false);
                // Add navigation logic here
              }}
              className="w-full py-3 bg-blue-900 text-white rounded-md hover:bg-blue-800 text-sm sm:text-base transition-colors duration-300"
            >
              Go to dashboard
            </button>
          </div>
        </div>
      )}
    </div>
  );
}