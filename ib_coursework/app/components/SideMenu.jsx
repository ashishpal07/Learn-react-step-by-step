import Image from 'next/image'
import copyPasteImage from '../../public/copyPaste.png'
import questionMarkImage from '../../public/questionMark.png'
import bookLogo from '../../public/bookImage.png'
import zuaiLogo from '../../public/zuaiLogo.png'
import menuLogo from '../../public/menuImage.png'
import faceIcon from '../../public/faceIcon.png'
import Link from 'next/link'

export const SideMenu = () => {
  return (
    <div className='hidden md:flex flex-col h-[99%] py-2 justify-between items-center rounded-xl bg-white m-2'>
      <div className='px-0 items-center flex flex-col justify-center gap-y-8'>
        <div>
          <Link href={'/'}><Image src={zuaiLogo} className='w-[20px] md:w-[40px]' alt='ZuAi Logo' /></Link>
        </div>
        <div className=''>
          <Image src={menuLogo} className='w-[20px] md:w-[40px]' alt='Menu Logo' />
        </div>
        <div className=''>
          <Image src={bookLogo} className='w-[15px] md:w-[20px]' alt='Book Logo' />
        </div>
        <div className=''>
          <Image src={copyPasteImage} className='w-[20px] md:w-[30px]' alt='Copy Logo' />
        </div>

        <div className=''>
          <Image src={questionMarkImage} className='w-[20px] md:w-[30px]' alt='Question Mark Logo' />
        </div>
      </div>

      <div>
        <Image src={faceIcon} className='w-8' alt='Face Icon' />
      </div>
    </div>
  )
}
