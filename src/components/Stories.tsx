import Image from 'next/image'
import React from 'react'

const Stories = () => {
  return (
    <div className='p-4 bg-white rounded-lg shadow-md overflow-x-scroll text-xs scrollbar-hide'>
      <div className='flex gap-8 w-max'>
        {/* STORIES */}
        <div className='flex flex-col items-center gap-2 cursor-pointer'>
          <Image src='https://images.pexels.com/photos/22027141/pexels-photo-22027141/free-photo-of-farmer-in-hat-sitting-on-field.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' width={80} height={80} alt='' className='w-20 h-20 rounded-full ring-2'/>
          <span className='font-medium'>Martin</span>
        </div>

        <div className='flex flex-col items-center gap-2 cursor-pointer'>
          <Image src='https://images.pexels.com/photos/15812624/pexels-photo-15812624/free-photo-of-woman-posing-on-stadium.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' width={80} height={80} alt='' className='w-20 h-20 rounded-full ring-2'/>
          <span>Lawrence</span>
        </div>

        <div className='flex flex-col items-center gap-2 cursor-pointer'>
          <Image src='https://images.pexels.com/photos/22027141/pexels-photo-22027141/free-photo-of-farmer-in-hat-sitting-on-field.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' width={80} height={80} alt='' className='w-20 h-20 rounded-full ring-2'/>
          <span>Will</span>
        </div>

        <div className='flex flex-col items-center gap-2 cursor-pointer'>
          <Image src='https://images.pexels.com/photos/15812624/pexels-photo-15812624/free-photo-of-woman-posing-on-stadium.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' width={80} height={80} alt='' className='w-20 h-20 rounded-full ring-2'/>
          <span>Smith</span>
        </div>

        <div className='flex flex-col items-center gap-2 cursor-pointer'>
          <Image src='https://images.pexels.com/photos/22027141/pexels-photo-22027141/free-photo-of-farmer-in-hat-sitting-on-field.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' width={80} height={80} alt='' className='w-20 h-20 rounded-full ring-2'/>
          <span>Chris</span>
        </div>

        <div className='flex flex-col items-center gap-2 cursor-pointer'>
          <Image src='https://images.pexels.com/photos/15812624/pexels-photo-15812624/free-photo-of-woman-posing-on-stadium.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' width={80} height={80} alt='' className='w-20 h-20 rounded-full ring-2'/>
          <span>Rock</span>
        </div>

        <div className='flex flex-col items-center gap-2 cursor-pointer'>
          <Image src='https://images.pexels.com/photos/22027141/pexels-photo-22027141/free-photo-of-farmer-in-hat-sitting-on-field.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' width={80} height={80} alt='' className='w-20 h-20 rounded-full ring-2'/>
          <span>Jackie</span>
        </div>

        <div className='flex flex-col items-center gap-2 cursor-pointer'>
          <Image src='https://images.pexels.com/photos/15812624/pexels-photo-15812624/free-photo-of-woman-posing-on-stadium.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' width={80} height={80} alt='' className='w-20 h-20 rounded-full ring-2'/>
          <span>Chan</span>
        </div>

        <div className='flex flex-col items-center gap-2 cursor-pointer'>
          <Image src='https://images.pexels.com/photos/22027141/pexels-photo-22027141/free-photo-of-farmer-in-hat-sitting-on-field.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' width={80} height={80} alt='' className='w-20 h-20 rounded-full ring-2'/>
          <span>James</span>
        </div>

        <div className='flex flex-col items-center gap-2 cursor-pointer'>
          <Image src='https://images.pexels.com/photos/15812624/pexels-photo-15812624/free-photo-of-woman-posing-on-stadium.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' width={80} height={80} alt='' className='w-20 h-20 rounded-full ring-2'/>
          <span>Bond</span>
        </div>
      </div>
    </div>
  )
}

export default Stories