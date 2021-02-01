import React from 'react';
import Header from '../../components/Header';

import {Container, Imagem, Texto, Title, Tipo, TextContainer} from './style'

export default function Contato() {
 return (
   <Container>
        <Header />
        <Imagem source={require('../../assets/Contato.jpg')}/>
        <Title>Contato</Title>
        <TextContainer>
          <Tipo>Email: </Tipo>
          <Texto>rhuan.marques.robias@gmail.com</Texto>
        </TextContainer>
        <TextContainer>
          <Tipo>Telefone: </Tipo>
          <Texto>+55 (61)98328-9194</Texto>
        </TextContainer>
        <TextContainer>
          <Tipo>Localização: </Tipo>
          <Texto>Águas Claras/Brasília - DF</Texto>
        </TextContainer>
        <TextContainer>
          <Tipo>Github: </Tipo>
          <Texto>RhuanMr</Texto>
        </TextContainer>
   </Container>
  );
}