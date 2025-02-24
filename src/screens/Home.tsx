import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, StyleSheet, ActivityIndicator, Pressable } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/nav/StackNavigator';
import { fetchMeals } from '../api/mealService'; // ✅ Artık mealService içinden geliyor!
import { Meal } from '../entity/meal';
import styles from '../styles/Home.styles';

const Home: React.FC<NativeStackScreenProps<RootStackParamList, 'Home'>> = ({ navigation }) => {
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
      renderItem={({ item }: { item: Meal }) => (
        <Pressable onPress={() => navigation.navigate('RecipeDetail', { meal: item })} style={styles.card}>
          <Image source={{ uri: item.strMealThumb }} style={styles.image} />
          <Text style={styles.title}>{item.strMeal}</Text>
        </Pressable>
      )}
      keyExtractor={(item) => item.idMeal}
    />
  );
};

export default Home;
