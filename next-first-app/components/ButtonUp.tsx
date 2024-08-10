"use client"

export default function ButtonUp () {
  const handler = () => {
    console.log('Sign Up successfully!')
  }

  return (
    <div className="w-[80%]">
      <button
        className='text-2xl text-white font-bold py-3 w-full rounded-md bg-slate-900 mt-5'
        onClick={handler}
      >
        sign up
      </button>
    </div>
  )
}