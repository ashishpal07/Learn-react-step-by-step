import Image from 'next/image'
import fireLogo from '../../public/fireLogo.png'
import coinLogo from '../../public/coinLogo.png'
import calendarIcon from '../../public/calendarLogo.png'
import cardsIcon from '../../public/cardsLogo.png'

export const Streak = () => {
  return (
    <div className='hidden md:flex flex-col h-full py-2 justify-start items-center rounded-xl bg-slate-100 gap-y-5'>
      <div>
        <div className='flex items-center bg-white rounded-full px-2 py-1'>
          <Image src={coinLogo} className='w-4' alt='coin Logo' />
          <span className='font-bold text-sm'>120</span>
        </div>
      </div>
      <div>
      <div className='flex items-center bg-white rounded-full px-2 py-1'>
          <Image src={fireLogo} className='w-4' alt='fire Logo' />
          <span className='font-bold text-sm'>24</span>
        </div>
      </div>
      <div>
        <div className='rounded-[50%] border-[1px] p-1 bg-white'>
          <div className='rounded-[50%] border-[1px]'>
            <Image src={calendarIcon} className='w-8' alt='calendar Logo' />
          </div>
        </div>
      </div>
      <div>
        <div className='rounded-[50%] border-[1px] p-1 bg-white'>
          <div className='rounded-[50%] border-[1px]'>
            <Image src={cardsIcon} className='w-8' alt='card Logo' />
          </div>
        </div>
      </div>
    </div>
  )
}
