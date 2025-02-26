import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Login from "../../screens/Login"; 
import RecipeDetail from "../../screens/RecipeDetail";
import BottomTabNavigator from "./BottomTabNavigator";
import { Meal } from "../../entity/meal";
import CurvedHeader from "../../component/CurvedHeader"; // Header bileşeni

export type RootStackParamList = {
  Login: undefined;
  HomeTabs: undefined;
  RecipeDetail: { meal: Meal };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const StackNavigator = ({ initialRouteName }: { initialRouteName: keyof RootStackParamList }) => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName={initialRouteName}>
      <Stack.Screen 
        name="Login" 
        component={Login} 
        options={{ 
          header: () => <CurvedHeader /> // Burada header olarak eklendi
        }} 
      />
      <Stack.Screen 
        name="HomeTabs" 
        component={BottomTabNavigator} 
        options={{ 
          header: () => <CurvedHeader /> 
        }} 
      />
      <Stack.Screen 
        name="RecipeDetail" 
        component={RecipeDetail} 
        options={{ 
          header: () => <CurvedHeader /> 
        }} 
      /> 
    </Stack.Navigator>
  </NavigationContainer>
);

export default StackNavigator;
