import Ads from '../Ads'
import Birthdays from './Birthdays'
import FriendRequest from './FriendRequests'
import UserInformation from './UserInformation'
import UserMedia from './UserMedia'
import { Suspense } from 'react'
import { auth } from '@clerk/nextjs/server'
import prisma from '@/lib/client'

const RightMenu = async () => {
  const { userId } = auth();

  if(!userId) throw new Error('User is not authenticated!')

  const user = await prisma.user.findFirst({
    where: {
      id: userId,
    },
  });

  return (
    <div className='flex flex-col gap-6'>
      {user ? (
        <>
          <Suspense fallback='loading...'>
            <UserInformation user={user} />
          </Suspense>

          <Suspense fallback='loading...'>
            <UserMedia user={user} />
          </Suspense>
        </>
      ) : null}

      <FriendRequest />
      <Birthdays />
      <Ads size='md' />
    </div>
  )
}

export default RightMenu