import React, { useState, useRef } from "react";
import { View, Text, FlatList, Image, Pressable, Animated } from "react-native";
import { useFavorites } from "../context/FavoriteContext";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../navigation/nav/StackNavigator";
import styles from "../styles/Favorite.styles";
import Ionicons from "react-native-vector-icons/Ionicons";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { HEADER_HEIGHT_VALUE } from "../component/CurvedHeader"; 

type FavoriteScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, "RecipeDetail">;

const Favorite: React.FC = () => {
  const { favorites, toggleFavorite } = useFavorites();
  const navigation = useNavigation<FavoriteScreenNavigationProp>();

  const [listKey, setListKey] = useState<string>("flatlist-2columns");

  const scrollY = useRef(new Animated.Value(0)).current;

  if (favorites.length === 0) {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyText}>Henüz favorilere eklenmiş yemek yok.</Text>
      </View>
    );
  }

  const renderRightActions = (item: any) => (
    <View style={styles.swipeContainer}>
      <Pressable onPress={() => toggleFavorite(item)} style={styles.removeSwipeButton}>
        <Ionicons name="trash-outline" size={24} color="white" />
      </Pressable>
    </View>
  );

  const headerTranslateY = scrollY.interpolate({
    inputRange: [0, HEADER_HEIGHT_VALUE + 50], 
    outputRange: [0, -HEADER_HEIGHT_VALUE], 
    extrapolate: "clamp",
  });

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.header, { transform: [{ translateY: headerTranslateY }] }]}>
        <Text style={styles.headerTitle}>Favoriler</Text>
      </Animated.View>

      <Animated.FlatList
        key={listKey} 
        data={favorites}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: "space-evenly" }} 
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{ paddingTop: HEADER_HEIGHT_VALUE, paddingBottom: 20 }}
        scrollEventThrottle={16}
        bounces={true}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: false }
        )}
        renderItem={({ item }) => (
          <Swipeable renderRightActions={() => renderRightActions(item)}>
            <Pressable 
              onPress={() => navigation.navigate("RecipeDetail", { meal: item })} 
              style={styles.card}
            >
              <Image source={{ uri: item.strMealThumb }} style={styles.image} />
              <Text style={styles.title}>{item.strMeal + " Tarifi"}</Text>
            </Pressable>
          </Swipeable>
        )}
        keyExtractor={(item) => item.idMeal}
      />
    </View>
  );
};

export default Favorite;
