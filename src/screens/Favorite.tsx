import React from "react";
import { View, Text, FlatList, Image, Pressable } from "react-native";
import { useFavorites } from "../context/FavoriteContext";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../navigation/nav/StackNavigator";
import styles from "../styles/Favorite.styles";
import Ionicons from "react-native-vector-icons/Ionicons";
import Swipeable from "react-native-gesture-handler/Swipeable";

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

  const renderRightActions = (item: any) => (
    <Pressable onPress={() => toggleFavorite(item)} style={styles.removeSwipeButton}>
      <Ionicons name="trash-outline" size={24} color="red" />
    </Pressable>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={favorites}
        renderItem={({ item }) => (
          <Swipeable renderRightActions={() => renderRightActions(item)}>
            <Pressable 
              onPress={() => navigation.navigate("RecipeDetail", { meal: item })} 
              style={styles.card}
            >
              <Image source={{ uri: item.strMealThumb }} style={styles.image} />
              <Text style={styles.title}>{item.strMeal}</Text>
            </Pressable>
          </Swipeable>
        )}
        keyExtractor={(item) => item.idMeal}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </View>
  );
};

export default Favorite;
