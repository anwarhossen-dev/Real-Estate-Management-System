import { NAVBAR_HEIGHT } from '@/lib/constants'
import Image from 'next/image'
import Link from 'next/link'

import React from 'react'
import { Button } from './ui/button'

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 w-full z-50 shadow-xl" style={{height: `${NAVBAR_HEIGHT}px`}}
    >
        <div className='flex justify-between items-center w-full py-3 px-8 bg-primary-700'>
            <div className='flex items-center gap-4 md:gap-6'>
                <Link href={'/'}
                className='cursor-pointer hover:!text-primary-300 '
                scroll={false}>
                    <div className="flex items-center gap-3">
                        <Image 
                        src="/logo.svg" 
                        alt="Rentiful Logo"
                         width={24} 
                         height={24} 
                         className="w-6 h-6" />
                         <div className="text-secondary-500 font-light hover:!text-primary-300">Rent</div>
                         <span className="text-secondary-500 font-light hover:!text-primary-300">IFUL</span>
                    </div>
                </Link>
               
            </div>
             <p className="text-primary-200 hidden md:block">Discover Your Perfect Rental Apartment with our advanced search </p>
             {/* <div className='flex items-center gap-5'>
                <Link href={'/sign-in'} 
                className='text-primary-200 hover:!text-primary-300'>
                <Button variant="outline"
                className="text-black border-white bg-transparent hover:bg-white hover:text-primary-700 rounded-lg">
                    Sign In
                </Button>
                </Link>
                <Link href={'/sign-up'} 
                className='text-primary-200 hover:!text-primary-300'>
                <Button variant="outline"
                className="text-red-500 bg-secondary-600 hover:bg-white hover:text-primary-700 rounded-lg">
                    Sign Up
                </Button>
                </Link>
             </div> */}

             <div className='flex items-center gap-5'>
  <Link href={'/sign-up'} 
    className='text-primary-200 hover:!text-primary-300 transition-colors duration-200'>
    <Button variant="outline"
      className="text-primary-500 bg-secondary-600 rounded-lg
                 transition-all duration-200 ease-in-out
                 hover:bg-white hover:text-primary-700
                 hover:scale-105 hover:shadow-lg
                 active:scale-95">
        Sign Up
    </Button>
  </Link>

  <Link href={'/sign-up'} 
    className='text-primary-200 hover:!text-primary-300 transition-colors duration-200'>
    <Button variant="outline"
      className="text-red-500 bg-secondary-600 rounded-lg
                 transition-all duration-200 ease-in-out
                 hover:bg-white hover:text-primary-700
                 hover:scale-105 hover:shadow-lg
                 active:scale-95">
        Sign Up
    </Button>
  </Link>
</div>
        </div>
    </div>
  )
}

export default Navbar