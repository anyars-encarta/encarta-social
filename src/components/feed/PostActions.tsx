'use client'

import { deletePost } from "@/lib/actions";
import Image from "next/image";
import { useState } from "react";

const PostActions = ({postId}: {postId: string}) => {
    const [open, setOpen] = useState(false);

    const deletePostWithId = deletePost.bind(null, postId);

    return (
        <div className='relative'>
            <Image
                src='/more.png'
                width={16}
                height={16}
                alt=''
                className='cursor-pointer'
                onClick={() => setOpen(prev => !prev)}
            />

            {open && (
                <div className='absolute top-4 right-0 bg-white p-4 w-32 rounded-lg flex flex-col gap-2 text-xs shadow-lg z-30'>
                    <span className='cursor-pointer'>View</span>
                    <span className='cursor-pointer'>Edit</span>
                    <span className='cursor-pointer'>Re-post</span>

                    <form action={deletePostWithId}>
                        <button className='text-red-500'>Delete</button>
                    </form>
                </div>
            )}
        </div>
    )
}

export default PostActions;