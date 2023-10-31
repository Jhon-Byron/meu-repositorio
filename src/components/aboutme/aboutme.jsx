import Biography from "./biography/biography"

export default function Aboutme() {
  return(
    <>
      <div className=" w-full h-full bg-gray-100"> 
        <div>
          <div className="flex flex-col justify-center items-center ">
          <h1 className="font-One uppercase text-5xl pr-4 pl-4 text-black border-b-4 rounded-2xl border-b-slate-900 mb-4 mt-20 font-medium">Sobre mim</h1>
          <p className="text-black mb-16 mt-4 max-lg:p-4 max-md:text-center">Aqui voce encontrara mais informações sobre mim e minhas habilidades atuais na área da programação</p>
          </div>
          <div>
            <Biography />
          </div>
        </div> 
      </div>
    </>
  )
}