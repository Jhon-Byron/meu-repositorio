import Biography from "./biography/biography"
import Skills from "./skills/skills"

export default function Aboutme() {
  return(
    <>
      <div className=" w-full h-[1290px] bg-gray-50"> 
        <div>
          <div className="flex flex-col justify-center items-center ">
          <h1 className="font-One text-[100px] text-black border-b-2 mb-4 mt-20 font-medium bg-red-800 ">Sobre min</h1>
          <p className="text-black mb-20">Aqui voce encontrara mais informações sobre mim e minhas habilidades atuais na area da programação</p>
          </div>
          <div>
            <Biography />
          </div>
        </div> 
      </div>
    </>
  )
}