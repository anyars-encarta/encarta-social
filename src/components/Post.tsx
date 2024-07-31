import Image from "next/image"
import Interactions from "./Interactions"
import Comments from "./Comments"

const Post = () => {
    return (
        <div className='flex flex-col gap-4'>
            {/* USER */}
            <div className='flex items-center justify-between'>
                <div className='flex gap-4 items-center'>
                    <Image src='https://images.pexels.com/photos/22027141/pexels-photo-22027141/free-photo-of-farmer-in-hat-sitting-on-field.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' width={40} height={40} alt='' className='w-10 h-10 object-cover rounded-full' />
                    <span className='font-medium'>John Doe</span>
                </div>

                <Image src='/more.png' width={16} height={16} alt='' className='cursor-pointer' />
            </div>

            {/* DESCRIPTION*/}
            <div className='flex flex-col gap-4'>
                <div className='w-full min-h-96 relative'>
                    <Image src='https://images.pexels.com/photos/26997905/pexels-photo-26997905/free-photo-of-woman-running-in-golden-field.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' fill alt='' className='object-cover rounded-md' />
                </div>

                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. At corporis iure sunt
                    dolor quas ipsam quidem temporibus quae maxime suscipit et, deserunt distinctio
                    aliquam quis reiciendis vero eaque dolorem voluptatibus.
                </p>
            </div>

            {/* INTERACTIONS */}
            <Interactions />

            {/* COMMENTS */}
            <Comments />
        </div>
    )
}

export default Post