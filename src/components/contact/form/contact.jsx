import Button from "../../layout/button/button";

export default function Contact() {

  return (
    <div className=" bg-black flex flex-col items-center max-lg:flex-none max-lg:bg-gray-50">
      <form className="p-20 m-4 w-2/5 flex flex-col rounded-xl max-lg:rounded-none max-md:w-[500px] bg-gray-50 max-lg:w-screen text-black   max-lg:flex-none ">
        <h4 className="text-xl p-1 font-One ">Nome</h4>
        <input
          className="text-gray-950 m-1 p-2 rounded-xl font-sans border-black "
          type="name"
          placeholder="Digite teu nome"
        />
        <h4 className="text-xl p-1  font-One">Email</h4>
        <input
          className="text-gray-950 m-1 p-2 rounded-xl font-sans border-black"
          type="email"
          placeholder="Digite teu email"
        />
        <h4 className="text-xl p-1 font-One ">Mensagem</h4>
        <div>
          <textarea
            className="resize-none w-full p-2 m-1  box-border border-2 rounded-xl border-transparent font-sans bg-white"
            placeholder="Digite sua mensagem"
            rows="10"
          />
          <div className="flex flex-row-reverse">
          <Button>Enviar</Button>
          </div>
         
        </div>
      </form>
    </div>
  );
}
