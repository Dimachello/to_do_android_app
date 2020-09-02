import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import LoginPage from './components/Login';
import WelcomePage from './components/MainPage';

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer initialRouteName="Login">
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={LoginPage}
        />
        <Stack.Screen
          name="MainPage"
          component={WelcomePage}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


