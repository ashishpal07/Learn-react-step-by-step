import React from 'react'

export const CircularProgressBar = ({
  size,
  strokeWidth,
  progress,
  total,
  score,
  color
}) => {
  const radius = (size - strokeWidth) / 2
  const circumference = 2 * Math.PI * radius
  const offset = circumference - (progress / 100) * circumference

  return (
    <div>
      <svg height={size} width={size} className='block mx-auto'>
        <circle
          stroke='#e5e7eb' // light gray background circle
          fill='transparent'
          strokeWidth={strokeWidth}
          r={radius}
          cx={size / 2}
          cy={size / 2}
        />
        <circle
          stroke={`${color}`} // blue color for progress
          fill='transparent'
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap='round'
          r={radius}
          cx={size / 2}
          cy={size / 2}
          className='transition-all duration-300'
        />
        <text
          x='50%'
          y='50%'
          textAnchor='middle'
          dy='.3em'
          className='text-sm font-semibold fill-current text-blue-500'
        >
          {score}/{total}
        </text>
      </svg>
    </div>
  )
}
