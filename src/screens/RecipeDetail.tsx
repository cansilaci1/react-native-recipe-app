import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/nav/StackNavigator';
import { Meal } from '../entity/meal';

type RecipeDetailScreenProps = {
  route: RouteProp<RootStackParamList, 'RecipeDetail'>;
};

const RecipeDetail: React.FC<RecipeDetailScreenProps> = ({ route }) => {
  const { meal } = route.params;
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={{ uri: meal.strMealThumb }} style={styles.image} />
      <Text style={styles.title}>{meal.strMeal}</Text>
      <Text style={styles.category}>Category: {meal.strCategory}</Text>
      <Text style={styles.area}>Area: {meal.strArea}</Text>
      <Text style={styles.instructions}>{meal.strInstructions}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flexGrow: 1, padding: 16, backgroundColor: '#f9f9f9' },
  image: { width: '100%', height: 300, borderRadius: 10, marginBottom: 16 },
  title: { fontSize: 26, fontWeight: 'bold', textAlign: 'center', marginBottom: 10 },
  category: { fontSize: 18, fontStyle: 'italic', marginBottom: 8 },
  area: { fontSize: 18, fontStyle: 'italic', marginBottom: 8 },
  instructions: { fontSize: 16, lineHeight: 22, color: '#555', marginTop: 10 },
});

export default RecipeDetail;