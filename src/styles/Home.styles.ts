import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    loader: { 
        flex: 1, 
        justifyContent: 'center',
        alignItems: 'center' 
    },
    card: { 
        backgroundColor: '#fff', 
        padding: 16, margin: 8, 
        borderRadius: 10, 
        elevation: 3 
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
})

export default styles;