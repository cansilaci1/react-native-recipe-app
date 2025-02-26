import { StyleSheet } from "react-native";
import { HEADER_HEIGHT_VALUE } from "../component/CurvedHeader"; 

const styles = StyleSheet.create({
    container: { 
        flex: 1, 
        marginTop: HEADER_HEIGHT_VALUE, 
        backgroundColor: "#f8f8f8",
        paddingHorizontal: 10
    },
    emptyContainer: { 
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: HEADER_HEIGHT_VALUE,
    },
    emptyText: { 
        fontSize: 18,
        fontWeight: "bold",
        color: "#555",
    },
    card: { 
        backgroundColor: '#fff', 
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
        width: '100%', 
        height: 200, 
        borderRadius: 10 
    },
    title: { 
        fontSize: 20, 
        fontWeight: 'bold', 
        textAlign: 'center', 
        marginTop: 8 
    },
    removeSwipeButton: { 
        backgroundColor: "transparent",
        justifyContent: "center",
        alignItems: "center",
        width: 70,
        height: "100%",
        borderRadius: 10,
        marginVertical: 10
    }
});

export default styles;
