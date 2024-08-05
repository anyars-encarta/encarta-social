'use client';

import { addComment } from '@/lib/actions';
import { useUser } from '@clerk/nextjs';
import { Comment, User } from '@prisma/client';
import Image from 'next/image';
import React, { useOptimistic, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

type CommentWithUser = Comment & { user: User };

const CommentList = ({ comments, postId }: { comments: CommentWithUser[], postId: string }) => {
    const { user } = useUser();

    const [commentState, setCommentState] = useState(comments)
    const [desc, setDesc] = useState('')

    const add = async () => {
        if (!user || !desc) return;

        addOptimisticComment({
            id: uuidv4(),
            desc,
            createdAt: new Date(Date.now()),
            updatedAt: new Date(Date.now()),
            userId: user.id,
            postId,
            user: {
                id: user.id,
                username: 'Sending, please wait...',
                avatar: user.imageUrl || '/noAvatar.png',
                cover: '',
                description: '',
                name: '',
                surname: '',
                city: '',
                work: '',
                school: '',
                website: '',
                createdAt: new Date(Date.now()),
            },
        })

        try {
            const createdComment = await addComment(postId, desc);
            setCommentState(prev => [createdComment, ...prev])
        } catch (e) {
            console.log(e)
        }
    };

    const [optimisticComment, addOptimisticComment] = useOptimistic(commentState, (state, value: CommentWithUser) => [value, ...state])
    return (
        <>
            {user && (
                <div className='flex items-center gap-4'>
                    <Image src={user.imageUrl || '/noAvatar.png'} width={32} height={32} alt='' className='w-8 h-8 object-cover rounded-full' />

                    <form action={add} className='flex items-center justify-between w-full bg-gray-100 rounded-xl text-sm px-6 py-2'>
                        <input type='text' placeholder='Write a comment...' onChange={(e) => setDesc(e.target.value)} className='bg-transparent flex-1 outline-none' />
                        <Image src='/emoji.png' width={32} height={32} alt='' className='w-8 h-8 cursor-pointer' />
                    </form>
                </div>
            )}

            {/* READ COMMENTS */}
            {optimisticComment.map((comment) => (
                <div className='flex gap-4 justify-between mt-6' key={comment.id}>
                    {/* AVATAR */}
                    <Image src={comment.user.avatar || 'noAvatar.png'} width={40} height={40} alt='' className='w-10 h-10 object-cover rounded-full' />

                    {/* COMMENT */}
                    <div className='flex flex-col gap-2 flex-1'>
                        <span className='font-medium'>{(comment.user.name && comment.user.surname) ? comment.user.name + ' ' + comment.user.surname : comment.user.username}</span>
                        <p>{comment.desc}</p>

                        <div className='flex items-center gap-8 text-xs text-gray-500'>
                            <div className='flex gap-4 items-center'>
                                <Image src='/like.png' width={12} height={12} alt='' className='cursor-pointer' />
                                <span className='text-gray-300'>|</span>
                                <span className='text-gray-500'>0<span className='hidden md:inline'> Likes</span></span>
                            </div>

                            <div className='cursor-pointer'>Reply</div>
                        </div>
                    </div>

                    {/* MORE */}
                    <Image src='/more.png' width={16} height={16} alt='' className='cursor-pointer w-4 h-4' />
                </div>
            ))}
        </>
    )
}

export default CommentList