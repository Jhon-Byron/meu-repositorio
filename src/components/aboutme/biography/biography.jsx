import Button from "@/components/layout/button/button"
import Skills from "../skills/skills"

export default function Biography() {
  return(
    <>
      <div className="grid grid-flow-col w-full h-96">
        <div className="flex flex-col ml-60">
          <h3 className="text-5xl text-black font-One mb-8">Me Conheça!</h3>
          <div className="bg-blue-800 max-w-md p-4">
            <p className="text-xl">ola meu nome e <br /> 
            <span className="text-bold">Jhon Byron Sarria Brito</span>, <br />tenho 23 anos, atualmente trabalhando na area da industria, desde pequeno sempre gostei de tecnologia mas nunca me imaginei poder trabalhar nesse ramo tao incrível da programação ate o ano de 2023 onde tive a oportunidade de conhecer a area de desenvolvimento web onde a ideia de poder criar sistemas simples aos complexos me da animo para estudar e me aperfeiçoar cada vez mais nesse ramo  </p>
            <Button>Contato</Button>
          </div>
        </div>
        <div className="">
        <Skills/>
        </div>
      </div>
    </>
  )
}