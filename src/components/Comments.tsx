import Image from 'next/image'
import React from 'react'

const Comments = () => {
    return (
        <div className=''>
            {/* WRITE COMMENTS */}
            <div className='flex items-center gap-4'>
                <Image src='https://images.pexels.com/photos/22027141/pexels-photo-22027141/free-photo-of-farmer-in-hat-sitting-on-field.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' width={32} height={32} alt='' className='w-8 h-8 object-cover rounded-full' />

                <div className='flex items-center justify-between w-full bg-gray-100 rounded-xl text-sm px-6 py-2'>
                    <input type='text' placeholder='Write a comment...' className='bg-transparent flex-1 outline-none' />
                    <Image src='/emoji.png' width={32} height={32} alt='' className='w-8 h-8 cursor-pointer' />
                </div>
            </div>

            {/* READ COMMENTS */}
            <div className=''>
                Comments
            </div>
        </div>
    )
}

export default Comments