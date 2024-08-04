'use client'

import { FollowRequest, User } from '@prisma/client'
import Image from 'next/image'

type RequestWithUser = FollowRequest & {
    sender: User
};

const FriendRequestsList = ({ requests }: { requests: RequestWithUser[] }) => {
    
    return (
        <div className=''>
            {
                requests.map((request) => (
                    <div key={request.id} className='flex items-center justify-between'>
                        <div className='flex gap-4 items-center justify-center'>
                            <Image src={request.sender.avatar || '/noAvatar.png'} width={40} height={40} alt='' className='w-10 h-10 object-cover rounded-full' />
                            <span className='font-semibold'>{(request.sender.name && request.sender.surname) ? request.sender.name + ' ' + request.sender.surname : request.sender.username}</span>
                        </div>

                        <div className='flex gap-3'>
                            <Image src='/accept.png' width={20} height={20} alt='' className='cursor-pointer' />
                            <Image src='/reject.png' width={20} height={20} alt='' className='cursor-pointer' />
                        </div>
                    </div>
                ))
            }
        </div >
    )
}

export default FriendRequestsList