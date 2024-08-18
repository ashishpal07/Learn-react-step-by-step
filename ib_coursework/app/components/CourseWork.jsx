import Image from 'next/image'
import pdfSnap from '../../public/pdfPhoto.png'
import { CourseWorkDetails } from './CourseWorkDetails'
import Link from 'next/link'

export const Coursework = ({ key, file }) => {
  return (
    <Link href={'/evaluate'}>
      <div
        key={key}
        className='bg-slate-50 p-1 sm:p-3 rounded-lg flex mt-2 shadow-md'
      >
        <div className='mb-1'>
          <Image
            src={pdfSnap}
            alt={file.name}
            className='hidden rounded-md xl:block '
          />
        </div>
        <div className='ml-2'>
          <h3 className='font-bold mb-1 sm:text-xl'>
            {file.name.length > 25
              ? `${file.name.substring(0, 25)}...`
              : file.name}
          </h3>
          <p className='text-sm lg:text-lg text-slate-500'>
            How does the temperature of a Copper pipe affect the time it takes a
            magnet t...
          </p>
          <CourseWorkDetails
            subject={file.courseworkDetails?.subject}
            wordCount={file.wordCount}
          />
        </div>
      </div>
    </Link>
  )
}
