import React, { useEffect, useState } from 'react'
import { Button } from './Button'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

export const Users = () => {
  const [filter, setFilter] = useState([])
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetchUsers()
  }, [filter])

  async function fetchUsers () {
    const res = await axios.get(
      `http://localhost:8000/api/v1/user/bulk?filter${filter}`
    )
    console.log('res = ', res)
    setUsers(res.data.allUsers)
  }

  return (
    <div>
      <div className="font-bold mt-6 text-lg">Users</div>
      <div className="my-2">
        <input
          type='text'
          onChange={e => setFilter(e.target.value)}
          placeholder='search text...'
          className="w-full px-2 py-1 border rounded border-slate-200"
        />
      </div>
      <div>
        {users.map(user => {<User user={user} />})}
      </div>
    </div>
  )
}

const User = ({ user }) => {
  const navigate = useNavigate()
  return (
    <div className='flex justify-between'>
      <div className='flex'>
        <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2">
          <div className="flex flex-col justify-center h-full text-xl">{user.firstName[0]}</div>
        </div>
        <div className="flex flex-col justify-center h-ful">
          <div>
            {user.firstName} {user.lastName}
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center h-ful">
        <Button
          label={'Send Money'}
          onClick={e => navigate(`/send/id=${user.id}&name={user.firstName}`)}
        />
      </div>
    </div>
  )
}
