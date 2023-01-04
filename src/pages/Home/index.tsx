import React from 'react'
import { Headline } from '../../components/Headline';
import { Timer } from '../../components/Timer';
import { Container, Main } from './styles';

type IProps = {
  props?: unknown
}

export const Home: React.FC<IProps> = (props) => {
  return (
    <Main>
      <Container>
        <Headline props={props}/>
        <Timer props={props}/>
      </Container>
    </Main>
  );
} 