import Image from "next/image";

export default function Copyright() {
  return (
    <>
      <div className="bg-red-800 h-96">
        <div className="grid grid-cols-2 gap-20">
          <div>
            <h2>Jhon Byron</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita
              nesciunt cupiditate illum! Illum, reprehenderit similique quo
              voluptatibus mollitia pariatur accusantium quia molestias possimus
              laudantium aliquid fuga delectus excepturi quae quasi.
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
        <footer className="w-[100%] flex justify-center p-16 bg-blue-800">
          <p className="">© Copyright 2023 todos os direitos reservados</p>
        </footer>
      </div>
    </>
  );
}
