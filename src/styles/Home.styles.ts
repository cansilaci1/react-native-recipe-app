import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    loader: { 
        flex: 1, 
        justifyContent: 'center',
        alignItems: 'center' 
    },
    card: { 
        top: 20,
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
