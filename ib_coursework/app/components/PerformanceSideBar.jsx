'use client'

import { FaLongArrowAltRight } from 'react-icons/fa'
import CriteriaCard from './CriteriaCard'
import { OverallScoreCard } from './OverallScoreCard'
import { useState } from 'react'

export const PerformanceSideBar = () => {
  // const [toggle, setToggle] = useState(false);

  const colorScores = [
    { color: 'text-green-500', score: 7, total: 10, criteria: 'A' },
    { color: 'text-yellow-500', score: 5, total: 10, criteria: 'B' },
    { color: 'text-red-500', score: 3, total: 10, criteria: 'C' }
  ]

  return (
    <div>
      <div className=''>
        <OverallScoreCard />
        <div className='mt-5'>
          {colorScores.map((colorScore, index) => {
            return (
              <CriteriaCard
                color={colorScore.color}
                key={index}
                score={colorScore.score}
                total={colorScore.total}
                criteria={colorScore.criteria}
              />
            )
          })}
        </div>
      </div>
      <div className='flex mt-4'>
        <button
          // onClick={() => setToggle(!toggle)}
          className='py-2 px-4 rounded-full text-purple-500 font-semibold bg-white'
        >
          <div className='flex items-center'>
            Check Detailed Evaluation
            <span className='ml-2'>
              <FaLongArrowAltRight />
            </span>
          </div>
        </button>
      </div>
    </div>
  )
}
