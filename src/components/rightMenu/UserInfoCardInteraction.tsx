'use client';

import { switchFollow } from "@/lib/actions";
import { useState } from "react";

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
        
        const [loading, setLoading] = useState(false);

        const follow = async () => {
            setLoading(true);
            try {
                await switchFollow(userId);
                setUserState((prev) => ({
                    ...prev, 
                    following: prev.following && false,
                    followingRequestSent: !prev.following && !prev.followingRequestSent ? true : false,
                }))

                setLoading(false);
            } catch (e) {
                console.log(e)
                setLoading(false);
            }
        }

    return (
        <>
            <form action={follow}>
                <button className='w-full bg-blue-500 text-white text-sm p-2 rounded-md'>
                    {userState.followingRequestSent ? 'Friend Request Sent' : userState.following ? 'Following' : 'Follow'}
                </button>
            </form>

            <form action='' className='self-end'>
                <span className='text-red-400 cursor-pointer text-xs'>{userState.blocked ? 'Unblock User' : 'Block User'}</span>
            </form>
        </>
    )
}

export default UserInfoCardInteraction