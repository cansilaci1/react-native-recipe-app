import React, { useEffect, useState } from "react";
import { View, Text, FlatList, Image, Pressable, ActivityIndicator } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/nav/StackNavigator";
import { useNavigation } from "@react-navigation/native";
import { fetchMeals } from "../api/mealService";
import { Meal } from "../entity/meal";
import styles from "../styles/Home.styles";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useFavorites } from "../context/FavoriteContext";

type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, "RecipeDetail">;

const Home: React.FC = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const { favorites, toggleFavorite } = useFavorites();
  const [meals, setMeals] = useState<Meal[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getMeals = async () => {
      try {
        const data = await fetchMeals();
        setMeals(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    getMeals();
  }, []);

  if (loading) return <ActivityIndicator size="large" color="#007AFF" style={styles.loader} />;

  return (
    <FlatList
      data={meals}
      renderItem={({ item }) => {
        const isFavorite = favorites.some((fav) => fav.idMeal === item.idMeal);

        return (
          <Pressable 
            onPress={() => {
              console.log("Tarif Detayına Gidiliyor:", item);
              navigation.navigate("RecipeDetail", { meal: item });
            }}
            style={styles.card}
          >
            <Image source={{ uri: item.strMealThumb }} style={styles.image} />
            <Text style={styles.title}>{item.strMeal}</Text>

            <Pressable onPress={() => toggleFavorite(item)} style={styles.favoriteButton}>
              <Ionicons name={isFavorite ? "heart" : "heart-outline"} size={24} color="red" />
            </Pressable>
          </Pressable>
        );
      }}
      keyExtractor={(item) => item.idMeal}
    />
  );
};

export default Home;
