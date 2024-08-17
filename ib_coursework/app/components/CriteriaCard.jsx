import React, { useState } from 'react'
import { FaChevronUp, FaChevronDown } from 'react-icons/fa'
import { CriteriaCardDetail } from './CriteriaCardDetail'
import { CircularProgressBar } from './CircularProgressBar'

const CriteriaCard = ({ color, score, total }) => {
  const percentage = (score / total) * 100

  const [isOpen, setIsOpen] = useState(false)

  const toggleOpen = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className='bg-white shadow-md rounded-lg p-4 mt-4'>
      <div
        className='flex justify-between items-center cursor-pointer'
        onClick={toggleOpen}
      >
        <CircularProgressBar
          percentage={percentage}
          score={score}
          total={total}
          sizeClass={'w-16 h-16'}
          color={color}
        />
        <div className='ml-3'>
          <h2 className='text-sm text-gray-600'>Criteria A:</h2>
          <p className='text-lg font-semibold'>
            Understanding Knowledge Questions
          </p>
        </div>
        <div>
          <span className='text-xl text-gray-600'>
            {isOpen ? <FaChevronUp /> : <FaChevronDown />}
          </span>
        </div>
      </div>

      {isOpen && <CriteriaCardDetail />}
    </div>
  )
}

export default CriteriaCard
