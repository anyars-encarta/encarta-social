'use client';

const UserInfoCardInteraction = (
    {
        isUserBlocked, isFollowingSent, isFollowing, userId, currentUserId
    }: {
        isUserBlocked: boolean, isFollowingSent: boolean, isFollowing: boolean, userId: string, currentUserId: string
    }) => {
    return (
        <>
            <button type='button' className='bg-blue-500 text-white text-sm p-2 rounded-md'>
                {isFollowingSent ? 'Friend Request Sent' : isFollowing ? 'Following' : 'Follow'}
            </button>
            <span className='self-end text-red-400 cursor-pointer text-xs'>{isUserBlocked ? 'Unblock User' : 'Block User'}</span>
        </>
    )
}

export default UserInfoCardInteraction