import React from 'react';
import Header from '../../components/Header';

import {Container, Texto, ContainerTexto, Title, Habililidade} from './style'

export default function Habilidades() {
 return (
   
   <Container>
        <Header />
        <Title>Habilidades</Title>
        <ContainerTexto>
          <Habililidade>Tenho conhecimentos avançados na língua inglesa</Habililidade>
        </ContainerTexto>

        <ContainerTexto>
          <Habililidade>As linguagens que mais domino são:</Habililidade>
            <Texto>JavaScript</Texto>
            <Texto>Ecmascript</Texto>
            <Texto>Java</Texto>
            <Texto>C++</Texto>
            <Texto>Css</Texto>
            <Texto>Html</Texto>
        </ContainerTexto>

        <ContainerTexto>
          <Habililidade>Tenho dominio dos Frameworks:</Habililidade>
            <Texto>React-Native</Texto>
            <Texto>ReactJS</Texto>
            <Texto>NodeJs</Texto>
            <Texto>VueJS</Texto>
        </ContainerTexto>

        <ContainerTexto>
          <Habililidade>Sei utilizar os Bancos de Dados:</Habililidade>
            <Texto>Firebase</Texto>
            <Texto>PostgresSQL</Texto>
            <Texto>MongoDB</Texto>
        </ContainerTexto>

        <ContainerTexto>
          <Habililidade>Sei utilizar a ferramenta Figma para a prototipação de interfaces</Habililidade>
        </ContainerTexto>

        <ContainerTexto>
          <Habililidade>Possuo conhecimento das metodologias Ágeis</Habililidade>
        </ContainerTexto>

        <ContainerTexto>
          <Habililidade>Sou animado para adquirir novos conhecimentos e experiências</Habililidade>
        </ContainerTexto>
   </Container>
  );
}