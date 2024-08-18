"use client"

import React, { useState } from 'react';
import { useStore } from '@/store/store';
import { Coursework } from './CourseWork';

export const CourseworkList = () => {
  const files = useStore((state) => state.files);
  const [displayCount, setDisplayCount] = useState(2); // Initial number of files to display

  // Function to show more files
  const showMoreFiles = () => {
    setDisplayCount(files.length); // Increase the count by 2 (or any desired number)
  };

  return (
    <div className="px-3 py-4 bg-blue-50 rounded-md mt-7">
      <h2 className="text-xl font-semibold mb-4">My coursework</h2>
      <div className="gap-4 md:grid grid-cols-2">
        {files.slice(0, displayCount).map((file, index) => {
          return (<Coursework file={file} key={index} />)
        })}
      </div>
      {displayCount < files.length && (
        <div className="flex justify-center mt-4">
          <button
            className="px-5 py-2 rounded-full bg-slate-150 text-slate-300 font-bold hover:bg-purple-700"
            onClick={showMoreFiles}
          >
            View all
          </button>
        </div>
      )}
    </div>
  );
};

