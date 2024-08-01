import Link from 'next/link'
import React from 'react'

const UserMedia = ({ userId }: { userId: string }) => {
    return (
        <div className='p-4 bg-white rounded-lg shadow-md overflow-hidden text-sm flex flex-col gap-4'>
            <div className='flex items-center justify-between font-medium'>
                <span className='text-gray-500'>User Media</span>
                <Link href='/' className='text-blue-500 text-xs'>See all</Link>
            </div>

        </div>
    )
}

export default UserMedia