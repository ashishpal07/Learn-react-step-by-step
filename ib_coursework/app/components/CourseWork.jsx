import Image from 'next/image'
import pdfSnap from '../../public/pdfPhoto.png'
import { PdfDetails } from './PdfDetails'

export const Coursework = ({ key, file }) => {
  return (
    <div key={key} className='bg-slate-50 p-3 rounded-lg shadow-md flex gap-x-6'>
      <div className='mb-1'>
        <Image
          src={pdfSnap}
          alt={file.name}
          className='rounded-md'
        />
      </div>
      <div>
        <h3 className='font-bold text-lg mb-2'>
          {file.name.length > 25
            ? `${file.name.substring(0, 25)}...`
            : file.name}
        </h3>
        <p>How does the temperature of a Copper pipe affect the time it takes a magnet t...</p>
        <PdfDetails subject={file.courseworkDetails?.subject} wordCount={file.wordCount} />
      </div>
    </div>
  )
}
