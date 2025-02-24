import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/nav/StackNavigator';
import { Meal } from '../entity/meal';
import styles from '../styles/RecipeDetail.styles';

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

export default RecipeDetail;