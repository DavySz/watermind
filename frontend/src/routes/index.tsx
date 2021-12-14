import React from 'react';
import { NavigationContainer, DefaultTheme} from '@react-navigation/native';

import { Background } from '../components/Background';
import { AuthRoutes } from './auth.routes';

const MyTheme = {
    dark: false,
    colors: {
      primary: 'rgb(255, 45, 85)',
      background: 'transparent',
      card: 'rgb(255, 255, 255)',
      text: 'rgb(28, 28, 30)',
      border: 'rgb(199, 199, 204)',
      notification: 'rgb(255, 69, 58)',
    },
  };

export function Routes(){

    return(
        <Background>
            <NavigationContainer theme={MyTheme}>
                 <AuthRoutes/>
            </NavigationContainer>   
        </Background>
        )

}