import Button from "../layout/button/button";
import Mouse from "../layout/mouse/mouse";

export default function Introduction() {
  return (
    <>
      <div className="bg-gif-technology">
        <div className="flex items-center flex-col justify-center w-full h-[1050px] ">
          <h1 className="font-One text-[100px] text-center font-medium">
            <span className="text-gray-50 border-b-2">OLA, EU SOU O JHON</span>
          </h1>
          <p className="text-2x font-bold tracking-wide max-w-screen-sm text-center border p-2 mt-10 bg-white text-black rounded-xl">
            Como um entusiasta dedicado da tecnologia, estou empenhado em dar os
            primeiros passos na empolgante jornada da programação
          </p>
          <div className="mt-10">
          <Button>PROJETOS</Button>
          <Mouse />
          </div>
         
        </div>
      </div>
    </>
  );
}
