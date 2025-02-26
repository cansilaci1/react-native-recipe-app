import React, { useEffect, useState, useRef } from "react";
import { View, Text, FlatList, Image, Pressable, ActivityIndicator, Animated } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/nav/StackNavigator";
import { useNavigation } from "@react-navigation/native";
import { fetchMeals } from "../api/mealService";
import { Meal } from "../entity/meal";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useFavorites } from "../context/FavoriteContext";
import { HEADER_HEIGHT_VALUE } from "../component/CurvedHeader"; // Header yüksekliği
import styles from "../styles/Home.styles"; // Stil dosyanı çekiyoruz

type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, "RecipeDetail">;

const Home: React.FC = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const { favorites, toggleFavorite } = useFavorites();
  const [meals, setMeals] = useState<Meal[]>([]);
  const [loading, setLoading] = useState(true);

  // Animasyon için referans
  const scrollY = useRef(new Animated.Value(0)).current;

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

  // Header'ın kaybolmasını sağlayan animasyon
  const headerTranslateY = scrollY.interpolate({
    inputRange: [0, HEADER_HEIGHT_VALUE + 50], // Biraz daha genişlettik
    outputRange: [0, -HEADER_HEIGHT_VALUE], // Yukarı kaydıkça gizleniyor
    extrapolate: "clamp",
  });

  return (
    <View style={styles.container}>
      {/* Header Animasyonu */}
      <Animated.View style={[styles.header, { transform: [{ translateY: headerTranslateY }] }]}>
        <Text style={styles.headerTitle}>Tarifler</Text>
      </Animated.View>

      {/* Liste */}
      <Animated.FlatList
        data={meals}
        renderItem={({ item }) => {
          const isFavorite = favorites.some((fav) => fav.idMeal === item.idMeal);

          return (
            <Pressable 
              onPress={() => navigation.navigate("RecipeDetail", { meal: item })}
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
        contentContainerStyle={{ paddingTop: HEADER_HEIGHT_VALUE, paddingBottom: 20 }} // Header ile çakışmayı önler
        scrollEventThrottle={16} // Daha akıcı animasyon için
        bounces={true} // Scroll'un yumuşak çalışmasını sağlıyor
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: false } // Burada native driver'ı kapattık
        )}
      />
    </View>
  );
};

export default Home;
