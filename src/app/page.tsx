import Stories from "@/components/Stories"
import LeftMenu from "@/components/leftMenu/LeftMenu"
import RightMenu from "@/components/rightMenu/RightMenu"
import AddPost from "@/components/AddPost"
import Feed from "@/components/feed/Feed"

// const user = await currentUser();

const Homepage = () => {
  return (
    <div className='flex gap-6 pt-6'>
      {/* LEFT */}
      <div className='hidden xl:block w-[20%]'>
        <LeftMenu type='home' />
      </div>

      {/* CENTER */}
      <div className='w-full lg:w-[70%] xl:w-[50%]'>
        <div className='flex flex-col gap-6'>
          <Stories />
          <AddPost />
          <Feed />
        </div>
      </div>

      {/* RIGHT */}
      <div className='hidden lg:block w-[30%]'>
        <RightMenu />
      </div>
    </div>
  )
}

export default Homepage