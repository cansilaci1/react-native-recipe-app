import React, { useEffect, useState } from "react";
import { View, ActivityIndicator } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import StackNavigator from "./navigation/nav/StackNavigator";
import { FavoriteProvider } from "./context/FavoriteContext"; 

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean | null>(null);

  useEffect(() => {
    const checkLoginStatus = async () => {
      const loggedIn = await AsyncStorage.getItem("isLoggedIn");
      setIsLoggedIn(loggedIn === "true");
    };

    checkLoginStatus();
  }, []);

  if (isLoggedIn === null) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="blue" />
      </View>
    );
  }

  return (
  <FavoriteProvider>
    <StackNavigator initialRouteName={isLoggedIn ? "HomeTabs" : "Login"} />
  </FavoriteProvider>
);

};

export default App;
