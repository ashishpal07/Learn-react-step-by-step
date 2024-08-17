import Image from 'next/image';
import uploadLogo from '@/public/uploadLogo.png';

export const AfterUpload = ({fileData, setFileData}) => {
  return (
    <div className='flex items-center justify-center'>
      <div className='bg-gray-100 p-4 rounded-md flex items-center'>
        <div className='mr-3'>
          <Image src={uploadLogo} className='w-6' alt='File Icon' />
        </div>
        <div>
          <p className='text-sm text-green-600'>{fileData.name}</p>
        </div>
        <button
          onClick={() => setFileData(null)}
          className='ml-3 text-red-600 font-bold'
        >
          ×
        </button>
      </div>
    </div>
  )
}
