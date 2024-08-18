'use client'

import scoreButton from '@/public/scoreButton.png'
import Image from 'next/image'
import { useFileUpload } from '../../hooks/useFileUpload'
import { AfterUpload } from './AfterUpload'
import { BeforeFileUpload } from './BeforeFileUpload'
import Link from 'next/link'

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
          <label className='block mb-2 text-md font-medium text-gray-400'>
            Select your course & subjects<span className='text-red-700'>*</span>
          </label>
          <div className='sm:flex justify-between'>
            <select
              value={courseworkType}
              onChange={e => setCourseworkType(e.target.value)}
              className='bg-white border border-gray-300 text-gray-800 rounded-full py-2 px-3 md:w-[50%]'
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
              className='bg-white border mt-2 border-gray-300 rounded-full py-2 px-3 md:w-[40%]'
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
        </div>
        <div className='mb-4'>
          <label className='block mb-2 font-medium text-gray-400'>
            Enter your essay title<span className='text-red-700'>*</span>{' '}
            (Required)
          </label>
          <input
            type='text'
            value={title}
            onChange={e => setTitle(e.target.value)}
            className='border border-red-500 rounded-full w-[60%] py-2 px-3'
            placeholder='How nation works...'
            required
          />
        </div>
        <Link href='/evaluate'>
          <button
            className='bg-slate-300 text-white font-bold py-2 px-3 rounded-full mt-4 flex justify-between items-center hover:bg-purple-600'
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
        </Link>
      </div>
    </div>
  )
}
