import React from "react";
import { View, StyleSheet, Dimensions, TouchableOpacity } from "react-native";
import Svg, { Path, Rect } from "react-native-svg";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation, useRoute } from "@react-navigation/native";

const { width } = Dimensions.get("window");
const HEADER_HEIGHT = 150; // Header yüksekliği

const CurvedHeader = () => {
  const navigation = useNavigation();
  const route = useRoute();

  return (
    <View style={styles.container}>
      <Svg width={width} height={HEADER_HEIGHT} viewBox={`0 0 ${width} 150`} style={styles.svg}>
        {/* 🔥 Arkaplanı tamamen şeffaf yapıyoruz */}
        <Rect x="0" y="0" width={width} height="150" fill="transparent" />

        {/* Ana Kırmızı Header */}
        <Path fill="red" d={`M0,0 H${width} V100 Q${width / 2},180 0,100 Z`} />
      </Svg>

      {/* Geri Tuşu (Ana Sayfada Görünmesin) */}
      {route.name !== "HomeTabs" && (
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
    left: 0,
    width: "100%",
    height: HEADER_HEIGHT,
    backgroundColor: "transparent", // 🔥 YEŞİL YERİNE ŞEFFAF OLDU
    zIndex: 10,
  },
  svg: {
    position: "absolute",
    top: 0,
  },
  backButton: {
    position: "absolute",
    top: 50, // iPhone çentikli cihazlar için hizalama
    left: 20,
    zIndex: 20,
  },
});

export default CurvedHeader;
export const HEADER_HEIGHT_VALUE = HEADER_HEIGHT;
