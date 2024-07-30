import Link from 'next/link'
import React from 'react'
import MobileMenu from './MobileMenu'
import Image from 'next/image'
import { ClerkLoaded, ClerkLoading, SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'

const Navbar = () => {
    return (
        <div className='h-24 flex items-center justify-between'>
            {/* LEFT */}
            <div className='md:hidden lg:block w-[20%]'>
                <Link href='/' className='font-bold text-xl text-blue-600'>ENCARTASOCIAL</Link>
            </div>

            {/* CENTRE */}
            <div className='hidden md:flex w-[50%] text-sm items-center justify-between'>
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

                <div className='hidden xl:flex p-2 bg-slate-100 items-center justify-between rounded-xl'>
                    <input type='text' placeholder='Search...' className='bg-transparent outline-none' />
                    <Image src='/search.png' width={14} height={14} alt=''/>
                </div>
            </div>

            {/* RIGHT */}
            <div className='w-[30%] flex items-center gap-4 xl:gap-8 justify-end'>
                <ClerkLoading>
                    <div className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-gray-500 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white" />
                </ClerkLoading>

                <ClerkLoaded>
                    <SignedIn>
                        <div className='cursor-pointer'>
                            <Image src='/people.png' alt='' width={24} height={24} />
                        </div>
                        <div className='cursor-pointer'>
                            <Image src='/messages.png' alt='' width={20} height={20} />
                        </div>
                        <div className='cursor-pointer'>
                            <Image src='/notifications.png' alt='' width={20} height={20} />
                        </div>
                        <UserButton />
                    </SignedIn>

                    <SignedOut>
                        <div className='flex items-center justify-center gap-2 text-sm'>
                            <Image src='/login.png' alt='' width={20} height={20} />
                            <Link href='/sign-in'>Login/Register</Link>
                        </div>
                        {/* <SignInButton /> */}
                    </SignedOut>
                </ClerkLoaded>
                <MobileMenu />
            </div>
        </div>
    )
}

export default Navbar