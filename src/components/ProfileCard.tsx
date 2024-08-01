import Image from 'next/image'
import React from 'react'

const ProfileCard = () => {
    return (
        <div className='p-4 bg-white rounded-lg shadow-md overflow-hidden text-sm flex flex-col gap-6'>
            <div className='h-20 relative'>
                <Image src='https://images.pexels.com/photos/20157647/pexels-photo-20157647/free-photo-of-vintage-tram-on-the-street-of-lisbon.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' alt='' fill className='object-cover rounded-md' />
                <Image src='https://images.pexels.com/photos/27255539/pexels-photo-27255539/free-photo-of-woman-in-white-dress-crouching-in-flowers.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' alt='' width={48} height={48} className='w-12 h-12 object-cover rounded-full absolute ring-1 ring-white left-0 right-0 m-auto -bottom-6 z-10' />
            </div>

            <div className='h-20 flex flex-col gap-2 items-center'>
                <span className='font-semibold'>John Doe</span>

                <div className='flex items-center gap-4'>
                    <div className='flex items-center'>
                        <Image src='https://images.pexels.com/photos/27255539/pexels-photo-27255539/free-photo-of-woman-in-white-dress-crouching-in-flowers.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' alt='' width={12} height={12} className='w-3 h-3 object-cover rounded-full' />
                        <Image src='https://images.pexels.com/photos/27255539/pexels-photo-27255539/free-photo-of-woman-in-white-dress-crouching-in-flowers.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' alt='' width={12} height={12} className='w-3 h-3 object-cover rounded-full' />
                        <Image src='https://images.pexels.com/photos/27255539/pexels-photo-27255539/free-photo-of-woman-in-white-dress-crouching-in-flowers.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' alt='' width={12} height={12} className='w-3 h-3 object-cover rounded-full' />
                    </div>
                    <span className='text-xs text-gray-500'>500 Followers</span>
                </div>

                <button type='button' className='bg-blue-500 text-white text-xs p-2 rounded-md'>My Profile</button>
            </div>
        </div>
    )
}

export default ProfileCard