import React from 'react'
import { FaCheckCircle } from 'react-icons/fa'
import { FaExclamationCircle } from 'react-icons/fa'

export const CriteriaCardDetail = () => {
  return (
    <div className='mt-4 rounded-lg p-2'>
      <p>
        The essay identifies and focuses on the knowledge question regarding the
        resolvability of disputes over knowledge claims within disciplines.
      </p>
      <div className='mb-4 mt-4 p-2 border border-green-500 rounded-lg'>
        <h3 className='font-semibold text-green-600'>Strengths</h3>
        <ul className='mt-2 space-y-2'>
          <li className='flex items-start'>
            <span className='text-green-500 mr-2'>
              <FaCheckCircle />
            </span>
            <p>
              Demonstrates a good understanding of the prescribed title and the
              associated knowledge questions.
            </p>
          </li>
          <li className='flex items-start'>
            <span className='text-green-500 mr-2'>
              <FaCheckCircle />
            </span>
            <p>
              Addresses the nature of disputes in both the Natural Sciences and
              Human Sciences effectively.
            </p>
          </li>
        </ul>
      </div>

      <div className='border border-yellow-600 p-2 rounded-lg'>
        <h3 className='font-semibold text-yellow-600'>Scope of Improvement</h3>
        <ul className='mt-2 space-y-2'>
          <li className='flex items-start'>
            <span className='text-yellow-500 mr-2'>
              <FaExclamationCircle />
            </span>
            <p>
              Demonstrates a good understanding of the prescribed title and the
              associated knowledge questions.
            </p>
          </li>
          <li className='flex items-start'>
            <span className='text-yellow-500 mr-2'>
              <FaExclamationCircle />
            </span>
            <p>
              Addresses the nature of disputes in both the Natural Sciences and
              Human Sciences effectively.
            </p>
          </li>
        </ul>
      </div>
    </div>
  )
}
