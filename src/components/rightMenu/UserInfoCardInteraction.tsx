'use client';

import { switchFollow } from "@/lib/actions";
import { useOptimistic, useState } from "react";

const UserInfoCardInteraction = (
    {
        isUserBlocked, isFollowingSent, isFollowing, userId, currentUserId
    }: {
        isUserBlocked: boolean, isFollowingSent: boolean, isFollowing: boolean, userId: string, currentUserId: string
    }) => {

    const [userState, setUserState] = useState({
        following: isFollowing,
        blocked: isUserBlocked,
        followingRequestSent: isFollowingSent,
    });

    const follow = async () => {
        switchOptimisticFollow('');

        try {
            await switchFollow(userId);
            setUserState((prev) => ({
                ...prev,
                following: prev.following && false,
                followingRequestSent: !prev.following && !prev.followingRequestSent ? true : false,
            }))
        } catch (e) {
            console.log(e)
        }
    };

    const [optimisticFollow, switchOptimisticFollow] = useOptimistic(
        userState, (state) => ({
            ...state,
            following: state.following && false,
            followingRequestSent: !state.following && !state.followingRequestSent ? true : false,
        })
    )

    return (
        <>
            <form action={follow}>
                <button className='w-full bg-blue-500 text-white text-sm p-2 rounded-md'>
                    {optimisticFollow.followingRequestSent ? 'Friend Request Sent' : optimisticFollow.following ? 'Following' : 'Follow'}
                </button>
            </form>

            <form action='' className='self-end'>
                <span className='text-red-400 cursor-pointer text-xs'>{optimisticFollow.blocked ? 'Unblock User' : 'Block User'}</span>
            </form>
        </>
    )
}

export default UserInfoCardInteraction