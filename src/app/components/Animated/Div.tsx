import { motion } from 'framer-motion';

interface Props {
  className?: string;
  children?: React.ReactNode;
  delay?: number;
  once?: boolean;
}

export const Div = ({ className, children, delay = 0.1, once = true }: Props) => {
  return (
    <motion.div className={className} initial="hidden"
      whileInView="visible"
      viewport={{ once }}
      transition={{ duration: 0.5, delay }}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 10 }
      }}>
      {children}
    </motion.div>
  )
}
