import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from '../../screens/Login';
import Home from '../../screens/Home';
import RecipeDetail from '../../screens/RecipeDetail';
import { Meal } from '../../entity/meal';

export type RootStackParamList = {
  Login: undefined;
  Home: undefined;
  RecipeDetail: { meal: Meal };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const StackNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={Login} options={{ title: 'Giriş Yap' }} />
      <Stack.Screen name="Home" component={Home} options={{ title: 'Ana Sayfa' }} />
      <Stack.Screen name="RecipeDetail" component={RecipeDetail} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default StackNavigator;