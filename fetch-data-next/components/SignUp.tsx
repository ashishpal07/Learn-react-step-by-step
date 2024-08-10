"use client"

import { ChangeEvent, useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/navigation'

export default function SignUpComponent () {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const router = useRouter();

  const handler = async () => {
    console.log("clicked");
    
    await axios.post("http://localhost:3000/api/user", {
      firstName,
      lastName,
      email,
      password
    });

    router.push("/");
  }

  return (
    <div>
      <div className='flex justify-center flex-col h-screen'>
        <div className='flex justify-center'>
          <div className='w-[30%] shadow-md border-[1px]'>
            <div className='flex flex-col p-5 gap-y-4'>
              <div className='text-3xl font-extrabold mx-auto'>SIGN UP</div>
              <div className='flex flex-col justify-center items-center mt-3 gap-y-4'>
                <LabelledInput
                  label={'First Name'}
                  placeholder={'first name'}
                  type={'email'}
                  onChange={(e) => {setFirstName(e.target.value)}}
                />
                <LabelledInput
                  label={'Last Name'}
                  placeholder={'last name'}
                  type={'email'}
                  onChange={(e) => {setLastName(e.target.value)}}
                />
                <LabelledInput
                  label={'Email'}
                  placeholder={'abc@example.com'}
                  type={'text'}
                  onChange={(e) => {setEmail(e.target.value)}}
                />
                <LabelledInput
                  label={'Password'}
                  placeholder={'123456'}
                  type={'password'}
                  onChange={(e) => {setPassword(e.target.value)}}
                />

                <button
                  className='text-2xl text-white font-bold py-3 w-full rounded-md bg-slate-900 mt-5'
                  onClick={handler}
                >
                  sign up
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

interface LabelledInputType {
  label: string;
  placeholder: string;
  type: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

function LabelledInput ({ label, placeholder, type, onChange }: LabelledInputType) {
  return (
    <div className='mt-3 flex flex-col w-[80%] gap-y-4'>
      <label className='text-xl font-semibold'>{label}</label>
      <input
        className='border-2 border-black rounded-m p-3 rounded-md'
        type={type || 'text'}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  )
}
