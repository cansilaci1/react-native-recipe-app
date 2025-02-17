import React from "react";
import { View, Text, TextInput, Button, StyleSheet, Alert, ImageBackground, Dimensions, Platform, SafeAreaView, Pressable } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { RootStackParamList } from "../nav/StackNavigator";
import { TouchableOpacity } from "react-native";

const { width, height } = Dimensions.get("window");
type Props = NativeStackScreenProps<RootStackParamList, "Login">;

interface RegisterFormData {
  name: string;
  // email: string;
  // password: string;
}

const schema = yup.object({
  name: yup.string().min(2, "İsim en az 2 karakter olmalı").required("İsim zorunludur"),
  // email: yup.string().email("Geçerli bir e-posta giriniz").required("E-posta zorunludur"),
  // password: yup.string().min(6, "Şifre en az 6 karakter olmalı").required("Şifre zorunludur"),
}).required();

const Login: React.FC<Props> = ({ navigation }) => {
  const { control, handleSubmit, formState: { errors } } = useForm<RegisterFormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: RegisterFormData) => {
    Alert.alert("", `Hoş geldin, ${data.name}!`);
    navigation.navigate("Home");
  };

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require("../../assets/onboard.png")}
        style={styles.background}
        resizeMode="cover"
      />
      <View style={styles.formContainer}>
        <Text style={styles.title}>Merhaba</Text>
        <Controller
          control={control}
          name="name"
          render={({ field: { onChange, value } }) => (
            <View>
              <TextInput
                style={styles.input}
                placeholder="İsminiz"
                value={value}
                onChangeText={onChange}
              />
              {errors.name && <Text style={styles.error}>{errors.name.message}</Text>}
            </View>
          )}
        />
        {/*
        <Controller
          control={control}
          name="email"
          render={({ field: { onChange, value } }) => (
            <View>
              <TextInput
                style={styles.input}
                placeholder="E-posta"
                keyboardType="email-address"
                autoCapitalize="none"
                value={value}
                onChangeText={onChange}
              />
              {errors.email && <Text style={styles.error}>{errors.email.message}</Text>}
            </View>
          )}
        />

        <Controller
          control={control}
          name="password"
          render={({ field: { onChange, value } }) => (
            <View>
              <TextInput
                style={styles.input}
                placeholder="Şifre"
                secureTextEntry
                value={value}
                onChangeText={onChange}
              />
              {errors.password && <Text style={styles.error}>{errors.password.message}</Text>}
            </View>
          )}
        />
        */}
        <Pressable onPress={handleSubmit(onSubmit)} style={styles.button}>
          <Text style={styles.buttonText}> BAŞLA </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

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
});

export default Login;
