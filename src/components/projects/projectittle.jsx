import ProjectOne from "./project-one/project-one"
import ProjectTwo from "./project-two/project-two"

export default function ProjectTitle() {
  return(
    <>
       <div className=" w-full h-[1750px]  bg-gray-100 border-b-2"> 
        <div>
          <div className="flex flex-col justify-center items-center ">
          <h1 className="font-One uppercase text-5xl pr-4 pl-4 text-black border-b-4 rounded-2xl border-b-slate-900 mb-4 mt-20 font-medium">Meus Projetos</h1>
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