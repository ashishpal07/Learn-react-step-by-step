import React from 'react'
import { CircularProgressBar } from './CircularProgressBar'

export const OverallScoreCard = () => {
  const score = 13
  const total = 20
  const percentage = (score / total) * 100

  return (
    <div className='flex items-center justify-between bg-white rounded-lg p-3 shadow-md'>
      <div>
        <p className='text-gray-500 text-sm'>Overall Score</p>
        <h2 className='text-3xl font-semibold'>
          Remark: <span className='text-green-600'>Good</span>
        </h2>
        <p className='text-gray-400 text-xs'>Evaluated on 12 Jul 2024</p>
      </div>
      <CircularProgressBar
        percentage={percentage}
        score={score}
        total={total}
        sizeClass={'w-24 h-24'}
        color={'text-green-500'}
      />
    </div>
  )
}
