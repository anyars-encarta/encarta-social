'use client';

import { User } from '@prisma/client';
import { useState } from 'react';
import Image from "next/image";
import { updateProfile } from '@/lib/actions';

const UpdateUser = ({ user }: { user: User }) => {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false)
  };

  // const update = async () => {
  //   try {
  //     await updateProfile(user.id, formData)
  //   } catch (e) {
  //     console.log(e)
  //   }
  // };

  return (
    <div className=''>
      <span className='text-blue-500 text-xs cursor-pointer' onClick={() => setOpen(true)}>Update</span>

      {open && (
        <div className='absolute w-screen h-screen top-0 left-0 bg-black bg-opacity-65 flex items-center justify-center z-50'>
          <form action={updateProfile} className='p-12 bg-white rounded-lg shadow-md flex flex-col gap-2 w-full md:w-1/2 xl:w-1/3 relative'>
            {/* TITLE */}
            <h1>Update Profile</h1>

            <div className='mt-4 text-xs text-gray-500'>
              Use the navbar profile to change the avatar and the username
            </div>

            {/* COVER PICTURE UPLOAD */}
            <div className='flex flex-col gap-4 my-4'>
              <label htmlFor='cover'>Cover Picture</label>

              <div className='flex items-center gap-2 cursor-pointer'>
                <Image src={user.cover || '/noCover.png'} alt='' width={48} height={32} className='w-12 h-8 rounded-md object-cover' />
                <span className='text-sx underline text-gray-600'>Change</span>
              </div>
            </div>

            {/* INPUT WRAPPER */}
            <div className='flex flex-wrap justify-between gap-2 xl:gap-4'>

              {/* INPUT */}
              <div className='flex flex-col gap-4'>
                <label htmlFor='name' className='text-xs text-gray-500'>First Name</label>
                <input type='text' id='name' name='name' placeholder={user.name || 'John'} className='ring-1 ring-gray-300 p-[13px] rounded-md text-sm' />
              </div>

              {/* INPUT */}
              <div className='flex flex-col gap-4'>
                <label htmlFor='surname' className='text-xs text-gray-500'>Surname</label>
                <input type='text' id='surname' name='surname' placeholder={user.surname || 'Doe'} className='ring-1 ring-gray-300 p-[13px] rounded-md text-sm' />
              </div>

              {/* INPUT */}
              <div className='flex flex-col gap-4'>
                <label htmlFor='description' className='text-xs text-gray-500'>Description</label>
                <input type='text' id='description' name='description' placeholder={user.description || 'Life is beautiful...'} className='ring-1 ring-gray-300 p-[13px] rounded-md text-sm' />
              </div>

              {/* INPUT */}
              <div className='flex flex-col gap-4'>
                <label htmlFor='city' className='text-xs text-gray-500'>City</label>
                <input type='text' id='city' name='city' placeholder={user.city || 'Accra'} className='ring-1 ring-gray-300 p-[13px] rounded-md text-sm' />
              </div>

              {/* INPUT */}
              <div className='flex flex-col gap-4'>
                <label htmlFor='school' className='text-xs text-gray-500'>School</label>
                <input type='text' id='school' name='school' placeholder={user.school || 'St. Anthony Secondary School'} className='ring-1 ring-gray-300 p-[13px] rounded-md text-sm' />
              </div>

              {/* INPUT */}
              <div className='flex flex-col gap-4'>
                <label htmlFor='work' className='text-xs text-gray-500'>Work</label>
                <input type='text' id='work' name='work' placeholder={user.work || 'Google Inc.'} className='ring-1 ring-gray-300 p-[13px] rounded-md text-sm' />
              </div>

              {/* INPUT */}
              <div className='flex flex-col gap-4'>
                <label htmlFor='website' className='text-xs text-gray-500'>Website</label>
                <input type='text' id='website' name='website' placeholder={user.website || 'https://www.johndoe.com'} className='ring-1 ring-gray-300 p-[13px] rounded-md text-sm' />
              </div>
            </div>

            <button className='bg-blue-500 p-2  mt-2 rounded-md text-white'>Update</button>

            <div className='absolute text-lg right-2 top-3 cursor-pointer' onClick={handleClose}>X</div>
          </form>

        </div>
      )}
    </div>
  )
}

export default UpdateUser