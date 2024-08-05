'use client';

import { useFormStatus } from "react-dom";

const AddPostButton = () => {
    const { pending } = useFormStatus();

    return (
        <button className='bg-blue-500 p-2 mt-2 rounded-md text-white disabled:bg-blue-300 disabled:cursor-not-allowed' disabled={pending}>
            {pending ? (
                <div className='flex items-center gap-2'>
                    <div className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-gray-500 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white" />
                    Posting
                </div>
        ) : (
                'Post'
            )}
        </button>
    )
}

export default AddPostButton