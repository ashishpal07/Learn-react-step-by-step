import Image from 'next/image'
import sideImage from '../../public/sideImage.png'
import { FileUpload } from './FileUpload'

export const FormComponent = () => {
  return (
    <div className='flex items-end'>
      <div className='w-7/10'>
        <FileUpload />
      </div>
      <Image src={sideImage} className='hidden lg:block w-[25%] px-3' alt='Main Photo' />
    </div>
  )
}
