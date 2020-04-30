import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import LoginScreen from './src/screens/LoginScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import SignUpScreenNext from './src/screens/SignUpScreenNext';
import SocialMediaScreen from './src/screens/SocialMedia/SocialMediaScreen';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Home" 
        screenOptions={{
          header: () => {},
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Cadastro" component={SignUpScreen} />
        <Stack.Screen name="CadastroNext" component={SignUpScreenNext} />

        <Stack.Screen name="SocialMedia" component={SocialMediaScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;