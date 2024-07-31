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
            <div className='flex gap-4 justify-between mt-6'>
                {/* AVATAR */}
                <Image src='https://images.pexels.com/photos/22027141/pexels-photo-22027141/free-photo-of-farmer-in-hat-sitting-on-field.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' width={40} height={40} alt='' className='w-10 h-10 object-cover rounded-full' />

                {/* COMMENT */}
                <div className='flex flex-col gap-2 flex-1'>
                    <span className='font-medium'>John Doe</span>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Eum a incidunt tempora obcaecati at provident expedita ducimus? Veritatis repellat
                        explicabo esse sunt illum! Fugit aperiam, vitae hic earum quis expedita!
                    </p>

                    <div className='flex items-center gap-8 text-xs text-gray-500'>
                        <div className='flex gap-4 items-center'>
                            <Image src='/like.png' width={12} height={12} alt='' className='cursor-pointer' />
                            <span className='text-gray-300'>|</span>
                            <span className='text-gray-500'>0<span className='hidden md:inline'> Likes</span></span>
                        </div>

                        <div className='cursor-pointer'>Reply</div>
                    </div>
                </div>

                {/* MORE */}
                <Image src='/more.png' width={16} height={16} alt='' className='cursor-pointer w-4 h-4' />
            </div>
        </div>
    )
}

export default Comments