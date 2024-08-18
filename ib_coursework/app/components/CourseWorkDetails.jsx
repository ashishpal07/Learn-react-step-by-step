import Image from "next/image"
import handLogo from "../../public/HandLogo.png"
import starLogo from "../../public/starLogo.png"
import wordsLogo from "../../public/wordsLogo.png"
import timeLogo from "../../public/timeLogo.png"
import subjectLogo from "../../public/subjectLogo.png"

export const CourseWorkDetails = ({ wordCount, subject }) => {
  return (
    <div className="flex flex-wrap sm:gap-2 items-center text-sm font-semibold py-2 mt-1">
      <div className="flex items-center rounded-full bg-white p-1 sm:px-3 py-1 space-x-2">
        <Image src={subjectLogo} className="w-4 h-4" alt="Subject Logo" />
        <span className="text-xs sm:text-md">{subject}</span>
      </div>
      <div className="flex items-center space-x-2 rounded-full bg-white px-1 sm:px-3 py-1">
        <Image src={timeLogo} className="w-4 h-4" alt="Time Logo" />
        <span className="text-xs sm:text-md">18 min read</span>
      </div>
      <div className="flex items-center space-x-2 rounded-full bg-white px-1 sm:px-3 py-1">
        <Image src={wordsLogo} className="w-4 h-4" alt="Word Count Logo" />
        <span className="text-xs sm:text-md">{wordCount}</span>
      </div>
      <div className="flex items-center space-x-2 rounded-full bg-white px-1 sm:px-3 py-1">
        <Image src={starLogo} className="w-4 h-4" alt="Star Logo" />
        <span className="text-xs sm:text-md">7/7</span>
      </div>
      <div className="flex items-center space-x-2 rounded-full bg-white px-1 sm:px-3 py-1">
        <Image src={handLogo} className="w-4 h-4" alt="Language Logo" />
        <span className="text-xs sm:text-md">English</span>
      </div>
    </div>
  )
}
