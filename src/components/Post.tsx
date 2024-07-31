import Image from "next/image"

const Post = () => {
    return (
        <div className='flex flex-col gap-4'>
            {/* USER */}
            <div className='flex items-center justify-between'>
                <div className='flex gap-4 items-center'>
                    <Image src='https://images.pexels.com/photos/22027141/pexels-photo-22027141/free-photo-of-farmer-in-hat-sitting-on-field.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' width={40} height={40} alt='' className='w-10 h-10 object-cover rounded-full' />
                    <span className='font-medium'>John Doe</span>
                </div>

                <Image src='/more.png' width={16} height={16} alt='' />
            </div>

            {/* DESCRIPTION*/}
            <div className=''></div>

            {/* INTERACTIONS */}
            <div className=''></div>
        </div>
    )
}

export default Post