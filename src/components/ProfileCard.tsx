import prisma from '@/lib/client';
import { auth } from '@clerk/nextjs/server';
import Image from 'next/image';
import Link from 'next/link';

const ProfileCard = async () => {
    const { userId } = auth();

    if (!userId) return null;

    const user = await prisma.user.findFirst({
        where: {
            id: userId,
        },
        include: {
            _count: {
                select: {
                    followers: true
                }
            }
        }
    });
    
    if (!user) return null;

    console.log('User include followers: ', user)
    
    return (
        <div className='p-4 bg-white rounded-lg shadow-md overflow-hidden text-sm flex flex-col gap-6'>
            <div className='h-20 relative'>
                <Image src={user.cover || '/noCover.png'} alt='' fill className='object-cover rounded-md' />
                <Image src={user.avatar || '/noAvatar.png'} alt='' width={48} height={48} className='w-12 h-12 object-cover rounded-full absolute ring-1 ring-white left-0 right-0 m-auto -bottom-6 z-10' />
            </div>

            <div className='h-20 flex flex-col gap-2 items-center'>
                <span className='font-semibold'>{(user.name && user.surname) ? user.name + ' ' + user.surname : user.username } </span>

                <div className='flex items-center gap-4'>
                    <div className='flex items-center'>
                        <Image src='https://images.pexels.com/photos/27255539/pexels-photo-27255539/free-photo-of-woman-in-white-dress-crouching-in-flowers.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' alt='' width={12} height={12} className='w-3 h-3 object-cover rounded-full' />
                        <Image src='https://images.pexels.com/photos/27255539/pexels-photo-27255539/free-photo-of-woman-in-white-dress-crouching-in-flowers.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' alt='' width={12} height={12} className='w-3 h-3 object-cover rounded-full' />
                        <Image src='https://images.pexels.com/photos/27255539/pexels-photo-27255539/free-photo-of-woman-in-white-dress-crouching-in-flowers.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' alt='' width={12} height={12} className='w-3 h-3 object-cover rounded-full' />
                    </div>
                    <span className='text-xs text-gray-500'>{user?._count.followers} Followers</span>
                </div>

                <Link href={`/profile/${userId}`} className='bg-blue-500 text-white text-xs p-2 rounded-md'>My Profile</Link>
            </div>
        </div>
    )
}

export default ProfileCard