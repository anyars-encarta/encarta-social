'use client'

import { acceptFollowRequest, declineFollowRequest } from '@/lib/actions';
import { FollowRequest, User } from '@prisma/client'
import Image from 'next/image'
import { useOptimistic, useState } from 'react';

type RequestWithUser = FollowRequest & {
    sender: User
};

const FriendRequestsList = ({ requests }: { requests: RequestWithUser[] }) => {
    const [requestState, setRequestState] = useState(requests);

    const accept = async (requestId: string, userId: string) => {
        removeOptimisticRequest(requestId);

        try {
            await acceptFollowRequest(userId)
            setRequestState((prev) => prev.filter(req => req.id !== requestId))
        } catch (e) {
            console.log(e);
        }
    }

    const decline = async (requestId: string, userId: string) => {
        removeOptimisticRequest(requestId);

        try {
            await declineFollowRequest(userId)
            setRequestState((prev) => prev.filter(req => req.id !== requestId))
        } catch (e) {
            console.log(e);
        }
    }

    const [optimisticRequests, removeOptimisticRequest] = useOptimistic(
        requestState,
        (state, value: string) => state.filter((req) => req.id !== value));

    return (
        <div className=''>
            {
                optimisticRequests.map((request) => (
                    <div key={request.id} className='flex items-center justify-between'>
                        <div className='flex gap-4 items-center justify-center'>
                            <Image src={request.sender.avatar || '/noAvatar.png'} width={40} height={40} alt='' className='w-10 h-10 object-cover rounded-full' />
                            <span className='font-semibold'>{(request.sender.name && request.sender.surname) ? request.sender.name + ' ' + request.sender.surname : request.sender.username}</span>
                        </div>

                        <div className='flex gap-3'>
                            <form action={() => accept(request.id, request.sender.id)}>
                                <button>
                                    <Image src='/accept.png' width={20} height={20} alt='' className='cursor-pointer' />
                                </button>
                            </form>

                            <form action={() => decline(request.id, request.sender.id)}>
                                <button>
                                    <Image src='/reject.png' width={20} height={20} alt='' className='cursor-pointer' />
                                </button>
                            </form>
                        </div>
                    </div>
                ))
            }
        </div >
    )
}

export default FriendRequestsList