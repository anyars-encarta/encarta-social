import Image from "next/image"

const Interactions = () => {
    return (
        <div className='flex items-center justify-between text-sm my-4 flex-wrap'>
            {/* LEFT */}
            <div className='flex items-center gap-8'>
                <div className='flex gap-4 items-center bg-slate-50 p-2 rounded-xl'>
                    <Image src='/like.png' width={16} height={16} alt='' className='cursor-pointer' />
                    <span className='text-gray-300'>|</span>
                    <span className='text-gray-500'>0<span className='hidden md:inline'> Likes</span></span>
                </div>

                <div className='flex gap-4 items-center bg-slate-50 p-2 rounded-xl'>
                    <Image src='/comment.png' width={16} height={16} alt='' className='cursor-pointer' />
                    <span className='text-gray-300'>|</span>
                    <span className='text-gray-500'>0<span className='hidden md:inline'> Comments</span></span>
                </div>
            </div>

            {/* LEFT */}
            <div className='flex gap-4 items-center bg-slate-50 p-2 rounded-xl'>
                <Image src='/share.png' width={16} height={16} alt='' className='cursor-pointer' />
                <span className='text-gray-300'>|</span>
                <span className='text-gray-500'>0<span className='hidden md:inline'> Shares</span></span>
                
            </div>
        </div>
    )
}

export default Interactions