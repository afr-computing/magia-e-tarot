import { motion } from 'framer-motion';
import { Card as TailwindCard } from "@material-tailwind/react"

const AnimatedCard = motion(TailwindCard)

interface Props {
  children?: React.ReactNode;
  delay?: number;
}
export const Card = ({ children, delay = 0.1 }: Props) => {
  return <AnimatedCard initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    variants={{
      visible: { opacity: 1, y: 0 },
      hidden: { opacity: 0, y: 10 }
    }}>{children}</AnimatedCard>
}
