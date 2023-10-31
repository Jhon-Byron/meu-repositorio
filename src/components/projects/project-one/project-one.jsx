import Button from "@/components/layout/button/button";
import Slide1 from "./slide1";

export default function ProjectOne() {
  return (
    <>
       <div className="grid grid-cols-2 gap-20 m-6  h-full  max-lg:grid-cols-none max-lg:m-0 max-lg:flex max-lg:flex-col max-lg:items-center">
        <div className="bg-gray-50 p-36 rounded-xl text-gray-300  max-lg:p-4 max-lg:rounded-none max-lg:flex max-lg:flex-col max-lg:items-center">
          <h3 className="text-5xl text-black font-One mb-8 border-b-2 border-black">Social Dev</h3>
          <p className="text-xl ">
            Rede Social para Programadores foi desenvolvido uma rede social para
            programadores cujo objetivo é criar uma comunidade onde
            programadores possam compartilhar conhecimento e aprender juntos{" "}
          </p>
          <p className="text-xl">
            <span className="font-bold text-black"> • Frontend:</span>{" "}
            Utilizamos React, Next.js e Styled Components para uma interface
            responsiva e atraente.
          </p>
          <p className="text-xl">
            <span className="font-bold text-black">• Backend:</span> Construímos
            o backend com Node.js e Next.js, enfocando segurança e desempenho.{" "}
          </p>
          <p className="text-xl">
            <span className="font-bold text-black"> • Banco de Dados:</span>{" "}
            Armazenamos dados dos usuários de forma eficiente no MongoDB usando
            Mongoose.{" "}
          </p>
          <p className="text-xl">
            Implementando autenticação segura e funcionalidades para criar,
            editar e excluir textos de autoria dos usuários.
          </p>
          <Button>Ver Site</Button>
        </div>
        <div className="max-lg:grid-cols-none max-lg:gap-0 max-lg:relative max-lg:bottom-10" >
          <Slide1 />
        </div>
      </div>
    </>
  );
}
