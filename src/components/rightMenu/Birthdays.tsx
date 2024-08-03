import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Birthdays = () => {
    return (
        <div className='p-4 bg-white rounded-lg shadow-md overflow-hidden text-sm flex flex-col gap-4'>
            <span className='text-gray-500'>Birthdays</span>

            <div className='flex items-center justify-between'>
                <div className='flex gap-4 items-center justify-center'>
                    <Image src='https://images.pexels.com/photos/22027141/pexels-photo-22027141/free-photo-of-farmer-in-hat-sitting-on-field.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' width={40} height={40} alt='' className='w-10 h-10 object-cover rounded-full' />
                    <span className='font-semibold'>John Doe</span>
                </div>

                <button type='button' className='bg-blue-500 text-white text-xs px-2 py-1 rounded-md cursor-pointer'>Celebrate</button>
            </div>

            {/* UPCOMING BIRTHDAYS */}
            <div className='bg-slate-100 rounded-lg p-4 flex items-center gap-4'>
                <Image src='/gift.png' width={24} height={24} alt='' />
                
                <Link href='/' className='flex flex-col gap-1 text-xs'>
                    <span className='text-gray-700 font-semibold'>Upcoming Birthdays</span>
                    <span className='text-gray-500'>See other 16 upcoming birthdays</span>
                </Link>
            </div>
        </div>
    )
}

export default Birthdays