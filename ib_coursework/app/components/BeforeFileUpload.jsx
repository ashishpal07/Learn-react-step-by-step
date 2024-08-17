import Image from 'next/image';
import uploadLogo from '@/public/uploadLogo.png';

export const BeforeFileUpload = () => {
  return (
    <>
      <div className='flex justify-center'>
        <Image src={uploadLogo} className='w-10' alt='Upload Logo' />
      </div>
      <p className='text-gray-500'>
        Drag and drop a PDF <br />
        <span className='text-sm text-gray-400'>*Limit 25 MB per file.</span>
      </p>
      <button className='mt-4 text-purple-800 font-bold border-[1px] border-purple-500 px-5 py-2 rounded-[20px]'>
        Upload your file
      </button>
    </>
  )
}
