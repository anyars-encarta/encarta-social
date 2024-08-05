import prisma from '@/lib/client'
import React from 'react'
import CommentList from './CommentList';

const Comments = async ({ postId }: {postId: string}) => {

    const comments = await prisma.comment.findMany({
        where: {
            postId,
        },
        include: {
            user: true,
        },
    });

    return (
        <div className=''>
            {/* WRITE COMMENTS */}
            <CommentList comments={comments} postId={postId} />
        </div>
    )
}

export default Comments