import Image from "next/image"
import handLogo from "../../public/HandLogo.png"
import starLogo from "../../public/starLogo.png"
import wordsLogo from "../../public/wordsLogo.png"
import timeLogo from "../../public/timeLogo.png"
import subjectLogo from "../../public/subjectLogo.png"

export const PdfDetails = ({ wordCount, subject }) => {
  return (
    <div className="flex flex-wrap gap-2 items-center text-sm font-semibold py-2 mt-2">
      <div className="flex items-center space-x-2 rounded-full bg-white px-3 py-1">
        <Image src={subjectLogo} className="w-6 h-6" alt="Subject Logo" />
        <span>{subject}</span>
      </div>
      <div className="flex items-center space-x-2 rounded-full bg-white px-3 py-1">
        <Image src={timeLogo} className="w-6 h-6" alt="Time Logo" />
        <span>18 min read</span>
      </div>
      <div className="flex items-center space-x-2 rounded-full bg-white px-3 py-1">
        <Image src={wordsLogo} className="w-6 h-6" alt="Word Count Logo" />
        <span>{wordCount}</span>
      </div>
      <div className="flex items-center space-x-2 rounded-full bg-white px-3 py-1">
        <Image src={starLogo} className="w-6 h-6" alt="Star Logo" />
        <span>7/7</span>
      </div>
      <div className="flex items-center space-x-2 rounded-full bg-white px-3 py-1">
        <Image src={handLogo} className="w-6 h-6" alt="Language Logo" />
        <span>English</span>
      </div>
    </div>
  )
}
