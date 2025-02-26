import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Login from "../../screens/Login"; 
import RecipeDetail from "../../screens/RecipeDetail";
import BottomTabNavigator from "./BottomTabNavigator";
import CurvedHeader from "../../component/CurvedHeader"; // Kıvrımlı header bileşeni
import { Meal } from "../../entity/meal";

export type RootStackParamList = {
  Login: undefined;
  HomeTabs: undefined;
  RecipeDetail: { meal: Meal };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const StackNavigator = ({ initialRouteName }: { initialRouteName: keyof RootStackParamList }) => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName={initialRouteName}>
      <Stack.Screen name="Login" component={Login} options={{ title: "Giriş Yap" }} />
      <Stack.Screen name="HomeTabs" component={BottomTabNavigator} options={{ headerShown: false }} />
      <Stack.Screen
        name="RecipeDetail"
        component={RecipeDetail}
        options={{
          header: () => <CurvedHeader />, // CurvedHeader burada da kullanıldı
        }}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default StackNavigator;
