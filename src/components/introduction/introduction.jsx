import Button from "../layout/button/button"
import Mouse from "../layout/mouse/mouse"

export default function Introduction() {
  return(   
    <>
      <div className="bg-gif-technology">
        <div className="flex items-center flex-col justify-center w-full h-[1290px] ">
          <h1 className="font-One text-[100px] text-center font-medium">
            <span className="text-gray-50 border-b-2">
              OLA, EU SOU O JHON 
            </span>  
          </h1>
          <p className="text-2x font-bold tracking-wide max-w-screen-sm text-center border p-2 bg-white text-black rounded">Desenvolvedor web frontend, backend ou fullstack</p>  
          <Button className="text-black font-bold bg-black">PROJETOS</Button>
          <Mouse />
        </div>
      </div> 
    </>
    
  )
}