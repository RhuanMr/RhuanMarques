import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Home from '../pages/Home'
import Sobre from '../pages/Sobre'
import Habilidades from '../pages/Habilidades'
import Projetos from '../pages/Projetos'
import FAQ from '../pages/FAQ'
import Contato from '../pages/Contato'

const AppDrawer = createDrawerNavigator()

function AppRoutes(){
    return(
        <AppDrawer.Navigator
        drawerStyle={{
            backgroundColor: '#FFF'
        }}
        drawerContentOptions={{
            labelStyle:{
                fontWeight: 'bold'
            },
            activeTintColor: '#FFF',
            activeBackgroundColor: 'rgba(33, 175, 206, 0.69);',
            inactiveBackgroundColor: 'rgba(33, 175, 206, 0.69)',
            inactiveTintColor: '#FFF',
            itemStyle: {
                marginVertical: 5,
            }
        }}
        >
            <AppDrawer.Screen 
            name="Home" 
            component={Home} 
            options={{headerShown: false}}
            />
            <AppDrawer.Screen 
            name="Sobre" 
            component={Sobre} 
            options={{headerShown: false}}
            />  
            <AppDrawer.Screen 
            name="Habilidades" 
            component={Habilidades} 
            options={{headerShown: false}}
            /> 
            <AppDrawer.Screen 
            name="Projetos" 
            component={Projetos} 
            options={{headerShown: false}}
            /> 
            <AppDrawer.Screen 
            name="FAQ" 
            component={FAQ} 
            options={{headerShown: false}}
            />
             <AppDrawer.Screen 
            name="Contato" 
            component={Contato} 
            options={{headerShown: false}}
            />      
        </AppDrawer.Navigator>
    )
}

export default AppRoutes