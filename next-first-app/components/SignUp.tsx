"use client"

import ButtonUp from "./ButtonUp"

export default function SignUpComponent () {
  function handler () {
    console.log('Sign up successfully!')
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
                />

                <LabelledInput
                  label={'Last Name'}
                  placeholder={'last name'}
                  type={'email'}
                />
                <LabelledInput
                  label={'Email'}
                  placeholder={'abc@example.com'}
                  type={'email'}
                />
                <LabelledInput
                  label={'Password'}
                  placeholder={'password'}
                  type={'password'}
                />
                
                <ButtonUp />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

interface LabelledInputType {
  label: string
  placeholder: string
  type: string
}

function LabelledInput ({ label, placeholder, type }: LabelledInputType) {
  return (
    <div className='mt-3 flex flex-col w-[80%] gap-y-4'>
      <label className='text-xl font-semibold'>{label}</label>
      <input
        className='border-2 border-black rounded-m p-3 rounded-md'
        type={type || 'text'}
        placeholder={placeholder}
      />
    </div>
  )
}
