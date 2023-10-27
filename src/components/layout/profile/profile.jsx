import { CgProfile } from 'react-icons/Cg'

export default function Profile() {
  return(
    <>
      <div className='flex items-center max-lg:relative max-lg:left-3 max-lg:top-1 max-lg:bottom-4  '>
        <div className='w-10 h-10 mr-4 mb-2 overflow-hidden hover:scale-150 duration-300 '>
          <CgProfile className='w-full h-full object-cover object-center inline-block cursor-pointer ' />
        </div>
      </div>
    </>
    
  )
}