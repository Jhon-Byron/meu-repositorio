import Contact from "./form/contact";

export default function ContactTitle() {
  return(
    <>
      <div className=" w-full h-full bg-[#121215]"> 
        
          <div className="flex flex-col justify-center items-center">
          <h1 className="font-One uppercase text-5xl pr-4 pl-4 text-black border-b-4 rounded-2xl border-b-slate-900 mb-4 mt-20 font-medium">contato</h1>
          <p className="text-black mb-16 mt-4 ">Sinta-se à vontade para entrar em contato comigo enviando o formulário abaixo e entrarei em contato com você o mais breve possível</p>
          </div>
          <div>
            <Contact />
          </div>
         
      </div>
    </>
  )
}