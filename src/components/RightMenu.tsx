import Ads from './Ads'
import Birthdays from './Birthdays'
import FriendRequest from './FriendRequests'
import UserInformation from './UserInformation'
import UserMedia from './UserMedia'

const RightMenu = ({ userId }: { userId?: string }) => {
  return (
    <div className='flex flex-col gap-6'>
      {userId && (
        <>
          <UserInformation userId={userId} />
          <UserMedia userId={userId} />
        </>
      )}

      <FriendRequest />
      <Birthdays />
      <Ads size='md' />
    </div>
  )
}

export default RightMenu