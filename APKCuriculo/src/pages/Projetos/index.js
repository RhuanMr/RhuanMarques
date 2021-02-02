import React from 'react';
import {Linking} from 'react-native'
import Header from '../../components/Header';

import {Container, Texto, Title, Nome, Acesso, TextContainer} from './style'

export default function Projetos() {
 return (
   <Container>
        <Header />
        <Title>Projetos</Title>
        <TextContainer>
          <Nome>Conecta Ensina:</Nome>
          <Texto>Participei do projeto Conecta Ensina como papel de Desenvolvedor. O projeto visa
                 auxiliar alunos e professores com um aplicativo de gerenciamento de aulas
                 particulares.</Texto>
          <Acesso onPress={() => Linking.openURL('https://github.com/fga-eps-mds/2020.1-Conecta-Ensina-Mobile')}>Mobile</Acesso>
          <Acesso onPress={() => Linking.openURL('https://github.com/fga-eps-mds/2020.1-Conecta-Ensina-Backend')}>Back-End</Acesso>
        </TextContainer>
        <TextContainer>
          <Nome>Magic Poney Project:</Nome>
          <Texto>Participo em um projeto independente com outros 2 alunos da Universidade de Brasília chamado Magic Poney Project, que criar um Web app ferenciador de metodologias Ágeis</Texto>
          <Acesso onPress={() => Linking.openURL('https://mppapp.wordpress.com/')}>Site de apresentação do projeto</Acesso>
        </TextContainer>
   </Container>
  );
}