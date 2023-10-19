import Button from "../../layout/button/button"

export default function Contact() {
  return(
    <div className="flex flex-col items-center bg-gray-50 p-36 w-11/12 h-96 ml-[800px] mb-20">
      <form className="" action="">
        <h4 className="text-2xl">Nome</h4>
        <input type="name" placeholder="Digite teu nome" />
        <h4>Email</h4>
        <input type="email" placeholder="Digite teu email" />
        <h4>Mensagem</h4>
        <input type="text" placeholder="Digite sua mensagem" />
      </form>
      <Button>Enviar</Button>
    </div>
  )
}