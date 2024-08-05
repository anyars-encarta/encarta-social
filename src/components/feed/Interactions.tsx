'use client';

import { switchLike } from "@/lib/actions";
import { useAuth } from "@clerk/nextjs"
import Image from "next/image"
import { useOptimistic, useState } from "react";

const Interactions = ({ postId, likes, commentNumber }: { postId: string, likes: string[], commentNumber: number }) => {
    const { isLoaded, userId } = useAuth();

    const [likeState, setLikeState] = useState({
        likeCount: likes.length,
        isLiked: userId ? likes.includes(userId) : false,
    });

    const [optimisticLike, switchOptimisticLike] = useOptimistic(likeState, (state, value) => {
        return {
            likeCount: state.isLiked ? state.likeCount - 1 : state.likeCount + 1,
            isLiked: !state.isLiked,
        };
    });

    const likeAction = async () => {
        switchOptimisticLike('')

        try {
            await switchLike(postId);
            setLikeState((state) => ({
                likeCount: state.isLiked ? state.likeCount - 1 : state.likeCount + 1,
                isLiked: !state.isLiked,
            }));

        } catch (e) {
            console.log(e)
        }
    };

    return (
        <div className='flex items-center justify-between text-sm my-4 flex-wrap'>
            {/* LEFT */}
            <div className='flex items-center gap-8'>
                <div className='flex gap-4 items-center bg-slate-50 p-2 rounded-xl'>
                    <form action={likeAction}>
                        <button>
                            <Image src={optimisticLike.isLiked ? '/liked.png' : '/like.png'} width={16} height={16} alt='' className='cursor-pointer' />
                        </button>
                    </form>
                    <span className='text-gray-300'>|</span>
                    <span className='text-gray-500'>{optimisticLike.likeCount}<span className='hidden md:inline'> Likes</span></span>
                </div>

                <div className='flex gap-4 items-center bg-slate-50 p-2 rounded-xl'>
                    <Image src='/comment.png' width={16} height={16} alt='' className='cursor-pointer' />
                    <span className='text-gray-300'>|</span>
                    <span className='text-gray-500'>{commentNumber}<span className='hidden md:inline'> Comments</span></span>
                </div>
            </div>

            {/* LEFT */}
            <div className='flex gap-4 items-center bg-slate-50 p-2 rounded-xl'>
                <Image src='/share.png' width={16} height={16} alt='' className='cursor-pointer' />
                <span className='text-gray-300'>|</span>
                <span className='hidden md:inline'>Share</span>
            </div>
        </div>
    )
}

export default Interactions