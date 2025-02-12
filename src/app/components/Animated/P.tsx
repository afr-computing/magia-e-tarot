import { motion } from 'framer-motion';

interface Props {
  className?: string;
  children?: React.ReactNode;
  delay?: number;
}
export const P = ({ className, children, delay }: Props) => {
  return (
    <motion.p className={className} initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 10 }
      }}>
      {children}
    </motion.p>
  )
}
