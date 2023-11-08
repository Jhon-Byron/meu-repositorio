import ProjectOne from "./project-one/project-one"
import ProjectTwo from "./project-two/project-two"

export default function ProjectTitle() {
  return(
    <>
       <div id="Projetos" className=" w-full h-full bg-gray-100 border-b-2 "> 
        <div className="flex flex-col justify-center items-center max-lg:gap-5">
          <div className="flex flex-col justify-center items-center max-lg:gap-5">
          <h1 className="font-One uppercase text-5xl pr-4 pl-4 text-black border-b-4 rounded-2xl border-b-slate-900 mb-4 mt-20 font-medium max-lg:text-5xl max-lg:text-center max-lg:p-1 ">Meus Projetos</h1>
          <p className="text-black mb-20 max-lg:text-center max-lg:m-1 max-lg:p-2">Aqui voce encontrara projetos pessoais e seus respetivos sites </p>
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