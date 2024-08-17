
export const CircularProgressBar = ({ percentage, score, total, sizeClass, color }) => {
  return (
    <div className={`relative ${sizeClass}`}>
      <svg className='absolute inset-0' viewBox='0 0 36 36'>
        <path
          className='text-gray-300'
          d='M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831
            a 15.9155 15.9155 0 0 1 0 -31.831'
          fill='none'
          stroke='currentColor'
          strokeWidth='3.8'
        />
        <path
          className={`${color}`}
          d='M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831'
          fill='none'
          stroke='currentColor'
          strokeWidth='3.8'
          strokeDasharray={`${percentage}, 100`}
        />
      </svg>
      <div className='absolute inset-0 flex items-center justify-center'>
        <span className='text-sm font-semibold'>
          {score}/{total}
        </span>
      </div>
    </div>
  )
}
