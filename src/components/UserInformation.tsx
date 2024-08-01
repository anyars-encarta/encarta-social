import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const UserInformation = ({ userId }: { userId: string }) => {
    return (
        <div className='p-4 bg-white rounded-lg shadow-md overflow-hidden text-sm flex flex-col gap-4'>
            <div className='flex items-center justify-between font-medium'>
                <span className='text-gray-500'>User Information</span>
                <Link href='/' className='text-blue-500 text-xs'>See all</Link>
            </div>

            <div className='flex flex-col gap-4 text-gray-500'>
                <div className='flex items-center gap-2'>
                    <span className='text-xl text-black'>John Doe</span>
                    <span className='text-sm'>@john_doe</span>
                </div>

                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptatum earum atque libero laboriosam sit eos beatae
                    dolore harum labore?
                </p>

                <div className='flex gap-2 items-center'>
                    <Image src='/map.png' alt='' width={16} height={16} />
                    <span>Living in <b>Spain</b></span>
                </div>

                <div className='flex gap-2 items-center'>
                    <Image src='/school.png' alt='' width={16} height={16} />
                    <span>Went to <b>Umukoro High School</b></span>
                </div>

                <div className='flex gap-2 items-center'>
                    <Image src='/work.png' alt='' width={16} height={16} />
                    <span>Works at <b>Finger Licking</b></span>
                </div>

                <div className='flex items-center justify-between'>
                    <div className='flex gap-1 items-center'>
                        <Image src='/link.png' alt='' width={16} height={16} />
                        <Link href='https://lama.dev' className='text-blue-500 font-medium'>lama.dev</Link>
                    </div>

                    <div className='flex gap-1 items-center'>
                        <Image src='/date.png' alt='' width={16} height={16} />
                        <span>Joined November, 2024</span>
                    </div>
                </div>

                <button type='button' className='bg-blue-500 text-white text-sm p-2 rounded-md'>Following</button>
                <span className='self-end text-red-400 cursor-pointer text-xs'>Block User</span>
            </div>
        </div >
    )
}

export default UserInformation