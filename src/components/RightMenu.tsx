import { User } from '@prisma/client'
import Ads from './Ads'
import Birthdays from './Birthdays'
import FriendRequest from './FriendRequests'
import UserInformation from './UserInformation'
import UserMedia from './UserMedia'

const RightMenu = ({ user }: { user: User }) => {
    return (
    <div className='flex flex-col gap-6'>
      {user && (
        <>
          <UserInformation user={user} />
          <UserMedia user={user} />
        </>
      )}

      <FriendRequest />
      <Birthdays />
      <Ads size='md' />
    </div>
  )
}

export default RightMenu