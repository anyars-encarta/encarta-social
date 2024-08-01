import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const MenuItems = () => {
    return (
        <div className='p-4 bg-white rounded-lg shadow-md overflow-hidden text-sm flex flex-col gap-2'>
            <Link href='/posts' className='flex gap-4 items-center p-2 hover:bg-slate-100 rounded-lg'>
                <Image src='/posts.png' width={20} height={20} alt='' className='cursor-pointer' />
                <span className='text-gray-500'>My Posts</span>
            </Link>

            <hr className='border-t-1 border-gray-50 w-36 self-center' />

            <Link href='/activity' className='flex gap-4 items-center p-2 hover:bg-slate-100 rounded-lg'>
                <Image src='/activity.png' width={20} height={20} alt='' className='cursor-pointer' />
                <span className='text-gray-500'>Activity</span>
            </Link>

            <hr className='border-t-1 border-gray-50 w-36 self-center' />

            <Link href='/marketplace' className='flex gap-4 items-center p-2 hover:bg-slate-100 rounded-lg'>
                <Image src='/market.png' width={20} height={20} alt='' className='cursor-pointer' />
                <span className='text-gray-500'>Marketplace</span>
            </Link>

            <hr className='border-t-1 border-gray-50 w-36 self-center' />

            <Link href='/events' className='flex gap-4 items-center p-2 hover:bg-slate-100 rounded-lg'>
                <Image src='/events.png' width={20} height={20} alt='' className='cursor-pointer' />
                <span className='text-gray-500'>Events</span>
            </Link>

            <hr className='border-t-1 border-gray-50 w-36 self-center' />

            <Link href='/albums' className='flex gap-4 items-center p-2 hover:bg-slate-100 rounded-lg'>
                <Image src='/albums.png' width={20} height={20} alt='' className='cursor-pointer' />
                <span className='text-gray-500'>Albums</span>
            </Link>

            <hr className='border-t-1 border-gray-50 w-36 self-center' />

            <Link href='/videos' className='flex gap-4 items-center p-2 hover:bg-slate-100 rounded-lg'>
                <Image src='/videos.png' width={20} height={20} alt='' className='cursor-pointer' />
                <span className='text-gray-500'>Videos</span>
            </Link>

            <hr className='border-t-1 border-gray-50 w-36 self-center' />

            <Link href='/news' className='flex gap-4 items-center p-2 hover:bg-slate-100 rounded-lg'>
                <Image src='/news.png' width={20} height={20} alt='' className='cursor-pointer' />
                <span className='text-gray-500'>News</span>
            </Link>

            <hr className='border-t-1 border-gray-50 w-36 self-center' />

            <Link href='/courses' className='flex gap-4 items-center p-2 hover:bg-slate-100 rounded-lg'>
                <Image src='/courses.png' width={20} height={20} alt='' className='cursor-pointer' />
                <span className='text-gray-500'>Courses</span>
            </Link>

            <hr className='border-t-1 border-gray-50 w-36 self-center' />

            <Link href='/lists' className='flex gap-4 items-center p-2 hover:bg-slate-100 rounded-lg'>
                <Image src='/lists.png' width={20} height={20} alt='' className='cursor-pointer' />
                <span className='text-gray-500'>Lists</span>
            </Link>

            <hr className='border-t-1 border-gray-50 w-36 self-center' />

            <Link href='/settings' className='flex gap-4 items-center p-2 hover:bg-slate-100 rounded-lg'>
                <Image src='/settings.png' width={20} height={20} alt='' className='cursor-pointer' />
                <span className='text-gray-500'>Settings</span>
            </Link>
        </div>
    )
}

export default MenuItems