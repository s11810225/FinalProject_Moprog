import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Beranda, Pengembalian, Pinjaman, SignIn, SignUp, SplashScreen, TerimaKasih } from '../pages';

const Stack = createStackNavigator();

const Router = () => {
    return (
      <Stack.Navigator>
          <Stack.Screen name = "SplashScreen" 
          component={SplashScreen} 
          options={{headerShown : false}}
          />
          <Stack.Screen name = "SignIn" 
          component={SignIn}
          options={{headerShown : false}}
          />
          <Stack.Screen name = "SignUp" 
          component={SignUp}
          options={{headerShown : false}}
          />
          <Stack.Screen name = "Beranda" 
          component={Beranda}
          options={{headerShown : false}}
          />
          <Stack.Screen name = "Pengembalian" 
          component={Pengembalian}
          options={{headerShown : false}}
          />
          <Stack.Screen name = "Pinjaman" 
          component={Pinjaman}
          options={{headerShown : false}}
          />
         <Stack.Screen name = "TerimaKasih" 
          component={TerimaKasih}
          options={{headerShown : false}}
          />
      </Stack.Navigator>
    );
};

export default Router;
