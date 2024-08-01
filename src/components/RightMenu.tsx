import Ads from './Ads'
import Birthdays from './Birthdays'
import FriendRequest from './FriendRequests'

const RightMenu = ({ userId }: { userId?: string }) => {
  return (
    <div className='flex flex-col gap-6'>
      <FriendRequest />
      <Birthdays />
      <Ads size='md'/>
    </div>
  )
}

export default RightMenu