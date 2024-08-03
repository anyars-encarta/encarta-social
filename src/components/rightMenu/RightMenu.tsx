import { User } from '@prisma/client'
import Ads from '../Ads'
import Birthdays from './Birthdays'
import FriendRequest from './FriendRequests'
import UserInformation from './UserInformation'
import UserMedia from './UserMedia'
import { Suspense } from 'react'

const RightMenu = ({ user }: { user: User }) => {
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