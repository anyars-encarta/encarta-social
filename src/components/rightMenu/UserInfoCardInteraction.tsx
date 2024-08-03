'use client';

import { switchBlock, switchFollow } from "@/lib/actions";
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
        switchOptimisticState('follow');

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

    const block = async () => {
        switchOptimisticState('block');

        try {
            await switchBlock(userId);
            setUserState((prev) => ({
                ...prev,
                blocked: !prev.blocked,
            }))
        } catch (e) {
            console.log(e)
        }
    };

    const [optimisticState, switchOptimisticState] = useOptimistic(
        userState, (state, value: 'follow' | 'block') => value === 'follow'
            ? {
                    ...state,
                    following: state.following && false,
                    followingRequestSent: !state.following && !state.followingRequestSent ? true : false,
                } : {
                    ...state,
                    blocked: !state.blocked,
                }
    );

    return (
        <>
            <form action={follow}>
                <button className='w-full bg-blue-500 text-white text-sm p-2 rounded-md'>
                    {optimisticState.followingRequestSent ? 'Friend Request Sent' : optimisticState.following ? 'Following' : 'Follow'}
                </button>
            </form>

            <form action={block} className='self-end'>
                <button className='text-red-400 cursor-pointer text-xs'>{optimisticState.blocked ? 'Unblock User' : 'Block User'}</button>
            </form>
        </>
    )
}

export default UserInfoCardInteraction