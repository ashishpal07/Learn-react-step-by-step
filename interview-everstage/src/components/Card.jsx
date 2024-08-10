import React from 'react'

export const Card = ({res}) => {

  return (
    <div className='flex bg-slate-500 m-3 rounded-md w-[500px]'>
      <div>
        <img className='min-w-[130px] h-[130px] rounded-sm' src={res.image} alt={res.name} />
      </div>
      <div className='text-white text-xl ml-8'>
        <div className='font-bold'>{res.name}</div>
        <div>{res.status}</div>
        <div>{res.species}</div>
      </div>
    </div>
  )
}

