import Image from "next/image";

export default function Copyright() {
  return (
    <>
      <div className="bg-gray-900 h-full ">
        <div className="grid grid-cols-2 gap-20 p-4 ">
          <div className="flex flex-col ml-[430px] text-white  w-2/4 ">
            <h2 className="text-xl uppercase font-bold font-One mb-4">
              Jhon Byron
            </h2>
            <p className="font-sans text-sm">
              Minha abordagem de aprendizado é orientada para a prática, com
              foco na resolução de desafios e na busca constante de novos
              conhecimentos
            </p>
          </div>
          <div className="flex flex-col justify-between ml-56 mb-6">
            <h2 className="text-xl uppercase font-bold font-One mb-4">
              Social
            </h2>
            <div className="flex gap-4 invert ">
              <a target="_blank" rel="noreferrer" href="">
                <Image
                  src="/svg/linkedin-in.svg"
                  alt="perfil linkedin"
                  width={36}
                  height={36}
                  className="ease-in-out duration-300 hover:scale-125"
                />
              </a>
              <a target="_blank" rel="noreferrer" href="">
                <Image
                  src="/svg/github.svg"
                  alt="perfil github"
                  width={36}
                  height={36}
                  className="ease-in-out duration-300 hover:scale-125"
                />
              </a>
              <a target="_blank" rel="noreferrer" href="">
                <Image
                  src="/svg/whatsapp.svg"
                  alt="whatsapp message"
                  width={36}
                  height={36}
                  className="ease-in-out duration-300 hover:scale-125"
                />
              </a>
              <a target="_blank" rel="noreferrer" href="">
                <Image
                  src="/svg/instagram.svg"
                  alt="perfil instagram"
                  width={36}
                  height={36}
                  className="ease-in-out duration-300 hover:scale-125"
                />
              </a>
              <a target="_blank" rel="noreferrer" href="">
                <Image
                  src="/svg/discord.svg"
                  alt="perfil discord"
                  width={36}
                  height={36}
                  className="ease-in-out duration-300 hover:scale-125"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center   ">
          <footer className=" w-3/5  p-6  border-t-2">
            <p className="text-center text-xs">
              © Copyright 2023 todos os direitos reservados. Feito por {" "}
              <a href="#" className="border-b-2">Jhon Byron </a>
            </p>
          </footer>
        </div>
      </div>
    </>
  );
}
