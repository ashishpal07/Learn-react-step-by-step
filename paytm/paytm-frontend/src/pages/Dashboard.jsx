import React from 'react'
import { AppBar } from '../components/AppBar'
import { Users } from '../components/Users'

export const Dashboard = () => {
  return (
    <div>
      <AppBar />
      <div className='m-8'>
        <Users />
      </div>
    </div>
  )
}
