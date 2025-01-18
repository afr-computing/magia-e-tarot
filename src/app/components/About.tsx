import About1 from '@/assets/about-1.jpeg';
import About2 from '@/assets/about-2.jpeg';
import About3 from '@/assets/about-3.jpeg';
import AboutPic from '@/assets/foto-perfil.jpeg';
import { Carousel } from '@material-tailwind/react';
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
  return (
    <div id="about" className="relative isolate min-h-[100vh] relative isolate overflow-hidden bg-gray-900 py-24 lg:py-32">
      <Image src={AboutPic} alt="hero" className="absolute inset-0 -z-10 size-full object-left-top object-cover lg:object-top opacity-30" />
      <div className="md:text-center text-pretty leading-relaxed md:px-16 py-32 flex items-center gap-6 flex-col md:flex-row">
        <div className="px-14 md:px-32">
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
        <Carousel loop autoplay autoplayDelay={5000}>
          {carouselImages.map(({ id, src, alt }) => {
            return <Image key={id} src={src} alt={alt} className="max-h-[300px] max-w-[300px] md:max-h-[600px] md:max-w-[600px] mx-auto rounded-lg shadow-lg shadow-xl" />
          })}
        </Carousel>
      </div>
    </div>
  )
};
