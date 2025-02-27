import { StyleSheet, Dimensions } from "react-native";
import { HEADER_HEIGHT_VALUE } from "../component/CurvedHeader";

const { width } = Dimensions.get("window");
const CARD_MARGIN = 8;
const CARD_WIDTH = (width / 2) - (CARD_MARGIN * 3);

const styles = StyleSheet.create({
    container: { 
        flex: 1, 
        backgroundColor: "#f8f8f8",
        paddingHorizontal: CARD_MARGIN,
    },
    header: {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: HEADER_HEIGHT_VALUE,
        backgroundColor: "transparent", // 🔥 Yeşil renk tamamen kaldırıldı
        justifyContent: "center",
        alignItems: "center",
        zIndex: 100,
    },
    headerTitle: {
        color: "#FFF",
        fontSize: 20,
        fontWeight: "bold",
    },
    emptyContainer: { 
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: HEADER_HEIGHT_VALUE + 20,
    },
    emptyText: { 
        fontSize: 18,
        fontWeight: "bold",
        color: "#555",
    },
    card: { 
        backgroundColor: "#fff", 
        width: CARD_WIDTH,  
        padding: 12, 
        marginBottom: CARD_MARGIN, 
        marginHorizontal: CARD_MARGIN / 2, 
        borderRadius: 10, 
        elevation: 3, 
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        overflow: "visible",
    },
    image: { 
        width: "100%", 
        height: 140, 
        borderRadius: 10 
    },
    title: { 
        fontSize: 14,  
        fontWeight: "bold", 
        textAlign: "center", 
        marginTop: 6 
    },
    removeSwipeButton: { 
        justifyContent: "center",
        alignItems: "center",
        width: 80,
        height: "100%",
        backgroundColor: "red",
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        marginVertical: CARD_MARGIN,
        zIndex: 10,
    },
    swipeContainer: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "red",
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        marginVertical: CARD_MARGIN,
        paddingHorizontal: 10,
        zIndex: 10,
    }
});

export default styles;
