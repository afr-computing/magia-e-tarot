import { Card, CardBody } from "@material-tailwind/react"
import Image from "next/image";
import WorkPic from '@/assets/works.jpeg';

const works = [
  {
    id: 1,
    name: 'Amarração Amorosa',
    description: `Poderoso trabalho espiritual infalível realizado com a intenção de atrair e unir duas pessoas, fortalecendo o amor.

Proteger o amor contra inveja, ciúme ou traição.

Existe dedicação e empenho para harmonizar a energia do casal, a fim de promover uma conexão genuína tendo como pilar o respeito, amor e equilíbrio.

Realizo este trabalho com respeito e dedicação independentemente da orientação sexual.`
  },
  {
    id: 2,
    name: "Limpeza Espiritual",
    description: `Trabalho com intuito de remoção de energias negativas, espirituais e psíquicas em qualquer campo da vida, fortalecendo a conexão com a espiritualidade e promove uma vida mais leve e harmoniosa.

Limpeza de ambientes para eliminar energias negativas da sua casa, escritório, local de trabalho outro sitio que seja necessário.`
  },
  {
    id: 4,
    name: "Abertura de Caminhos",
    description: `Trabalho realizado para qualquer campo da sua vida seja financeiro, prosperidade, amor, trabalho, entre outros.

Removo obstáculos e bloqueios, auxiliando a criar condições propícias para que alcance os seus objetivos.`
  },
  {
    id: 5,
    name: "Fertilidade",
    description: `Trabalho espiritual, físico, psicológico e emocional desenvolvido para ajudar o casal a engravidar.

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
    description: `Trabalho realizado para afastar rival de qualquer campo da sua vida.

Afasta invejosos, pessoas que querem o seu mal, amantes ou pessoas interessadas no seu parceiro.`
  },
  {
    id: 3,
    name: "Desfazer trabalhos de Magia Negra",
    description: `Se você for vítima de algum trabalho de magia ou praga espiritual entre em contacto comigo para desfazermos na hora.`
  },
]
export const Works = () => {
  return (
    <div id="trabalhos" className="min-h-[100vh] relative isolate overflow-hidden bg-gray-900">
      <Image src={WorkPic} alt="work" className="absolute inset-0 -z-10 size-full object-[-80px] object-cover lg:object-center opacity-20" />
      <div className="py-32 px-6 md:px-8">
        <h2 className=" text-center text-3xl md:text-5xl font-bold">Trabalhos</h2>
        <div className="grid grid-cols-1 gap-6 md:gap-8 sm:grid-cols-2 md:grid-cols-3 mt-16">
          {works.map(({ id, name, description }) => {
            return (
              <Card key={id}>
                <CardBody>
                  <h2 className="font-bold text-xl">{name}</h2>
                  <p className="text-justify text-lg">
                    {description}
                  </p>
                </CardBody>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  )
}
