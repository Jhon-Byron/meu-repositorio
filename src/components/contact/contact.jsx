import Button from "../layout/button/button"

export default function Contact() {
  return(
    <div className="flex flex-col items-center">
      <form action="">
        <h4>nome</h4>
        <input type="name" placeholder="Digite teu nome" />
        <h4>email</h4>
        <input type="email" placeholder="Digite teu email" />
        <h4>mensagem</h4>
        <input type="text" placeholder="Digite sua mensagem" />
      </form>
      <Button>Enviar</Button>
    </div>
  )
}