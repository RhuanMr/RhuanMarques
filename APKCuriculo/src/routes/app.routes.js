import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Home from '../pages/Home'

const AppDrawer = createDrawerNavigator()

function AppRoutes(){
    return(
        <AppDrawer.Navigator
        drawerStyle={{
            backgroundColor: '#171717'
        }}
        drawerContentOptions={{
            labelStyle:{
                fontWeight: 'bold'
            },
            activeTintColor: '#171717',
            activeBackgroundColor: 'rgba(33, 175, 206, 0.69);',
            inactiveBackgroundColor: '#',
            inactiveTintColor: '#DDD',
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
        </AppDrawer.Navigator>
    )
}

export default AppRoutes