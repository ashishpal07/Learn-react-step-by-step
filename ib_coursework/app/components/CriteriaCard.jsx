import React, { useState } from 'react'
import { FaChevronUp, FaChevronDown } from 'react-icons/fa'
import { CriteriaCardDetail } from './CriteriaCardDetail'
import { CircularProgressBar } from './CircularProgressBar'

const CriteriaCard = ({ color, score, total, criteria, toggle }) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleOpen = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className='mt-4 bg-white shadow-md rounded-lg p-4'>
      <div
        className='flex justify-between items-center cursor-pointer'
        onClick={toggleOpen}
      >
        <CircularProgressBar
          size={60}
          strokeWidth={6}
          progress={(score/total) * 100}
          total={total}
          score={score}
          color={color}
        />

        <div className='ml-3'>
          <h2 className='text-[10px] text-gray-600'>Criteria {criteria}:</h2>
          <p className='text-[14px] md:text-md font-semibold'>
            Understanding Knowledge Questions
          </p>
        </div>
        <div>
          <span className='text-xl text-gray-600'>
            {isOpen ? <FaChevronUp /> : <FaChevronDown />}
          </span>
        </div>
      </div>

      {(isOpen || toggle) && <CriteriaCardDetail />}
    </div>
  )
}

export default CriteriaCard
