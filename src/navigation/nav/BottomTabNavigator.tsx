import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../../screens/Home";
import Favorite from "../../screens/Favorite";
import Ionicons from "react-native-vector-icons/Ionicons";
import CurvedHeader from "../../component/CurvedHeader"; // Özel kıvrımlı header bileşeni

export type BottomTabParamList = {
  Home: undefined;
  Favorite: undefined;
};

const Tab = createBottomTabNavigator<BottomTabParamList>();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName = route.name === "Home" ? "home-outline" : "heart-outline";
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
        header: () => <CurvedHeader />, // CurvedHeader kullanılıyor
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Favorite" component={Favorite} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
