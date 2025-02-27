import { Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get("window")

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: "#fff" },
    background: {
      position: "absolute",
      top: -height * 0.1,
      left: 0,
      right: 0,
      height: height * 0.54,
      zIndex: 1,
    },
    formContainer: {
        alignSelf: "center",
        marginTop: "auto",
        marginBottom: height * 0.08,
        width: width * 0.85,
        backgroundColor: "rgba(255, 255, 255, 0.85)",
        top: -height * 0.1,
        padding: height * 0.03,
        borderRadius: 20,
        shadowColor: "#000",
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 5,
        zIndex: 2,
      },
      title: { 
        fontSize: width * 0.08,
        fontWeight: "bold", 
        textAlign: "center", 
        marginBottom: height * 0.02,
        color: "#1E2D4D"
      },
      input: { 
        borderWidth: 1, 
        borderColor: "#ccc", 
        padding: height * 0.015, 
        marginBottom: height * 0.02, 
        borderRadius: 10, 
        backgroundColor: "#fff",
        fontSize: width * 0.045,
      },
      button: {
        backgroundColor: '#007AFF',
        padding: 12,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
      },
      buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
      },
      error: { color: "red", fontSize: width * 0.035, marginBottom: height * 0.01 },
})

export default styles;