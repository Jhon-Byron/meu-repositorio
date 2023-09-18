import ProjectOne from "./project-one/project-one"
import ProjectTwo from "./project-two/project-two"

export default function ProjectTitle() {
  return(
    <>
       <div className=" w-full h-full bg-gray-50"> 
        <div>
          <div className="flex flex-col justify-center items-center ">
          <h1 className="font-One text-[100px] text-black border-b-2 mb-4 mt-20 font-medium bg-red-800 ">Meus Projetos</h1>
          <p className="text-black mb-20">Aqui voce encontrara projetos pessoais e seu caso de estudo </p>
          </div>
          <div>
            <ProjectOne />
            <ProjectTwo />
          </div>
        </div> 
      </div>
    </>
  )
}