import React from "react";
import { View, Text, TextInput, Button, StyleSheet, Alert, ImageBackground, Dimensions, Platform, SafeAreaView, Pressable } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { RootStackParamList } from "../../navigation/nav/StackNavigator";
import { TouchableOpacity } from "react-native";
import styles from "./style";
import AsyncStorage from "@react-native-async-storage/async-storage";



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

  const onSubmit = async (data: RegisterFormData) => {  
    await AsyncStorage.setItem("isLoggedIn", "true");

    Alert.alert("", `Hoş geldin, ${data.name}!`);
    navigation.replace("HomeTabs");
    navigation.navigate("HomeTabs");  

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


export default Login;
