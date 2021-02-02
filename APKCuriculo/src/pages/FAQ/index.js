import React from 'react';
import Header from '../../components/Header';

import {Container, Texto, Title, Pegunta, TextConatainer} from './style'

export default function FAQ() {
 return (
   <Container>
        <Header />
        <Title>FAQ</Title>
        <TextConatainer>
          <Pegunta>Quando planeja se formar ?</Pegunta>
          <Texto>Meu planejamento indica que em junho de 2023.</Texto>
        </TextConatainer>
        <TextConatainer>
          <Pegunta>Possui experiências profissionais ?</Pegunta>
          <Texto>Não, estou embusca do meu primeiro emprego.</Texto>
        </TextConatainer>
        <TextConatainer>
          <Pegunta>Posui disponibilidade de horários ?</Pegunta>
          <Texto>Sim, minha grade horária foi montada de forma que me permita pelo meno 8 horas por dia para me dedicar à atividades extra acadêmicas.</Texto>
        </TextConatainer>
        <TextConatainer>
          <Pegunta>Estado Civil?</Pegunta>
          <Texto>Solteiro.</Texto>
        </TextConatainer>
        <TextConatainer>
          <Pegunta>Qual é sua área de maior interesse ?</Pegunta>
          <Texto>Tenho preferência pelas áreas de desenvolvimento de aplicativos mobile e Web-apps.</Texto>
        </TextConatainer>
   </Container>
  );
}