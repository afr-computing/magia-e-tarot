import { motion } from 'framer-motion';


interface Props {
  className?: string;
  children?: React.ReactNode;
}
export const H1 = ({ className, children }: Props) => {
  return (
    <motion.h1 className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.1 }}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 10 }
      }}>{children}</motion.h1>
  )
};
