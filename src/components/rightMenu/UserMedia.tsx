import { User } from '@prisma/client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const UserMedia = ({ user }: { user: User }) => {
    return (
        <div className='p-4 bg-white rounded-lg shadow-md overflow-hidden text-sm flex flex-col gap-4'>
            <div className='flex items-center justify-between font-medium'>
                <span className='text-gray-500'>User Media</span>
                <Link href='/' className='text-blue-500 text-xs'>See all</Link>
            </div>

            <div className='flex gap-4 flex-wrap justify-between'>
                <div className='relative w-1/5 h-24'>
                    <Image src='https://images.pexels.com/photos/22027141/pexels-photo-22027141/free-photo-of-farmer-in-hat-sitting-on-field.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' fill alt='' className='object-cover rounded-md' />
                </div>

                <div className='relative w-1/5 h-24'>
                    <Image src='https://images.pexels.com/photos/22027141/pexels-photo-22027141/free-photo-of-farmer-in-hat-sitting-on-field.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' fill alt='' className='object-cover rounded-md' />
                </div>

                <div className='relative w-1/5 h-24'>
                    <Image src='https://images.pexels.com/photos/22027141/pexels-photo-22027141/free-photo-of-farmer-in-hat-sitting-on-field.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' fill alt='' className='object-cover rounded-md' />
                </div>

                <div className='relative w-1/5 h-24'>
                    <Image src='https://images.pexels.com/photos/22027141/pexels-photo-22027141/free-photo-of-farmer-in-hat-sitting-on-field.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' fill alt='' className='object-cover rounded-md' />
                </div>

                <div className='relative w-1/5 h-24'>
                    <Image src='https://images.pexels.com/photos/22027141/pexels-photo-22027141/free-photo-of-farmer-in-hat-sitting-on-field.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' fill alt='' className='object-cover rounded-md' />
                </div>

                <div className='relative w-1/5 h-24'>
                    <Image src='https://images.pexels.com/photos/22027141/pexels-photo-22027141/free-photo-of-farmer-in-hat-sitting-on-field.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' fill alt='' className='object-cover rounded-md' />
                </div>

                <div className='relative w-1/5 h-24'>
                    <Image src='https://images.pexels.com/photos/22027141/pexels-photo-22027141/free-photo-of-farmer-in-hat-sitting-on-field.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' fill alt='' className='object-cover rounded-md' />
                </div>

                <div className='relative w-1/5 h-24'>
                    <Image src='https://images.pexels.com/photos/22027141/pexels-photo-22027141/free-photo-of-farmer-in-hat-sitting-on-field.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' fill alt='' className='object-cover rounded-md' />
                </div>
            </div>
        </div>
    )
}

export default UserMedia