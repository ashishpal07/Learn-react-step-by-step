'use client'

import { FaLongArrowAltRight } from 'react-icons/fa'
import CriteriaCard from './CriteriaCard'
import { OverallScoreCard } from './OverallScoreCard'
import { useState } from 'react'

export const PerformanceSideBar = () => {
  const [toggle, setToggle] = useState(false)

  const colorScores = [
    { color: 'rgb(34 197 94)', score: 7, total: 10, criteria: 'A' },
    { color: 'rgb(234 179 8)', score: 5, total: 10, criteria: 'B' },
    { color: '#f44336', score: 3, total: 10, criteria: 'C' }
  ]

  return (
    <div>
      <div className='ml-[-30px] lg:ml-0 lg:mt-0'>
        <OverallScoreCard />
        <div className='flex flex-col-reverse sm:flex lg:flex-col'>
          <div className='mt-5'>
            {colorScores.map((colorScore, index) => {
              return (
                <CriteriaCard
                  color={colorScore.color}
                  key={index}
                  score={colorScore.score}
                  total={colorScore.total}
                  criteria={colorScore.criteria}
                  toggle={toggle}
                />
              )
            })}
          </div>

          <div className='flex mt-4'>
            <button
              onClick={() => setToggle(!toggle)}
              className='py-2 px-2 mb-8 sm:px-3 rounded-full text-purple-500 font-semibold bg-white'
            >
              <div className='flex items-between items-center text-[12px] md:text-sm'>
                Check Detailed Evaluation
                <span className='ml-2'>
                  <FaLongArrowAltRight />
                </span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
