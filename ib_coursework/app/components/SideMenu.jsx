import Image from 'next/image'
import copyPasteImage from '../../public/copyPaste.png'
import questionMarkImage from '../../public/questionMark.png'
import bookLogo from '../../public/bookImage.png'
import zuaiLogo from '../../public/zuaiLogo.png'
import menuLogo from '../../public/menuImage.png'
import faceIcon from '../../public/faceIcon.png'

export const SideMenu = () => {
  return (
    <div className='flex flex-col h-full py-2 justify-between items-center rounded-xl bg-white m-2'>
      <div className='px-0 items-center flex flex-col justify-center gap-y-8'>
        <div>
          <Image src={zuaiLogo} className='w-14' alt='ZuAi Logo' />
        </div>
        <div className=''>
          <Image src={menuLogo} className='w-12' alt='Menu Logo' />
        </div>
        <div className=''>
          <Image src={bookLogo} className='w-6' alt='Book Logo' />
        </div>
        <div className=''>
          <Image src={copyPasteImage} className='w-8' alt='Copy Logo' />
        </div>

        <div className=''>
          <Image src={questionMarkImage} className='w-8' alt='Question Mark Logo' />
        </div>
      </div>

      <div>
        <Image src={faceIcon} className='w-8' alt='Face Icon' />
      </div>
    </div>
  )
}
