'use client'

import Image from 'next/image'
import { GiHamburgerMenu } from 'react-icons/gi'
import zuaiLogo from '../../public/zuaiLogo.png'
import { useState } from 'react'
import Link from 'next/link'

export const Navbar = () => {
  const [leftOpen, setLeftOpen] = useState(false)
  const [rightOpen, setRightOpen] = useState(false)

  const leftClickHandler = () => {
    setLeftOpen(!leftOpen)
    setRightOpen(false)
  }

  const rightClickHandler = () => {
    setLeftOpen(false)
    setRightOpen(!rightOpen)
  }

  return (
    <div className='flex flex-col'>
      <div className='flex justify-between p-3 items-center border-2 border-b-slate-200'>
        <Image src={zuaiLogo} className='h-10 w-12' atl='ZuAi Logo' onClick={leftClickHandler} />
        <GiHamburgerMenu onClick={rightClickHandler} />
      </div>
      {rightOpen && (
        <div className='p-3'>
          <Link href={"/"} ><p className='border-b p-2'>Home</p></Link>
          <p className='border-b p-2'>Coins</p>
          <p className='border-b p-2'>streak</p>
          <p className='border-b p-2'>Calendar</p>
        </div>
      )}
      {leftOpen && (
        <div className='p-3'>
          <Link href={"/"} ><p className='border-b p-2'>Home</p></Link>
          <p className='border-b p-2'>Menu</p>
          <p className='border-b p-2'>Bookmark</p>
          <p className='border-b p-2'>Support</p>
        </div>
      )}
    </div>
  )
}
