import React, { useState } from 'react'
import { Header } from '../components/Header'
import { SubHeader } from '../components/SubHeader'
import { InputBox } from '../components/InputBox'
import { useNavigate } from 'react-router-dom'
import { Button } from '../components/Button'
import { BottomWarning } from '../components/BottomWarning'
import axios from "axios"

export const SignUp = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const registerHandler = async () => {
    const res = await axios.post('http://localhost:8000/api/v1/user/sign-up', {
      email,
      password,
      firstName,
      lastName
    })

    console.log(res);
    navigate('/signIn')
  }

  return (
    <div className='bg-slate-300 h-screen flex justify-center'>
      <div className='flex flex-col justify-center'>
        <div className='rounded-lg bg-white w-85 text-center p-2 h-max px-4'>
          {<Header label={'Sign Up'} />}
          {<SubHeader label={'Enter your information to create an account'} />}
          <InputBox
            placeholder={'John'}
            label={'First Name'}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <InputBox
            placeholder={'Doe'}
            label={'Last Name'}
            onChange={(e) => setLastName(e.target.value)}
          />
          <InputBox
            placeholder={'ashish123@gmail,com'}
            label={'Email'}
            onChange={(e) => setEmail(e.target.value)}
          />
          <InputBox
            placeholder={'123456'}
            label={'Password'}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button onClick={registerHandler} label={'Sign Up'} />
          <BottomWarning label={"Do you already have an account?"} buttonText={"Sign In"} to={"/signIn"} />
        </div>
      </div>
    </div>
  )
}
