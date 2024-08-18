'use client'

import React, { useState, useEffect } from 'react'
import { FaLongArrowAltRight } from 'react-icons/fa'
import { zoomPlugin } from '@react-pdf-viewer/zoom'
import { Worker } from '@react-pdf-viewer/core'
import { Viewer } from '@react-pdf-viewer/core'
import '@react-pdf-viewer/core/lib/styles/index.css'
import '@react-pdf-viewer/zoom/lib/styles/index.css'


export const PdfViewer = () => {
  const zoomPluginInstance = zoomPlugin()
  const { ZoomIn, ZoomOut } = zoomPluginInstance
  const [toggle, setToggle] = useState(false)

  const handleResize = () => {
    if (window.innerWidth <= 768 || window.innerWidth >= 1024) {
      setToggle(true)
    } else {
      setToggle(false)
    }
  }

  useEffect(() => {
    handleResize()
    window.addEventListener('resize', handleResize)

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <div className='flex flex-col items-center mb-10 sm:mt-4 lg:mt-0'>
      <div className='mb-2 w-full items-center p-1 sm:p-2 bg-slate-50 rounded-tl-2xl rounded-tr-2xl'>
        <div className='rounded-full flex justify-between items-center px-2 text-slate-500 text-[10px] sm:text-[15px]'>
          <p className='bg-slate-200 p-2 rounded-full'>
            IB Economic Paper IA2.pdf
          </p>
          <div className='hidden md:block lg:hidden'>
            <button
              onClick={() => setToggle(!toggle)}
              className='text-purple-700 font-semibold flex items-center'
            >
              Expand & view your file
              <span className='ml-2'>
                <FaLongArrowAltRight />
              </span>
            </button>
          </div>
        </div>
        {toggle && (
          <div className='flex text-[10px] sm:text-lg'>
            <ZoomIn className='bg-gray-200 p-2 rounded' />
            <ZoomOut className='bg-gray-200 p-2 rounded' />
          </div>
        )}
      </div>
      {toggle && (
        <div className='w-full h-[250px] sm:h-[600px] shadow-md py-3 px-2 viewer-container'>
          <Worker
            workerUrl={`https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`}
          >
            <Viewer fileUrl='/dummy.pdf' plugins={[zoomPluginInstance]} />
          </Worker>
        </div>
      )}
    </div>
  )
}
