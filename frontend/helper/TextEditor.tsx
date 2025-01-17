'use client';

import React, { useRef, useState } from 'react';
import { 
  FaBold, 
  FaItalic, 
  FaUnderline, 
  FaAlignLeft, 
  FaAlignCenter, 
  FaAlignRight, 
  FaTextHeight,
  FaTextWidth,
  FaList,
  FaListOl,
  FaStrikethrough,
  FaSubscript,
  FaSuperscript
} from 'react-icons/fa';

interface TextEditorProps {
  onContentChange?: (content: string) => void;
}

const TextEditor: React.FC<TextEditorProps> = ({ onContentChange }) => {
  
  const editorRef = useRef<HTMLDivElement>(null);
  const [isEmpty, setIsEmpty] = useState(true);
  const [activeFormats, setActiveFormats] = useState({
    bold: false,
    italic: false,
    underline: false,
    strikethrough: false,
    subscript: false,
    superscript: false
  });
  const [fontSize, setFontSize] = useState(14);

  // Function to apply text formatting
  const applyFormat = (command: string) => {
    document.execCommand(command, false, '');
    editorRef.current?.focus();

    // Toggle the active state for the format
    setActiveFormats(prev => ({
      ...prev,
      [command]: !prev[command as keyof typeof prev]
    }));
  };

  // Function to change font size
  const changeFontSize = (increase: boolean) => {
    const newSize = increase ? fontSize + 2 : Math.max(10, fontSize - 2);
    setFontSize(newSize);
    document.execCommand('fontSize', false, '7');
    
    if (editorRef.current) {
      const selection = window.getSelection();
      if (selection && selection.rangeCount > 0) {
        const range = selection.getRangeAt(0);
        const selectedText = range.extractContents();
        const span = document.createElement('span');
        span.style.fontSize = `${newSize}px`;
        span.appendChild(selectedText);
        range.insertNode(span);
      }
    }
  };

  // Function to apply alignment
  const applyAlignment = (alignment: string) => {
    document.execCommand(alignment, false, '');
    editorRef.current?.focus();
  };

  // Handle input events to check if the editor is empty
  const handleInput = () => {
    if (editorRef.current) {
      const content = editorRef.current.textContent?.trim() || '';
      setIsEmpty(content === '');
      onContentChange?.(content);
    }
  };

  // Handle focus and blur to manage placeholder
  const handleFocus = () => {
    if (editorRef.current && isEmpty) {
      editorRef.current.textContent = '';
      setIsEmpty(false);
    }
  };

  const handleBlur = () => {
    if (editorRef.current && editorRef.current.textContent?.trim() === '') {
      setIsEmpty(true);
    }
  };


  return (
    <div className="bg-white p-4 rounded-md shadow-md w-full max-w-xl mx-auto">
      {/* Toolbar */}
      <div className="flex flex-wrap gap-2 items-center mb-2 bg-gray-100 p-2 rounded-md">
        {/* Text Formatting Buttons */}
        <div className="flex gap-1">
          <button
            title="Bold"
            className={`p-2 rounded-md hover:bg-gray-200 focus:outline-none ${activeFormats.bold ? 'bg-[#F7F7F7] border ' : ''}`}
            onClick={() => applyFormat('bold')}
          >
            <FaBold />
          </button>
          <button
            title="Italic"
            className={`p-2 rounded-md hover:bg-gray-200 focus:outline-none ${activeFormats.italic ? 'bg-[#F7F7F7] border ' : ''}`}
            onClick={() => applyFormat('italic')}
          >
            <FaItalic />
          </button>
          <button
            title="Underline"
            className={`p-2 rounded-md hover:bg-gray-200 focus:outline-none ${activeFormats.underline ? 'bg-[#F7F7F7] border ' : ''}`}
            onClick={() => applyFormat('underline')}
          >
            <FaUnderline />
          </button>
          <button
            title="Strikethrough"
            className={`p-2 rounded-md hover:bg-gray-200 focus:outline-none ${activeFormats.strikethrough ? 'bg-[#F7F7F7] border ' : ''}`}
            onClick={() => applyFormat('strikethrough')}
          >
            <FaStrikethrough />
          </button>
        </div>

        {/* Alignment Buttons */}
        <div className="flex gap-1">
          <button
            title="Align Left"
            className={`p-2 rounded-md hover:bg-gray-200 focus:outline-none`}
            onClick={() => applyAlignment('justifyLeft')}
          >
            <FaAlignLeft />
          </button>
          <button
            title="Align Center"
            className="p-2 rounded-md hover:bg-gray-200 focus:outline-none"
            onClick={() => applyAlignment('justifyCenter')}
          >
            <FaAlignCenter />
          </button>
          <button
            title="Align Right"
            className="p-2 rounded-md hover:bg-gray-200 focus:outline-none"
            onClick={() => applyAlignment('justifyRight')}
          >
            <FaAlignRight />
          </button>
        </div>

        {/* Font Size Buttons */}
        <div className="flex gap-1 items-center">
          <button
            title="Decrease Font Size"
            className="p-2 rounded-md hover:bg-gray-200 focus:outline-none"
            onClick={() => changeFontSize(false)}
          >
            <FaTextWidth />
          </button>
          <span className=" text-[0.86rem]">{fontSize}px</span>
          <button
            title="Increase Font Size"
            className="p-2 rounded-md hover:bg-gray-200 focus:outline-none"
            onClick={() => changeFontSize(true)}
          >
            <FaTextHeight />
          </button>
        </div>

        {/* List and Other Formatting Buttons */}
        <div className="flex gap-1">
          <button
            title="Unordered List"
            className="p-2 rounded-md hover:bg-gray-200 focus:outline-none"
            onClick={() => applyFormat('insertUnorderedList')}
          >
            <FaList />
          </button>
          <button
            title="Ordered List"
            className="p-2 rounded-md hover:bg-gray-200 focus:outline-none"
            onClick={() => applyFormat('insertOrderedList')}
          >
            <FaListOl />
          </button>
          <button
            title="Subscript"
            className={`p-2 rounded-md hover:bg-gray-200 focus:outline-none ${activeFormats.subscript ? 'bg-[#F7F7F7] border ' : ''}`}
            onClick={() => applyFormat('subscript')}
          >
            <FaSubscript />
          </button>
          <button
            title="Superscript"
            className={`p-2 rounded-md hover:bg-gray-200 focus:outline-none ${activeFormats.superscript ? 'bg-[#F7F7F7] border ' : ''}`}
            onClick={() => applyFormat('superscript')}
          >
            <FaSuperscript />
          </button>
        </div>
      </div>

      {/* Editor */}
      <div
        ref={editorRef}
        contentEditable
        // placeholder="Write your ideas here..."
        className={`w-full min-h-[44vh] border border-gray-300 rounded-md p-4 bg-gray-50 text-[0.86rem] focus:outline-none ${isEmpty ? 'text-gray-400' : ''}`}
        onInput={handleInput}
        onFocus={handleFocus}
        onBlur={handleBlur}
        style={{ fontSize: `${fontSize}px` }}
        suppressContentEditableWarning
      >
        {isEmpty ? "Write your ideas here..." : ''}
      </div>
    </div>
  );
};

export default TextEditor;