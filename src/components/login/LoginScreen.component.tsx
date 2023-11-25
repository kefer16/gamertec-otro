import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { InputPasswordCustom } from "../custom/InputPasswordCustom.component";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../../App";
import { useNavigation } from "@react-navigation/native";
import { InputTextCustom } from "../custom/InputTextCustom.component";

type homeScreenProp = StackNavigationProp<RootStackParamList>;

export const LoginScreen = () => {
   const navigation = useNavigation<homeScreenProp>();
   const [usuario, setUsuario] = useState<string>("");
   const [esconderContrasenia, setEsconderContrasenia] =
      useState<boolean>(true);
   const [contrasenia, setContrasenia] = useState<string>("");

   useEffect(() => {
      navigation.setOptions({ headerShown: false });
   }, []);

   const funLogin = () => {};

   const funIrARegistro = () => {
      navigation.navigate("Registro");
   };

   return (
      <View style={{ flex: 1 }}>
         <LinearGradient
            colors={["#C2A2F9", "#93ACF9"]}
            style={styles.gradientContainer}
         >
            <StatusBar style="auto" />
            <Image
               style={styles.logo}
               source={require("../../../assets/imagenes/favicon-gamertec.png")}
            />
            <Text style={styles.titulo}>Bienvenido,</Text>
            <Text style={styles.tituloLigero}>a Gamertec</Text>

            <InputTextCustom
               title="Usuario"
               placeholder="Ingrese usuario"
               value={usuario}
               functionChangeText={setUsuario}
               keyboardType="default"
               maxLength={15}
            />

            <InputPasswordCustom
               title="Contraseña"
               placeholder="Ingrese contraseña"
               value={contrasenia}
               functionChangeText={setContrasenia}
               activePassword={esconderContrasenia}
               functionActivePassword={() =>
                  setEsconderContrasenia(!esconderContrasenia)
               }
            />

            <Text style={styles.olvido}>Has olvidado tu contraseña?</Text>
            <TouchableOpacity style={styles.button} onPress={funLogin}>
               <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
            <View style={styles.footer}>
               <Text style={styles.noCuenta}>Aun no tienes cuenta?</Text>
               <Text style={styles.noCuentaRegistrate} onPress={funIrARegistro}>
                  Regístrate
               </Text>
            </View>
         </LinearGradient>
      </View>
   );
};
const styles = StyleSheet.create({
   gradientContainer: {
      flex: 1,
      paddingHorizontal: 40,
      paddingTop: 100,
   },
   logo: {
      width: 100,
      height: 100,
      marginBottom: 20,
      marginHorizontal: "auto",
      alignSelf: "center",
   },
   titulo: {
      fontSize: 30,
      color: "#fff",
      textAlign: "center",
      fontFamily: "Poppins-800",
      lineHeight: 35,
   },
   tituloLigero: {
      fontSize: 30,
      marginBottom: 20,
      color: "#fff",
      textAlign: "center",
      fontFamily: "Poppins-300",
      lineHeight: 35,
   },
   subtitulo: {
      width: "100%",
      fontSize: 15,
      lineHeight: 20,
      textAlign: "left",
      marginBottom: 5,
      color: "#fff",
      fontFamily: "Poppins-500",
   },
   button: {
      marginTop: 10,
      width: "100%",
      paddingVertical: 15,
      borderRadius: 10,
      marginBottom: 10,
      backgroundColor: "#fff",
   },
   buttonText: {
      textAlign: "center",
      color: "#000",
      fontSize: 16,
      fontFamily: "Poppins-700",
   },
   olvido: {
      width: "100%",
      textAlign: "right",
      color: "#fff",
      fontSize: 13,
      fontFamily: "Poppins-400",
      textDecorationLine: "underline",
   },
   footer: {
      width: "100%",
      display: "flex",
      flexDirection: "row",
      color: "#fff",
      justifyContent: "center",
      marginTop: 20,
   },
   noCuenta: {
      color: "#fff",
      fontSize: 13,
      fontFamily: "Poppins-400",
   },
   noCuentaRegistrate: {
      color: "#fff",
      marginLeft: 10,
      fontSize: 13,
      fontFamily: "Poppins-400",
      textDecorationLine: "underline",
   },
});
