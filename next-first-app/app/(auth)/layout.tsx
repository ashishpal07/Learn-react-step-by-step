export default function banner ({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div className='border-b-2 p-3 text-center font-bold'>
        30% off for next 3 days
      </div>
      {children}
    </div>
  )
}
