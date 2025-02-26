import { useNavigation, useRoute } from "@react-navigation/native";
import React from "react";
import { View, StyleSheet, Dimensions, TouchableOpacity } from "react-native";
import Svg, { Path } from "react-native-svg";
import Ionicons from "react-native-vector-icons/Ionicons";

const { width } = Dimensions.get("window");
const height = 180; // Header yüksekliği

const CurvedHeader = ({ onBackPress }: { onBackPress?: () => void }) => {
const navigation = useNavigation()
const route = useRoute()

  return (
    <View style={styles.container}>
      <Svg width={width} height={height} viewBox={`0 0 ${width} 180`} style={styles.svg}>
        <Path
          fill="#17342B" // Header arka plan rengi
          d={`M0,0 H${width} V120 Q${width / 2},200 0,120 Z`}
        />
      </Svg>

      {/* Eğer geri tuşu veya başka butonlar gerekiyorsa */}
      {route.name !== "Home" && (
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Ionicons name="arrow-back" size={24} color="white" />
      </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    width: "100%",
    height: height,
    backgroundColor: "transparent",
    justifyContent: "center",
  },
  svg: {
    position: "absolute",
    top: 0,
  },
  backButton: {
    position: "absolute",
    top: 50, // iPhone çentikli cihazlar için hizalama
    left: 20,
  },
});

export default CurvedHeader;
