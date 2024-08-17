import Image from 'next/image'
import sideImage from '../../public/sideImage.png'
import { FileUpload } from './FileUpload'

export const FormComponent = () => {
  return (
    <div className='flex items-end'>
      <div className='w-[70%]'>
        <FileUpload />
      </div>
      {/* <div> */}
        <Image
          src={sideImage}
          className='w-[30%] flex px-3'
          alt='Main Photo'
        />
      {/* </div> */}
    </div>
  )
}
