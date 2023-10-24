import Image from "next/image";

export default function MenuLateral() {
  return (
    <>
      <aside className="flex justify-center items-center fixed z-10 top-1/3
       right-0 w-18 h-64 bg-white rounded-l-3xl max-md:hidden">
        <ul>
          <li >
            <a href="https://github.com/Jhon-Byron" target="_blank">
              <Image
                src="/svg/github.svg"
                alt="icone github"
                width={40}
                height={40}
                className="ease-in-out duration-300 hover:scale-125 m-4"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/jhon-byron-7b12881b1/"
              target="_blank"
            >
              <Image
                src="/svg/linkedin-in.svg"
                alt="icone linkedin"
                width={40}
                height={40}
                className="ease-in-out duration-300 hover:scale-125 m-4"
              />
            </a>
            <a target="_blank" rel="noreferrer" href="">
              <Image
                src="/svg/whatsapp.svg"
                alt="whatsapp message"
                width={40}
                height={40}
                className="ease-in-out duration-300 hover:scale-125 m-4"
              />
            </a>
            <a target="_blank" rel="noreferrer" href="">
              <Image
                src="/svg/discord.svg"
                alt="perfil discord"
                width={40}
                height={40}
                className="ease-in-out duration-300 hover:scale-125 m-4"
              />
            </a>
          </li>
        </ul>
      </aside>
    </>
  );
}
