import { useState } from "react"; // Importe o useState do React

import Image from "next/image";

export default function Profile() {
  const [isClicked, setIsClicked] = useState(false); // Estado para controlar se a imagem foi clicada

  const toggleImageSize = () => {
    setIsClicked(!isClicked); // Alternar entre o tamanho normal e o tamanho maior
  };

  return (
    <>
      <div className="flex items-center max-lg:relative max-lg:left-3 max-lg:top-1 max-lg:bottom-4">
        <div
          className={`w-16  mr-4 mb-2 overflow-hidden rounded-full transition-transform transform max-md:w-10 ${
            isClicked
              ? "scale-[4] translate-y-36 translate-x-28 max-md:translate-y-24 max-md:translate-x-16"
              : "" // Adicione a classe de escala quando a imagem for clicada
          }`}
          onClick={toggleImageSize} // Chame a função para alternar o tamanho ao clicar
        >
          <Image
            src="/jpeg/profile.jpeg"
            width={250}
            height={250}
            alt="foto de perfil"
            className="object-cover object-center inline-block cursor-pointer"
          />
        </div>
      </div>
    </>
  );
}
