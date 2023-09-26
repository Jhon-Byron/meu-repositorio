import Button from "../layout/button/button"

export default function Contact() {
  return(
    <div>
      <form action="">
        <input type="name" placeholder="Digite teu nome" />
        <input type="email" placeholder="Digite teu email" />
        <input type="text" placeholder="Digite sua mensagem" />
        <Button>Enviar</Button>
      </form>
    </div>
  )
}