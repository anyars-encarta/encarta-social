import Image from 'next/image'
import React from 'react'

const Ads = ({ size }: { size: 'sm' | 'md' | 'lg' }) => {
    return (
        <div className='p-4 bg-white rounded-lg shadow-md overflow-hidden text-sm flex flex-col'>
            <div className='flex items-center justify-between text-gray-500 font-medium'>
                <span className=''>Sponsored Ads</span>
                <Image src='/more.png' width={16} height={16} alt='' />
            </div>

            <div className={`flex flex-col mt-4 ${size === 'sm' ? 'gap-2' : 'gap-4'}`}>
                <div className={`relative w-full ${size === 'sm' ? 'h-24' : size === 'md' ? 'h-36' : 'h-48'}`}>
                    <Image src='https://images.pexels.com/photos/26997905/pexels-photo-26997905/free-photo-of-woman-running-in-golden-field.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' fill alt='' className='object-cover rounded-lg' />
                </div>

                <div className='flex gap-4 items-center'>
                    <Image src='https://images.pexels.com/photos/26997905/pexels-photo-26997905/free-photo-of-woman-running-in-golden-field.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' width={24} height={24} alt='' className='w-6 h-6 object-cover rounded-full' />
                    <span className='font-medium text-blue-500'>BigChef Lounge</span>
                </div>

                <p className={`${size === 'sm' ? 'text-xs' : 'text-sm'}`}>
                    {size === 'sm'
                        ? "Lorem ipsum dolor sit amet consectetur adipisicing elit."
                        : size === 'md'
                        ? "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore sapiente libero, repellat nemo nisi temporibus aliquam fugit eius"
                        : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore sapiente libero, repellat nemo nisi temporibus aliquam fugit eius, hic, doloribus aliquid non optio tenetur asperiores esse dolores porro eum voluptas?"
            }
                </p>

                <button type='button' className='text-center bg-gray-200 text-gray-500 p-2 text-xs rounded-lg'>Learn More</button>
            </div>
        </div>
    )
}

export default Ads