import Image from "next/image"

export default function MenuLateral() {
  return(
    <>
      <aside className="flex justify-center items-center min-h-screen fixed top-0 right-0 w-20">
        <ul className="flex flex-col gap-4">
          <li>
            <a href="https://github.com/Jhon-Byron" target="_blank">
              <Image 
                src="/svg/github.svg" 
                alt="icone github" 
                width={50}
                height={50}
                className=" invert-[1] ease-in-out duration-300 hover:scale-125"/>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/jhon-byron-7b12881b1/" target="_blank" >
              <Image
              src="/svg/linkedin-in.svg" 
              alt="icone linkedin"
              width={50}
              height={50}
              className="invert-[1] ease-in-out duration-300 hover:scale-125"/>
            </a>
          </li>
        </ul>
      </aside> 
    </>
  )
}