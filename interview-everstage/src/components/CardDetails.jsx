import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export const CardDetails = () => {
  const { id } = useParams()
  const [charDetails, setCharDetails] = useState({})

  useEffect(() => {
    getData()
  }, [])

  async function getData () {
    const res = await axios.get(
      `https://rickandmortyapi.com/api/character/${id}`
    )
    console.log(res)
    setCharDetails(res.data)
    console.log(res)
  }

  return (
    <div className='flex justify-center items-center w-screen'>
      <div className='flex space-x-3 p-4 bg-slate-500 m-3 rounded-md w-[40%] border-2 border-red-400'>
        <div>
          <img
            className='min-w-[200px] h-[200px] rounded-sm'
            src={charDetails.image}
            alt={charDetails.name}
          />
        </div>
        <div className='text-white'>
          <p>{charDetails.name}</p>
          <p>{charDetails.status}</p>
          <p>{charDetails.species}</p>
          <p>{charDetails.url}</p>
        </div>
      </div>
    </div>
  )
}
