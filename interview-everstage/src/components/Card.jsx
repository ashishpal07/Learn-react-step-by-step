import React from 'react'

export const Card = ({res}) => {

  return (
    <div className='flex space-x-3 p-4 bg-slate-500 m-3 rounded-md'>
      <div>
        <img className='min-w-[100px] h-[100px] rounded-sm' src={res.image} alt={res.name} />
      </div>
      <div>
        <p>{res.name}</p>
        <p>{res.status}</p>
        <p>{res.species}</p>
        <p>{res.url}</p>
      </div>
    </div>
  )
}

