import { MESSAGE, PHONE_NUMBER } from '@/app/constants';
import About1 from '@/assets/about-1.jpeg';
import About2 from '@/assets/about-2.jpeg';
import About3 from '@/assets/about-3.jpeg';
import AboutPic from '@/assets/foto-perfil.jpeg';
import { Button, Carousel } from '@material-tailwind/react';
import Image from "next/image";


const carouselImages = [
  {
    id: 1,
    src: About1,
    alt: "Ritual 1"
  },
  {
    id: 2,
    src: About2,
    alt: "Ritual 2"
  },
  {
    id: 3,
    src: About3,
    alt: "Ritual 3"
  }
]

export const About = () => {
  const onClickSchedule = () => {
    window.open(`https://wa.me/${PHONE_NUMBER}?text=${MESSAGE}`, '_blank');
  };
  return (
    <div id="about" className="relative isolate min-h-[100vh] overflow-hidden bg-gray-900">
      <Image src={AboutPic} alt="about" className="absolute inset-0 -z-10 size-full object-[-80px] object-cover lg:object-top opacity-20" />
      <div className='py-32 md:py-64'>
        <div className="md:text-center text-pretty leading-relaxed px-6 md:px-8 flex items-center gap-6 flex-col md:flex-row flex-wrap">
          <div className="flex-1">
            <h1 className="text-3xl md:text-5xl font-bold text-center mb-12">
              Tarólogo vidente pai José de Ogum
            </h1>
            <p className="text-md md:text-xl leading-relaxed text-justify mb-4">
              O maior mago de Portugal com mais de 20 anos a orientar e ajudar pessoas a realizarem os seus sonhos e a encontrar a verdadeira resposta na sua vida.
            </p>
            <p className="text-md md:text-xl leading-relaxed text-justify mb-4">
              Sempre com seriedade, força espiritual e sigilo, já ajudei milhares de pessoas a encontrar o caminho da felicidade, prosperidade, saúde e amor.
            </p>
            <p className="text-md md:text-xl leading-relaxed text-justify mb-2">
              <span className="font-semibold">Sou especialista em casos amorosos.</span>
            </p>
            <p className="text-md md:text-xl leading-relaxed text-justify mb-4">
              <span className="font-semibold">Faço e desfaço qualquer trabalho.</span>
            </p>
            <p className="text-md md:text-xl leading-relaxed text-justify font-medium">
              Vamos reescrever a sua vida através de uma consulta presencial ou online para qualquer parte do mundo.
            </p>
          </div>
          <Carousel loop autoplay autoplayDelay={5000} className="max-w-[800px]">
            {carouselImages.map(({ id, src, alt }) => {
              return <Image key={id} src={src} alt={alt} className="md:max-h-[600px] md:max-w-[600px] mx-auto rounded-lg shadow-lg shadow-xl" />
            })}
          </Carousel>
        </div>
        <p className="mt-12 text-pretty text-lg font-medium text-gray-300 lg:text-xl/8 text-center px-6 md:px-8 ">Clareza para a sua alma, poder para a sua vida</p>
        <div className="flex justify-center mt-8">
          <Button className="bg-[#25d366]" variant="filled" onClick={onClickSchedule}>Agendar consulta</Button>
        </div>
      </div>
    </div>
  )
};
