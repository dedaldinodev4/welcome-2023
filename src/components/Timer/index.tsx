import React, { useEffect, useState } from 'react'
import { Container, Message, TimerBox } from './styles';
import { motion } from 'framer-motion';
import { IDate, IProps } from '../../dtos';
import { TimerHook } from '../../hooks/Timer';

const variants = {
  hidden: {
    opacity: 0, 
    scale: 0.5  
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 350,
      duration: 0.8,
      yoyo: Infinity
    }
  }
}

export const Timer: React.FC<IProps> = (props) => {
  const [ dates, setDates ] = useState<IDate[]>([])

  useEffect(() => {
    setDates(TimerHook())
  }, [dates])
  return (
    <Container>
      {dates.map((d) => (
        <TimerBox id={d.key}>
          <motion.h1
            variants={variants}
            initial="hidden"
            animate="visible"
          >{d.value}</motion.h1>
          <p>{Number(d.value) > 1 ? d.text+'s': d.text}</p>
        </TimerBox>
      ))}
      
    </Container>
  );
}

