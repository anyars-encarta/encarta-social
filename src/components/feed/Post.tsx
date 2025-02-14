import Image from "next/image"
import Interactions from "./Interactions"
import Comments from "./Comments"
import { Post as PostType, User } from "@prisma/client"
import { Suspense } from "react"
import PostActions from "./PostActions"
import { auth } from "@clerk/nextjs/server"

type FeedPostType = PostType & { user: User } & { likes: [{ userId: string }] } & { _count: { comments: number } }

const Post = ({ post }: { post: FeedPostType }) => {
    const { userId } = auth();
    return (
        <div className='flex flex-col gap-4'>
            {/* USER */}
            <div className='flex items-center justify-between'>
                <div className='flex gap-4 items-center'>
                    <Image src={post.user.avatar || 'noAvatar.png'} width={40} height={40} alt='' className='w-10 h-10 object-cover rounded-full' />
                    <span className='font-medium'>{(post.user.name && post.user.surname) ? post.user.name + ' ' + post.user.surname : post.user.username}</span>
                </div>

                {userId === post.user.id && <PostActions postId={post.id} />}
            </div>

            {/* DESCRIPTION*/}
            <div className='flex flex-col gap-4'>
                {post.img && (
                    <div className='w-full min-h-96 relative'>
                        <Image src={post.img} fill alt='' className='object-cover rounded-md' />
                    </div>
                )}

                <p>{post.desc}</p>
            </div>

            {/* INTERACTIONS */}
            <Suspense fallback='Loading...'>
                <Interactions postId={post.id} likes={post.likes.map((like) => like.userId)} commentNumber={post._count.comments} />
            </Suspense>

            {/* COMMENTS */}
            <Suspense fallback='Loading...'>
                <Comments postId={post.id} />
            </Suspense>
        </div>
    )
}

export default Post