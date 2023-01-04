import React from 'react'
import { Header } from './styles';
import { motion } from 'framer-motion'

type IProps = {
  props: unknown
}

export const Headline: React.FC<IProps> = (props) => {
  return (
    <Header>
      <motion.h1
        animate={{ x: [50, 150, 50], opacity: 1, scale: 1 }}
        transition={{
            duration: 5,
            delay: 0.3,
            ease: [0.5, 0.71, 1, 1.5],
        }}
        initial={{ opacity: 0, scale: 0.5 }}
        whileHover={{ scale: 1.2 }}
      > 
        Contagem Regressiva 2023!!
      </motion.h1>
    </Header>
  );
}