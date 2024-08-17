import { CourseworkList } from './components/CourseWorkList'
import { FilteredCourseWorkList } from './components/FilteredCourseWorkList'
import { Streak } from './components/Streak'
import { SideMenu } from './components/SideMenu'
import { FormComponent } from '@/app/components/FormComponent'

export default function Home () {
  return (
    <div className='bg-slate-100 flex justify-between'>
      <div className='md:w-[5%]'>
        <SideMenu />
      </div>
      <div className='flex flex-col mt-20 md:w-[75%] lg:w-[65%]'>
        <FormComponent />

        <CourseworkList />

        <FilteredCourseWorkList />
      </div>
      <div className='md:w-[5%]'>
        <Streak />
      </div>
    </div>
  )
}
