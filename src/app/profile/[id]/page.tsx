import Feed from '@/components/Feed'
import LeftMenu from '@/components/LeftMenu';
import RightMenu from '@/components/RightMenu'
import Image from 'next/image';
// import { currentUser } from '@clerk/nextjs/server'

// const user = await currentUser();

const ProfilePage = () => {
  return (
    <div className='flex gap-6 pt-6'>
      {/* LEFT */}
      <div className='hidden xl:block w-[20%]'>
        <LeftMenu type='profile' />
      </div>

      {/* CENTER */}
      <div className='w-full lg:w-[70%] xl:w-[50%]'>
        <div className='flex flex-col gap-6'>
          <div className='flex flex-col items-center justify-center'>
            <div className='w-full h-64 relative'>
              <Image src='https://images.pexels.com/photos/15747244/pexels-photo-15747244/free-photo-of-car-and-motorcycle-on-road-between-trees.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' alt='' fill className='rounded-md object-cover'/>
              <Image src='https://images.pexels.com/photos/19621112/pexels-photo-19621112/free-photo-of-man-holding-woman-by-swimming-pool-against-sandy-desert.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' alt='' width={128} height={128} className='w-32 h-32 object-cover rounded-full absolute left-0 right-0 m-auto -bottom-16 ring-4 ring-white'/>
            </div>

            <h1 className='mt-20 mb-4 text-2xl font-medium'>John Doe</h1>

            <div className='flex items-center justify-center gap-12 mb-4'>
              <div className='flex flex-col items-center'>
                <span className='font-medium'>145k</span>
                <span className='text-sm'>Posts</span>
              </div>

              <div className='flex flex-col items-center'>
                <span className='font-medium'>576</span>
                <span className='text-sm'>Followers</span>
              </div>

              <div className='flex flex-col items-center'>
                <span className='font-medium'>124</span>
                <span className='text-sm'>Following</span>
              </div>
            </div>
          </div>

          <Feed />
        </div>
      </div>

      {/* RIGHT */}
      <div className='hidden lg:block w-[30%]'>
        <RightMenu userId='123' />
      </div>
    </div>
  )
}

export default ProfilePage