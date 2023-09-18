import Button from "@/components/layout/button/button"

export default function ProjectOne() {
  return(
    <>
    <div className="grid grid-cols-2 gap-20 h-full ">
        <div className="bg-blue-800 p-36">
          <h3 className="text-5xl text-black font-One mb-8">Me Conheça!</h3>
            <p className="text-xl">ola meu nome e <br /> 
            <span className="text-bold">Jhon Byron Sarria Brito</span>, <br />tenho 23 anos, atualmente trabalhando na area da industria, desde pequeno sempre gostei de tecnologia mas nunca me imaginei poder trabalhar nesse ramo tao incrível da programação ate o ano de 2023 onde tive a oportunidade de conhecer a area de desenvolvimento web onde a ideia de poder criar sistemas simples aos complexos me da animo para estudar e me aperfeiçoar cada vez mais nesse ramo  </p>
            <Button>Contato</Button>  
        </div>
        <div className="bg-projectContainer bg-no-repeat bg-center bg-red-800  p-10">
          <h3 className="text-5xl font-One text-black mb-10">my skills</h3>
          
        </div>
      </div>
    </>
  )
}