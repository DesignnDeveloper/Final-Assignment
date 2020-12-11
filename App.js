import React from 'react';

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "./components/Home";
import Slide from "./components/Slide";

const Stack = createStackNavigator();

export default function Main() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Slide" component={Slide} />
      <Stack.Screen name="Home" component={Home} />
      
        
        
      </Stack.Navigator>
    </NavigationContainer>

    
  );

}