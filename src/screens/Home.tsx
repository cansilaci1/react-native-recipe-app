import React, { useEffect, useState, useRef } from "react";
import { View, Text, FlatList, Image, Pressable, ActivityIndicator, Animated } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/nav/StackNavigator";
import { useNavigation } from "@react-navigation/native";
import { fetchMeals } from "../api/mealService";
import { Meal } from "../entity/meal";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useFavorites } from "../context/FavoriteContext";
import Swipeable from "react-native-gesture-handler/Swipeable";
import styles from "../styles/Home.styles";
import { HEADER_HEIGHT_VALUE } from "../component/CurvedHeader";

type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, "RecipeDetail">;

const Home: React.FC = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const { favorites, toggleFavorite } = useFavorites();
  const [meals, setMeals] = useState<Meal[]>([]);
  const [loading, setLoading] = useState(true);

  const scrollY = useRef(new Animated.Value(0)).current;

  // 🔥 Swipeable öğeleri takip etmek için useRef kullanıyoruz
  const swipeableRefs = useRef<{ [key: string]: Swipeable | null }>({});

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

  // 🔥 Header'ın kaybolmasını sağlayan animasyon
  const headerTranslateY = scrollY.interpolate({
    inputRange: [0, 100], 
    outputRange: [0, -100], 
    extrapolate: "clamp",
  });

  // 🔥 Favorilere ekleme swipe işlemi
  const handleToggleFavorite = (item: Meal) => {
    toggleFavorite(item);
    
    // 🔥 Eğer swipeable referansı varsa, otomatik olarak kapat!
    if (swipeableRefs.current[item.idMeal]) {
      swipeableRefs.current[item.idMeal]?.close();
    }
  };

  // 🔥 Swipe-To-Add butonu
  const renderRightActions = (item: Meal) => {
    const isFavorite = favorites.some((fav) => fav.idMeal === item.idMeal);
    return (
      <View style={styles.swipeContainer}>
        <Pressable onPress={() => handleToggleFavorite(item)} style={styles.swipeButton}>
          <Ionicons 
            name={isFavorite ? "heart-dislike-outline" : "heart-outline"} 
            style={styles.swipeIcon} 
          />
        </Pressable>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {/* 🔥 Kaydırınca header kayboluyor */}
      <Animated.View style={[styles.header, { transform: [{ translateY: headerTranslateY }] }]}>
        <Text style={styles.headerTitle}>Tarifler</Text>
      </Animated.View>

      {/* 🔥 Swipe-to-Add içeren yemek listesi */}
      <Animated.FlatList
        data={meals}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: "space-evenly" }}
        contentContainerStyle={{ paddingTop: HEADER_HEIGHT_VALUE, paddingBottom: 20 }}
        scrollEventThrottle={16}
        bounces={true}
        keyExtractor={(item) => item.idMeal}
        onScroll={Animated.event([{ nativeEvent: { contentOffset: { y: scrollY } } }], {
          useNativeDriver: false,
        })}
        renderItem={({ item }) => (
          <Swipeable
            ref={(ref) => (swipeableRefs.current[item.idMeal] = ref)} // 🔥 Swipeable öğeyi kaydet
            renderRightActions={() => renderRightActions(item)}
          >
            <Pressable 
              onPress={() => navigation.navigate("RecipeDetail", { meal: item })}
              style={styles.card}
            >
              <Image source={{ uri: item.strMealThumb }} style={styles.image} />
              <Text style={styles.title}>{item.strMeal + " Tarifi"}</Text>
            </Pressable>
          </Swipeable>
        )}
      />
    </View>
  );
};

export default Home;
