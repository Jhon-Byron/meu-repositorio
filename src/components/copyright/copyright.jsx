import Image from "next/image";

export default function Copyright() {
  return (
    <>
      <div className="bg-gray-900 h-full ">
        <div className="grid grid-cols-2 gap-20 p-20 ">
          <div className="flex flex-col ml-[400px] text-white  w-2/4 ">
            <h2 className="text-2xl uppercase font-bold font-One mb-4">Jhon Byron</h2>
            <p className="font-sans">
              Minha abordagem de aprendizado é orientada para a prática, com foco na resolução de desafios e na busca constante de novos conhecimentos
            </p>
          </div>
          <div>
            <h2>Social</h2>
            <div>
              <a target="_blank" rel="noreferrer" href="">
                <Image
                  src="/svg/linkedin-in.svg"
                  alt="perfil linkedin"
                  width={36}
                  height={36}
                />
              </a>
              <a target="_blank" rel="noreferrer" href="">
                <Image
                  src="/svg/github.svg"
                  alt="perfil github"
                  width={36}
                  height={36}
                />
              </a>
            </div>
          </div>
        </div>
        <footer className="w-[100%] flex justify-center p-10 bg-blue-800">
          <p className="">© Copyright 2023 todos os direitos reservados</p>
        </footer>
      </div>
    </>
  );
}
