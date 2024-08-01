import Image from "next/image"
import Link from "next/link"

const FriendRequests = () => {
    return (
        <div className='p-4 bg-white rounded-lg shadow-md overflow-hidden text-sm flex flex-col gap-4'>
            <div className='flex items-center justify-between font-medium'>
                <span className='text-gray-500'>Friend Requets</span>
                <Link href='/' className='text-blue-500 text-xs'>See all</Link>
            </div>

            <div className='flex items-center justify-between'>
                <div className='flex gap-4 items-center justify-center'>
                    <Image src='https://images.pexels.com/photos/22027141/pexels-photo-22027141/free-photo-of-farmer-in-hat-sitting-on-field.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' width={40} height={40} alt='' className='w-10 h-10 object-cover rounded-full' />
                    <span className='font-semibold'>John Doe</span>
                </div>

                <div className='flex gap-3'>
                    <Image src='/accept.png' width={20} height={20} alt='' className='cursor-pointer' />
                    <Image src='/reject.png' width={20} height={20} alt='' className='cursor-pointer' />
                </div>
            </div>

            <div className='flex items-center justify-between'>
                <div className='flex gap-4 items-center justify-center'>
                    <Image src='https://images.pexels.com/photos/22027141/pexels-photo-22027141/free-photo-of-farmer-in-hat-sitting-on-field.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' width={40} height={40} alt='' className='w-10 h-10 object-cover rounded-full' />
                    <span className='font-semibold'>John Doe</span>
                </div>

                <div className='flex gap-3'>
                    <Image src='/accept.png' width={20} height={20} alt='' className='cursor-pointer' />
                    <Image src='/reject.png' width={20} height={20} alt='' className='cursor-pointer' />
                </div>
            </div>

            <div className='flex items-center justify-between'>
                <div className='flex gap-4 items-center justify-center'>
                    <Image src='https://images.pexels.com/photos/22027141/pexels-photo-22027141/free-photo-of-farmer-in-hat-sitting-on-field.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' width={40} height={40} alt='' className='w-10 h-10 object-cover rounded-full' />
                    <span className='font-semibold'>John Doe</span>
                </div>

                <div className='flex gap-3'>
                    <Image src='/accept.png' width={20} height={20} alt='' className='cursor-pointer' />
                    <Image src='/reject.png' width={20} height={20} alt='' className='cursor-pointer' />
                </div>
            </div>
        </div>
    )
}

export default FriendRequests