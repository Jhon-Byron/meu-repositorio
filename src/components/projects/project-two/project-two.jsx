import Button from "@/components/layout/button/button";
import Slide2 from "./slide2";


export default function ProjectOne() {
  return (
    <>
     <div className="grid grid-cols-2 gap-20 m-6 h-full ">
        <div className="bg-gray-50 p-36 rounded-xl text-gray-300">
          <h3 className="text-5xl text-black font-One mb-8">Jogo da Velha</h3>
          <p className="text-xl ">
          Jogo da Velha Moderno com React e Next.js{" "}
          </p>
          <p className="text-xl">
            <span className="font-bold text-black"> • Placar Atualizado:</span>{" "}
            Mantenha o controle da pontuação.
          </p>
          <p className="text-xl">
            <span className="font-bold text-black">• Vencedor Detectado:</span> Saiba instantaneamente quem ganhou.{" "}
          </p>
          <p className="text-xl">
            <span className="font-bold text-black"> • Reinício Simples:</span>{" "}
            Comece novamente em caso de empate.{" "}
          </p>
          <p className="text-xl">
          Experimente a diversão da velha escola com tecnologia de ponta. Jogue com amigos, A diversão é garantida!
          </p>
          <Button>Ver Site</Button>
        </div>
        <div >
          <Slide2 />
        </div>
      </div>
    </>
  );
}
