import React from 'react';
import Header from '../../components/Header';

import {Container, Texto, Title} from './style'

export default function Habilidades() {
 return (
   <Container>
        <Header />
        <Title>Um pouco sobre mim</Title>
        <Texto>Me chamo Rhuan Marques, tenho 21 anos e curso o nono semestre de Engenharia de software na Universidade de Brasília (UnB).</Texto>
   </Container>
  );
}