import { StyleSheet } from "react-native";
import { HEADER_HEIGHT_VALUE } from "../component/CurvedHeader"; // Header yüksekliği

const styles = StyleSheet.create({
    container: { 
        flex: 1, 
        backgroundColor: "#f8f8f8",
        paddingHorizontal: 10
    },
    header: {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: HEADER_HEIGHT_VALUE,
        backgroundColor: "#17342B", // Header rengi
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
        padding: 16, 
        marginVertical: 10, 
        borderRadius: 10, 
        elevation: 3, 
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4
    },
    image: { 
        width: "100%", 
        height: 200, 
        borderRadius: 10 
    },
    title: { 
        fontSize: 20, 
        fontWeight: "bold", 
        textAlign: "center", 
        marginTop: 8 
    },
    favoriteButton: { 
        position: "absolute",
        top: 10,
        right: 10,
        backgroundColor: "rgba(255, 255, 255, 0.7)",
        borderRadius: 20,
        padding: 8,
        elevation: 3
    }
});

export default styles;
