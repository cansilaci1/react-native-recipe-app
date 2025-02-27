import React, { useEffect, useState, useRef } from "react";
import { View, Text, FlatList, Image, Pressable, ActivityIndicator, Animated } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../navigation/nav/StackNavigator";
import { useNavigation } from "@react-navigation/native";
import { fetchMeals } from "../../api/mealService";
import { Meal } from "../../entity/meal";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useFavorites } from "../../context/FavoriteContext";
import Swipeable from "react-native-gesture-handler/Swipeable";
import styles from "../Home/style";
import { HEADER_HEIGHT_VALUE } from "../../component/CurvedHeader";

type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, "RecipeDetail">;

const Home: React.FC = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const { favorites, toggleFavorite } = useFavorites();
  const [meals, setMeals] = useState<Meal[]>([]);
  const [loading, setLoading] = useState(true);

  const scrollY = useRef(new Animated.Value(0)).current;
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

  const headerTranslateY = scrollY.interpolate({
    inputRange: [0, 100], 
    outputRange: [0, -100], 
    extrapolate: "clamp",
  });

  const handleToggleFavorite = (item: Meal) => {
    toggleFavorite(item);
    
    if (swipeableRefs.current[item.idMeal]) {
      setTimeout(() => {
        swipeableRefs.current[item.idMeal]?.close();
      }, 300); //Kapanma süresi 300ms..
    }
  };

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
      <Animated.View style={[styles.header, { transform: [{ translateY: headerTranslateY }] }]}>
        <Text style={styles.headerTitle}>Tarifler</Text>
      </Animated.View>

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
            ref={(ref) => (swipeableRefs.current[item.idMeal] = ref)}
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
