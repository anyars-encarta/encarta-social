import Link from 'next/link'
import React from 'react'
import MobileMenu from './MobileMenu'
import Image from 'next/image'

const Navbar = () => {
    return (
        <div className='h-24 flex items-center justify-between'>
            {/* LEFT */}
            <div className='md:hidden lg:block w-[20%]'>
                <Link href='/' className='font-bold text-xl text-blue-600'>ENCARTASOCIAL</Link>
            </div>

            {/* CENTRE */}
            <div className='hidden md:flex w-[50%] text-sm'>
                {/* LINKS */}
                <div className='flex gap-6 text-gray-600 items-center justify-center'>
                    <Link href='/' className='flex gap-2 items-center justify-center'>
                        <Image src='/home.png' width={16} height={16} alt='home' className='w-4 h-4' />
                        <span>Homepage</span>
                    </Link>
                    <Link href='/' className='flex gap-2 items-center justify-center'>
                        <Image src='/friends.png' width={16} height={16} alt='friends' className='w-4 h-4' />
                        <span>Friends</span>
                    </Link>
                    <Link href='/' className='flex gap-2 items-center justify-center'>
                        <Image src='/stories.png' width={16} height={16} alt='stories' className='w-4 h-4' />
                        <span>Stories</span>
                    </Link>
                </div>
            </div>

            {/* RIGHT */}
            <div className='w-[30%] flex items-center gap-4 xl:gap-8 justify-end'>
                <MobileMenu />
            </div>
        </div>
    )
}

export default Navbar