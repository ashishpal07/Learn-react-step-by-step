'use client'

import scoreButton from '@/public/scoreButton.png'
import Image from 'next/image'
import { useFileUpload } from '../../hooks/useFileUpload'
import { AfterUpload } from './AfterUpload'
import { BeforeFileUpload } from './BeforeFileUpload'

export const FileUpload = () => {
  const {
    courseworkType,
    setCourseworkType,
    subject,
    setSubject,
    title,
    setTitle,
    fileData,
    setFileData,
    getRootProps,
    getInputProps,
    isDragActive,
    onDrop,
    handleSubmit
  } = useFileUpload()

  return (
    <div className='px-3 rounded-md flex flex-col justify-between'>
      <div className='mb-2'>
        <h2 className='text-3xl font-semibold'>
          Hey IB Folks! Unsure about the quality of your answers?{' '}
          <span className='text-purple-600'>We get you.</span>
        </h2>
      </div>
      <div className='shadow-lg bg-gray-50 p-6 rounded-xl'>
        <div
          {...getRootProps()}
          className={`border-2 rounded-md p-6 text-center mb-4 cursor-pointer transition-all duration-300 ${
            isDragActive ? 'border-purple-500 bg-purple-50' : 'border-dashed'
          }`}
          style={{ width: '100%', height: '200px' }}
        >
          <input {...getInputProps()} />
          {fileData ? (
            <AfterUpload fileData={fileData} setFileData={setFileData} />
          ) : (
            <BeforeFileUpload />
          )}
        </div>
        <div className='mb-4 w-[60%]'>
          <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
            Select your course & subjects<span className='text-red-700'>*</span>
          </label>
          <select
            value={courseworkType}
            onChange={e => setCourseworkType(e.target.value)}
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full p-3'
            required
          >
            <option value='' disabled>
              Coursework Type
            </option>
            <option value='ie example'>IE Example</option>
            <option value='ee example'>EE Example</option>
            <option value='io example'>IO Example</option>
            <option value='tok example'>TOK Example</option>
          </select>
          <select
            value={subject}
            onChange={e => setSubject(e.target.value)}
            className='border border-gray-300 rounded-full items-center px-5 py-3'
            required
          >
            <option value='' disabled>
              Subject
            </option>
            <option value='math'>Mathematics</option>
            <option value='science'>Science</option>
            <option value='physics'>Physics</option>
            <option value='chemistry'>Chemistry</option>
            <option value='others'>Others</option>
          </select>
        </div>
        <div className='mb-4'>
          <label className='block mb-2 font-medium'>
            Enter your essay title<span className='text-red-700'>*</span>{' '}
            (Required)
          </label>
          <input
            type='text'
            value={title}
            onChange={e => setTitle(e.target.value)}
            className='border border-gray-300 rounded-full w-[60%] px-4 py-3'
            placeholder='How nation works...'
            required
          />
        </div>
        <button
          className='bg-purple-600 text-white font-bold px-3 py-3 rounded-full mt-4 flex justify-between items-center hover:bg-purple-700'
          onClick={handleSubmit}
        >
          <div>
            <Image
              src={scoreButton}
              height={26}
              width={26}
              alt='Score Button'
            />
          </div>
          <div className='ml-3'>Evaluate your Score</div>
        </button>
      </div>
    </div>
  )
}
