import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: { 
        flex: 1, 
        backgroundColor: "#f8f8f8" 
    },
    emptyContainer: { 
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    emptyText: { 
        fontSize: 18,
        fontWeight: "bold",
        color: "#555",
    },
    card: { 
        backgroundColor: '#fff', 
        padding: 16, 
        margin: 8, 
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
    removeButton: { 
        position: "absolute",
        top: 10,
        right: 10,
        backgroundColor: "red",
        borderRadius: 20,
        padding: 8,
        elevation: 3
    }
});

export default styles;
