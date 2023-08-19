import { CgProfile } from 'react-icons/Cg'

export default function Profile() {
  return(
    <>
      <div className='flex items-center '>
        <div className='w-14 h-14  mr-6 ml-20 overflow-hidden'>
          <CgProfile className='w-full h-full object-cover object-center block' />
        </div> 
          <span className='uppercase font-bold  '>Jhon byron</span>
      </div>
    </>
    
  )
}