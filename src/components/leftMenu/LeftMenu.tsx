import React from 'react';
import MenuItems from '../MenuItems';
import Ads from '../Ads';
import ProfileCard from './ProfileCard';

const LeftMenu = ({ type }: { type: 'home' | 'profile' }) => {
  return (
    <div className='flex flex-col gap-6'>
      {type === 'home' && (
        <ProfileCard />
      )}
      <MenuItems />
      <Ads size='sm' />
    </div>
  )
}

export default LeftMenu