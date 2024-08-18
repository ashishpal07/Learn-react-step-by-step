'use client'

import React from 'react'
import { Worker } from '@react-pdf-viewer/core'
import { Viewer } from '@react-pdf-viewer/core'
import { zoomPlugin } from '@react-pdf-viewer/zoom'
import '@react-pdf-viewer/core/lib/styles/index.css'
import '@react-pdf-viewer/zoom/lib/styles/index.css'

export const PdfViewer = () => {
  const zoomPluginInstance = zoomPlugin()
  const { ZoomIn, ZoomOut } = zoomPluginInstance

  return (
    <div className='flex flex-col items-center mb-10 mt-8 lg:mt-0'>
      <div className='mb-2 sm:flex w-full justify-between items-center p-1 sm:p-3 bg-slate-50 rounded-tl-2xl rounded-tr-2xl'>
        <div className='rounded-full py-1 px-2 bg-white text-[10px] sm:text-lg'>
          IB Economic Paper IA2.pdf
        </div>
        <div className='flex text-[10px] sm:text-lg'>
          <ZoomIn className='bg-gray-200 p-2 rounded' />
          <ZoomOut className='bg-gray-200 p-2 rounded' />
        </div>
      </div>
      <div className='w-full h-[300px] sm:h-[600px] shadow-md p-0 viewer-container mt'>
        <Worker
          workerUrl={`https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`}
        >
          <Viewer fileUrl='/dummy.pdf' plugins={[zoomPluginInstance]} />
        </Worker>
      </div>
    </div>
  );
}
