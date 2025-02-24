import React from "react";
import { View, Text, Image, ScrollView } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/nav/StackNavigator";
import styles from "../styles/RecipeDetail.styles";

type Props = NativeStackScreenProps<RootStackParamList, "RecipeDetail">;

const RecipeDetail: React.FC<Props> = ({ route }) => {
  console.log("Gelen parametre:", route.params); 
  const { meal } = route.params;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={{ uri: meal.strMealThumb }} style={styles.image} />
      <Text style={styles.title}>{meal.strMeal}</Text>
      <Text style={styles.category}>Kategori: {meal.strCategory}</Text>
      <Text style={styles.area}>Bölge: {meal.strArea}</Text>
      <Text style={styles.instructions}>{meal.strInstructions}</Text>
    </ScrollView>
  );
};

export default RecipeDetail;
