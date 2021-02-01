import React from 'react';
import Icon from 'react-native-vector-icons/Feather'
import { useNavigation } from '@react-navigation/native'

import {Container, ButtonMenu, Texto} from './style'

export default function Header() {
    const navigation = useNavigation()

    return (
        <Container>
            <ButtonMenu onPress={ () => navigation.toggleDrawer() }>
                <Icon name="menu" color="#FFF" size={30} style={{paddingTop: 20, paddingLeft: 10}}/>                
            </ButtonMenu>
            <Texto>Rhuan Marques</Texto>
        </Container>
    );
}