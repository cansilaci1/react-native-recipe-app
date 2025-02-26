import React, { useEffect, useState } from "react";
import { View, ActivityIndicator } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { GestureHandlerRootView } from "react-native-gesture-handler"; // Gesture handler için eklendi
import StackNavigator from "./navigation/nav/StackNavigator";
import { FavoriteProvider } from "./context/FavoriteContext";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean | null>(null);

  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const loggedIn = await AsyncStorage.getItem("isLoggedIn");
        setIsLoggedIn(loggedIn === "true");
      } catch (error) {
        console.error("Error checking login status:", error);
        setIsLoggedIn(false); // Eğer bir hata olursa giriş yapılmamış olarak varsayalım
      }
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
    <GestureHandlerRootView style={{ flex: 1 }}>
      <FavoriteProvider>
        <StackNavigator initialRouteName={isLoggedIn ? "HomeTabs" : "Login"} />
      </FavoriteProvider>
    </GestureHandlerRootView>
  );
};

export default App;
