"use client";
import { useState } from "react";

import { BiMenu } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";

import Profile from "../profile/profile";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const Links = [
    { name: "Contato", link: "/" },
    { name: "Sobre", link: "/" },
    { name: "Habilidades", link: "/" },
    { name: "projetos", link: "/" },
  ];
  return (
    <>
      <div className="shadow-md w-full fixed top-0 left-0 z-10">
        <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7 h-20">
          <div className="text-black flex items-center  ">
            <Profile />
            <span className='uppercase font-bold hover:text-gray-100  duration-200 cursor-pointer'>Jhon byron</span>
          </div>
          {isOpen ? (
            <AiOutlineClose
              className="w-7 h-7 bg-gray-950 rounded-lg ease-in-out duration-300 hover:scale-125 cursor-pointer lg:hidden max-lg:relative max-lg:left-72 left-36 bottom-10 md:hidden block"
              onClick={() => setIsOpen(false)}
            />
          ) : (
            <BiMenu
              className="w-7 h-7 bg-gray-950 rounded-lg ease-in-out duration-300 hover:scale-125 cursor-pointer lg:hidden max-lg:relative max-lg:left-72 left-36 bottom-10  md:hidden block"
              onClick={() => setIsOpen(true)}
            />
          )}

          <ul
            className={`md:flex md:items-center md:pb-0 pb-10 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
              isOpen ? "top-16 " : "top-[-490px]"
            }`}
          >
            {Links.map((link) => (
              <li key={link.name} className="md:ml-8 text-xl md:my-0 my-7">
                <a
                  href={link.link}
                  className="text-gray-950 hover:text-gray-100  duration-200"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
