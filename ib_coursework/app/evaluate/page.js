import { PdfViewer } from '../components/PdfViewer'
import { PerformanceSideBar } from '../components/PerformanceSideBar'
import { SideMenu } from '../components/SideMenu'
import { Streak } from '../components/Streak'

export default function evaluate () {
  return (
    <div className='bg-slate-100 flex justify-between min-h-screen'>
      <div className='w-[5%]'>
        <SideMenu />
      </div>
      <div className='flex justify-between p-2 space-x-8 w-[70%] mt-20'>
        <div className='flex-1 w-[70%]'>
          <PdfViewer />
        </div>
        <div className='w-[30%]'>
          <PerformanceSideBar />
        </div>
      </div>
      <div className='w-[5%]'>
        <Streak />
      </div>
    </div>
  )
}
