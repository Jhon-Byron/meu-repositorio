import Profile from "./profile"

export default function Navbar() {
  return(
    <>
      <div className=' text-black bg-slate-100  w-full '>
        <div className="flex items-center justify-between p-1-5">
          <div className="flex items-center ">
            <Profile/>
        </div>
          <div className='flex gap-5 flex-row-reverse p-8 mr-4 ' >
            <h3>Contato</h3>
            <h3>Sobre</h3>
            <h3>Habilidades</h3>
            <h3>Projetos</h3>
          </div>
        </div>
      </div>
    </>
    
  )
}
