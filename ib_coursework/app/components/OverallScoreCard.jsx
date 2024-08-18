import React from 'react'
import { CircularProgressBar } from './CircularProgressBar'

export const OverallScoreCard = () => {
  return (
    <div className='flex items-center justify-between bg-white rounded-lg p-3 shadow-md'>
      <div>
        <p className='text-gray-500 text-sm'>Overall Score</p>
        <h2 className='text-sm md:text-2xl lg:text-2xl font-semibold'>
          Remark: <span className='text-green-600'>Good</span>
        </h2>
        <p className='text-gray-400 text-xs'>Evaluated on 12 Jul 2024</p>
      </div>
      <CircularProgressBar
        size = {100} strokeWidth = {10} progress = {65} total={20} score={13} color={'rgb(34 197 94)'}
      />
    </div>
  )
}
