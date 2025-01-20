import { Card, CardBody, CardHeader } from "@material-tailwind/react"
import Image from "next/image";
import WorkPic from '@/assets/works.jpeg';
import AmarracaoAmorosa1 from '@/assets/amarracao-amorosa1.jpeg';
import AmarracaoAmorosa2 from '@/assets/amarracao-amorosa2.jpeg';
import AmarracaoAmorosa3 from '@/assets/amarracao-amorosa3.jpeg';
import AberturaCaminhos1 from '@/assets/abertura-caminhos1.jpeg';
import AberturaCaminhos3 from '@/assets/abertura-caminhos3.jpeg';
import Fertilidade1 from '@/assets/fertilidade1.jpeg';
import Fertilidade2 from '@/assets/fertilidade2.jpeg';
import Fertilidade3 from '@/assets/fertilidade3.jpeg';
import QuebraMagia1 from '@/assets/quebra-magia1.jpeg';
import QuebraMagia2 from '@/assets/quebra-magia2.jpeg';
import QuebraMagia3 from '@/assets/quebra-magia3.jpeg';
import LimpezaEspiritual1 from '@/assets/limpeza-espiritual1.jpeg';
import LimpezaEspiritual2 from '@/assets/limpeza-espiritual2.jpeg';
import LimpezaEspiritual3 from '@/assets/limpeza-espiritual3.jpeg';
import Saude1 from '@/assets/saude1.jpeg';
import Saude2 from '@/assets/saude2.jpeg';
import Saude3 from '@/assets/saude3.jpeg';
import CorteRival1 from '@/assets/corte-rival1.jpeg';
import HeroImage from '@/assets/trabalho.jpeg';

const works = [
  {
    id: 1,
    name: 'Amarração Amorosa',
    description: `Poderoso trabalho espiritual infalível realizado com a intenção de atrair e unir duas pessoas, fortalecendo o amor.\n
Proteger o amor contra inveja, ciúme ou traição.\n
Existe dedicação e empenho para harmonizar a energia do casal, a fim de promover uma conexão genuína tendo como pilar o respeito, amor e equilíbrio.\n
Realizo este trabalho com respeito e dedicação independentemente da orientação sexual.`,
    src: [AmarracaoAmorosa1, AmarracaoAmorosa2, AmarracaoAmorosa3]
  },
  {
    id: 2,
    name: "Limpeza Espiritual",
    description: `Trabalho com intuito de remoção de energias negativas, espirituais e psíquicas em qualquer campo da vida, fortalecendo a conexão com a espiritualidade e promove uma vida mais leve e harmoniosa.\n
Limpeza de ambientes para eliminar energias negativas da sua casa, escritório, local de trabalho outro sitio que seja necessário.`,
    src: [LimpezaEspiritual1, LimpezaEspiritual2, LimpezaEspiritual3]
  },
  {
    id: 4,
    name: "Abertura de Caminhos",
    description: `Trabalho realizado para qualquer campo da sua vida seja financeiro, prosperidade, amor, trabalho, entre outros.\n
Removo obstáculos e bloqueios, auxiliando a criar condições propícias para que alcance os seus objetivos.`,
    src: [AberturaCaminhos1, WorkPic, AberturaCaminhos3]
  },
  {
    id: 5,
    name: "Fertilidade",
    description: `Trabalho espiritual, físico, psicológico e emocional desenvolvido para ajudar o casal a engravidar.\n
Já ajudei vários casais a conquistarem este presente de Deus que é ter um bebé.`,
    src: [Fertilidade1, Fertilidade2, Fertilidade3]
  },
  {
    id: 6,
    name: "Saúde",
    description: `Trabalho de cura que aborda os campos emocionais, físicos ou psicológico, promovendo a harmonia entre o corpo, a mente e o espírito.`,
    src: [Saude1, Saude2, Saude3]
  },
  {
    id: 7,
    name: "Corte de Rival",
    description: `Trabalho realizado para afastar rival de qualquer campo da sua vida.\n
Afasta invejosos, pessoas que querem o seu mal, amantes ou pessoas interessadas no seu parceiro.`,
    src: [CorteRival1]
  },
  {
    id: 3,
    name: "Desfazer trabalhos de Magia Negra",
    description: `Se você for vítima de algum trabalho de magia ou praga espiritual entre em contacto comigo para desfazermos na hora.`,
    src: [QuebraMagia1, QuebraMagia2, QuebraMagia3]
  },
]




function RenderParagraphs({ text }: { text: string }) {
  const paragraphs = text.split(/\n\s*\n/);

  return (
    <div>
      {paragraphs.map((paragraph, index) => (
        <p key={index} className="mb-4">
          {paragraph}
        </p>
      ))}
    </div>
  );
}

const CardList = () => {
  return (
    <div className="grid grid-cols-1 gap-12 md:gap-6 md:gap-8 sm:grid-cols-2 md:grid-cols-3 mt-16">
      {works.map(({ id, name, description, src }) => {
        return (
          <Card key={id}>
            {src && (
              <div className="grid grid-cols-3">
                {src.map((img, index) => {
                  return (
                    <CardHeader key={index} className="aspect-square mx-2">
                      <Image src={img} alt={`${name}-${index}`} className="h-full object-cover object-top" />
                    </CardHeader>
                  )
                })}
              </div>
            )}
            <CardBody>
              <h2 className="font-bold text-lg md:text-xl text-center mb-2">{name}</h2>
              <div className="text-md md:text-lg">
                <RenderParagraphs text={description} />
              </div>
            </CardBody>
          </Card>
        );
      })}
    </div>
  )
};

export const Works = () => {

  return (
    <div id="trabalhos" className="min-h-[100vh] relative isolate overflow-hidden bg-gray-900">
      <Image src={HeroImage} alt="work" className="absolute inset-0 -z-10 size-full object-[-80px] object-cover lg:object-top  opacity-30" />
      <div className="py-32 md:py-36 px-6 md:px-8">
        <h2 className=" text-center text-3xl md:text-5xl font-bold">Trabalhos</h2>
        <CardList />
      </div>
    </div>
  )
}
