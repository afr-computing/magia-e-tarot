import { MESSAGE, PHONE_NUMBER } from "@/app/constants";
import { Button } from "@material-tailwind/react";
import HeroImage from '@/assets/hero-proposal-1.jpeg';
import Image from "next/image";

export const Hero = () => {
  const onClickSchedule = () => {
    window.open(`https://wa.me/${PHONE_NUMBER}?text=${MESSAGE}`, '_blank');
  };

  return (
    <div className="relative isolate overflow-hidden bg-gray-900 py-24 lg:py-32 h-[100vh] flex lg:items-center justify-center">
      <Image src={HeroImage} alt="hero" className="absolute inset-0 -z-10 size-full object-left object-cover lg:object-top opacity-30" />
      <div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h1 className="text-5xl font-semibold tracking-tight text-white lg:text-7xl text-center">Magia e Tarot</h1>
            <p className="mt-8 text-pretty text-lg font-medium text-gray-300 lg:text-xl/8 text-center">Clareza para a sua alma, poder para a sua vida</p>
          </div>
          <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base/7 font-semibold text-white lg:grid-cols-2 lg:flex lg:gap-x-10">
              <a href="#about">Sobre <span aria-hidden="true">&rarr;</span></a>
              <a href="#">Trabalhos <span aria-hidden="true">&rarr;</span></a>
{/*               <a href="#testemunhos">Testemunhos <span aria-hidden="true">&rarr;</span></a> */}
              <a href="instagram://user?username=loja_luzdaalma" onClick={() => window.open('https://www.instagram.com/loja_luzdaalma/', '_blank')}>Loja Luz da Alma <span aria-hidden="true">&rarr;</span></a>
            </div>
          </div>
          <div className="flex justify-center mt-8">
            <Button color="indigo" onClick={onClickSchedule}>Agendar consulta</Button>
          </div>
        </div>
      </div>
    </div>
  )
};
