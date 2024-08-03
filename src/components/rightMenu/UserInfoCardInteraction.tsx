'use client';

const UserInfoCardInteraction = (
    {
        isUserBlocked, isFollowingSent, isFollowing, userId, currentUserId
    }: {
        isUserBlocked: boolean, isFollowingSent: boolean, isFollowing: boolean, userId: string, currentUserId: string
    }) => {
    return (
        <>
            <form action=''>
                <button type='button' className='w-full bg-blue-500 text-white text-sm p-2 rounded-md'>
                    {isFollowingSent ? 'Friend Request Sent' : isFollowing ? 'Following' : 'Follow'}
                </button>
            </form>

            <form action='' className='self-end'>
                <span className='text-red-400 cursor-pointer text-xs'>{isUserBlocked ? 'Unblock User' : 'Block User'}</span>
            </form>
        </>
    )
}

export default UserInfoCardInteraction