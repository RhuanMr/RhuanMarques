import React from 'react';
import { ImageBackground } from 'react-native';
import Header from '../../components/Header';

import {Container, Texto} from './style'

export default function Home() {
 return (
   <Container>
     <ImageBackground source={require('../../assets/Home.jpg')} style={{flex: 1, resizeMode: "cover"}}>
        <Header />
        <Texto>Bem-vindo</Texto>
     </ImageBackground>
   </Container>
  );
}