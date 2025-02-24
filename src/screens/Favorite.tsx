import React from "react";
import { View, Text, FlatList, Image, Pressable } from "react-native";
import { useFavorites } from "../context/FavoriteContext";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../navigation/nav/StackNavigator";
import styles from "../styles/Favorite.styles";
import Ionicons from "react-native-vector-icons/Ionicons";

type FavoriteScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, "RecipeDetail">;

const Favorite: React.FC = () => {
  const { favorites, toggleFavorite } = useFavorites();
  const navigation = useNavigation<FavoriteScreenNavigationProp>();

  if (favorites.length === 0) {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyText}>Henüz favorilere eklenmiş yemek yok.</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={favorites}
      renderItem={({ item }) => (
        <Pressable 
          onPress={() => {
            console.log("Tarif Detayına Gidiliyor:", item);
            navigation.navigate("RecipeDetail", { meal: item });
          }} 
          style={styles.card}
        >
          <Image source={{ uri: item.strMealThumb }} style={styles.image} />
          <Text style={styles.title}>{item.strMeal}</Text>

          {/* Favoriden Çıkarma Butonu */}
          <Pressable onPress={() => toggleFavorite(item)} style={styles.removeButton}>
            <Ionicons name="trash-outline" size={24} color="white" />
          </Pressable>
        </Pressable>
      )}
      keyExtractor={(item) => item.idMeal}
    />
  );
};

export default Favorite;
