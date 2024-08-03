import { auth } from '@clerk/nextjs/server';
import Image from 'next/image'
import React from 'react'

const AddPost = async () => {
    const { userId } = auth();

    return (
        <div className='p-4 bg-white shadow-md rounded-lg flex gap-4 justify-between text-sm'>
            {/* AVATAR */}
            <Image src='https://images.pexels.com/photos/22027141/pexels-photo-22027141/free-photo-of-farmer-in-hat-sitting-on-field.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' width={48} height={48} alt='' className='w-12 h-12 object-cover rounded-full' />

            {/* POST */}
            <div className='flex-1'>
                {/* TEXT INPUT WITH EMOJI*/}
                <form action='' className='flex gap-4'>
                    <textarea name='desc' id='' placeholder="What's on your mind?" className='bg-slate-100 rounded-lg flex-1 p-2' />
                    <Image src='/emoji.png' width={20} height={20} alt='' className='w-5 h-5 cursor-pointer self-end' />
                    <button>Send</button>
                </form>

                {/* POST OPTIONS */}
                <div className='flex items-center gap-4 mt-4 text-gray-400 flex-wrap'>
                    <div className='flex items-center gap-2 cursor-pointer'>
                        <Image src='/addimage.png' width={20} height={20} alt='' />
                        Photos
                    </div>

                    <div className='flex items-center gap-2 cursor-pointer'>
                        <Image src='/addVideo.png' width={20} height={20} alt='' />
                        Videos
                    </div>

                    <div className='flex items-center gap-2 cursor-pointer'>
                        <Image src='/poll.png' width={20} height={20} alt='' />
                        Poll
                    </div>

                    <div className='flex items-center gap-2 cursor-pointer'>
                        <Image src='/addevent.png' width={20} height={20} alt='' />
                        Event
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddPost