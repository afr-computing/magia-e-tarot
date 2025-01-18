import { Card, CardBody, CardHeader } from "@material-tailwind/react"
import Image from "next/image";
import WorkPic from '@/assets/works.jpeg';
import AmarracaoAmorosa1 from '@/assets/amarracao-amorosa1.jpeg';
import AmarracaoAmorosa2 from '@/assets/amarracao-amorosa2.jpeg';
import AmarracaoAmorosa3 from '@/assets/amarracao-amorosa3.jpeg';

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
Limpeza de ambientes para eliminar energias negativas da sua casa, escritório, local de trabalho outro sitio que seja necessário.`
  },
  {
    id: 4,
    name: "Abertura de Caminhos",
    description: `Trabalho realizado para qualquer campo da sua vida seja financeiro, prosperidade, amor, trabalho, entre outros.\n
Removo obstáculos e bloqueios, auxiliando a criar condições propícias para que alcance os seus objetivos.`,
  },
  {
    id: 5,
    name: "Fertilidade",
    description: `Trabalho espiritual, físico, psicológico e emocional desenvolvido para ajudar o casal a engravidar.\n
Já ajudei vários casais a conquistarem este presente de Deus que é ter um bebé.`
  },
  {
    id: 6,
    name: "Saúde",
    description: `Trabalho de cura que aborda os campos emocionais, físicos ou psicológico, promovendo a harmonia entre o corpo, a mente e o espírito.`
  },
  {
    id: 7,
    name: "Corte de Rival",
    description: `Trabalho realizado para afastar rival de qualquer campo da sua vida.\n
Afasta invejosos, pessoas que querem o seu mal, amantes ou pessoas interessadas no seu parceiro.`
  },
  {
    id: 3,
    name: "Desfazer trabalhos de Magia Negra",
    description: `Se você for vítima de algum trabalho de magia ou praga espiritual entre em contacto comigo para desfazermos na hora.`
  },
]




function RenderParagraphs({ text }: {text: string}) {
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
    <div className="grid grid-cols-1 gap-6 md:gap-8 sm:grid-cols-2 md:grid-cols-3 mt-16">
    {works.map(({ id, name, description, src }) => {
      return (
        <Card key={id}>
          {src && (
            <div className="grid grid-cols-3">
              {src.map((img, index) => {
                return (
                  <CardHeader key={index} className="max-w-56 aspect-square">
                    <Image src={img} alt={`${name}-${index}`} />
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
      <Image src={WorkPic} alt="work" className="absolute inset-0 -z-10 size-full object-[-80px] object-cover lg:object-center opacity-30" />
      <div className="py-32 md:py-36 px-6 md:px-8">
        <h2 className=" text-center text-3xl md:text-5xl font-bold">Trabalhos</h2>
        <CardList />
      </div>
    </div>
  )
}
