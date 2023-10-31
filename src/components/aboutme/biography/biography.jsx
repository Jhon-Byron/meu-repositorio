import Button from "@/components/layout/button/button";
import Backend from "@/components/layout/skillsboxs/backend/backend";
import Frontend from "@/components/layout/skillsboxs/frontend/frontend";
import Database from "@/components/layout/skillsboxs/database/database";


export default function Biography() {
  return (
    <>
      <div className="grid grid-cols-2 gap-20 h-full bg-gray-50  max-lg:grid-cols-none max-lg:gap-0">
        <div className=" p-36 max-md:p-2 max-md:m-2 max-lg:flex max-lg:flex-col max-lg:items-center">
          <h3 className="text-4xl text-black font-One mb-8 uppercase">Me Conheça!</h3>
          <p className="text-lg max-w-xl text-gray-300">
            Ola meu nome e {}
            <span className="text-neutral-950">Jhon Byron Sarria Brito</span>, <br />
              Tenho 23 anos e atualmente trabalho na área da indústria. Desde a
              infância, sempre tive um profundo interesse em tecnologia, mas
              nunca imaginei que teria a oportunidade de seguir uma carreira tão
              incrível na programação. Tudo mudou em 2023, quando tive a
              oportunidade de mergulhar no mundo do desenvolvimento web. A ideia
              de criar sistemas, desde os mais simples até os mais complexos, me
              inspira a estudar e aperfeiçoar minhas habilidades constantemente
              nessa área empolgante.
          </p>
          <Button>Contato</Button>
        </div>
        <div className="p-8 max-lg:flex max-lg:flex-col max-lg:items-center">
          <Frontend />
          <Backend />
          <Database />
        </div>
      </div>
    </>
  );
}
