import { StyleSheet } from "react-native";
import { HEADER_HEIGHT_VALUE } from "../../component/CurvedHeader";

const styles = StyleSheet.create({
    container: { 
        flexGrow: 1, 
        padding: 16, 
        backgroundColor: 'transparent',
        marginTop: HEADER_HEIGHT_VALUE
     },
    image: { 
        width: '100%', 
        height: 300, 
        borderRadius: 10, 
        marginBottom: 16 },
    title: { 
        fontSize: 26, 
        fontWeight: 'bold', 
        textAlign: 'center', 
        marginBottom: 10 },
    category: { 
        fontSize: 18, 
        fontStyle: 'italic', 
        marginBottom: 8 },
    area: { 
        fontSize: 18, 
        fontStyle: 'italic', 
        marginBottom: 8 },
    instructions: { 
        fontSize: 16, 
        lineHeight: 22, 
        color: '#555', 
        marginTop: 10 }
})

export default styles;