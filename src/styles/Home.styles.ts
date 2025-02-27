import { StyleSheet, Dimensions } from "react-native";
import { HEADER_HEIGHT_VALUE } from "../component/CurvedHeader";

const { width } = Dimensions.get("window");
const CARD_MARGIN = 8; // 🔥 Kartlar arasındaki boşluk
const CARD_WIDTH = (width / 2) - (CARD_MARGIN * 3); // 🔥 İki kart tam sığacak şekilde hesaplandı

const styles = StyleSheet.create({
    container: { 
        paddingTop: 16,
        flex: 1, 
        backgroundColor: "#f8f8f8",
        paddingHorizontal: CARD_MARGIN // 🔥 Dış boşlukları minimal tuttuk
    },
    header: {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: HEADER_HEIGHT_VALUE,
        backgroundColor: "#17342B", 
        justifyContent: "center",
        alignItems: "center",
        zIndex: 100,
    },
    headerTitle: {
        color: "#FFF",
        fontSize: 20,
        fontWeight: "bold",
    },
    loader: { 
        flex: 1, 
        justifyContent: 'center',
        alignItems: 'center' 
    },
    card: { 
        backgroundColor: "#fff", 
        width: CARD_WIDTH,  // 🔥 Kart genişliği optimize edildi
        padding: 10, 
        marginBottom: CARD_MARGIN, // 🔥 Alt satır ile boşluk eşitlendi
        marginHorizontal: CARD_MARGIN / 2, // 🔥 Yan boşluklar optimize edildi
        borderRadius: 10, 
        elevation: 3, 
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4
    },
    image: { 
        width: "100%", 
        height: 140, // 🔥 Resim biraz küçültüldü
        borderRadius: 10 
    },
    title: { 
        fontSize: 14,  
        fontWeight: "bold", 
        textAlign: "center", 
        marginTop: 6 
    },
    favoriteButton: { 
        position: "absolute",
        top: 8,
        right: 8,
        backgroundColor: "rgba(255, 255, 255, 0.7)",
        borderRadius: 20,
        padding: 6,
        elevation: 3
    }
});

export default styles;
