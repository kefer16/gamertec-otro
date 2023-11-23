import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
   StyleSheet,
   Text,
   View,
   TextInput,
   Button,
   TouchableOpacity,
   Image,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function App() {
   const [usuario, setUsuario] = useState<string>("");
   const [contrasenia, setContrasenia] = useState<string>("");
   const funLogin = () => {};
   return (
      <LinearGradient
         colors={["#C2A2F9", "#93ACF9"]}
         style={styles.gradientContainer}
      >
         <StatusBar style="auto" />
         <View style={styles.container}>
            <View style={styles.login}>
               <Image
                  style={styles.logo}
                  source={require("./assets/imagenes/favicon-gamertec.png")}
               />
               <Text style={styles.titulo}>Bienvenido,</Text>
               <Text style={styles.tituloLigero}>a Gamertec</Text>
               <Text style={styles.subtitulo}>Usuario</Text>
               <TextInput
                  style={styles.input}
                  placeholder="Ingrese Usario"
                  value={usuario}
                  onChangeText={(text) => setUsuario(text)}
               />
               <Text style={styles.subtitulo}>Contraseña</Text>
               <TextInput
                  style={styles.input}
                  placeholder="Ingrese Contraseña"
                  value={contrasenia}
                  onChangeText={(text) => setContrasenia(text)}
                  secureTextEntry
               />
               <Text style={styles.parrafText}>
                  Has olvidado tu contraseña?
               </Text>
               <TouchableOpacity style={styles.button} onPress={funLogin}>
                  <Text style={styles.buttonText}>Logearse</Text>
               </TouchableOpacity>
               <Text
                  style={[
                     styles.parrafText,
                     {
                        textDecorationLine: "underline",
                     },
                  ]}
               >
                  Aun no tienes cuenta? Registrate
               </Text>
            </View>
         </View>
      </LinearGradient>
   );
}

const styles = StyleSheet.create({
   gradientContainer: {
      flex: 1,
   },
   container: {
      display: "flex",
      height: "100%",
      borderWidth: 1,
      // backgroundColor: "#E7F1F8",
      alignItems: "center",
      justifyContent: "center",
   },
   logo: {
      width: 100,
      height: 100,
      // backgroundColor: "red",
   },
   login: {
      display: "flex",
      width: "80%",
      marginHorizontal: "auto",
      flexDirection: "column",
      // backgroundColor: "#d9f0ff",
      alignItems: "center",
      justifyContent: "center",
   },
   titulo: {
      fontSize: 30,
      fontWeight: "900",
      color: "#fff",
      textAlign: "center",
   },
   tituloLigero: {
      fontSize: 30,
      marginBottom: 20,
      color: "#fff",
      textAlign: "center",
   },
   subtitulo: {
      width: "100%",
      fontSize: 15,
      fontWeight: "bold",
      textAlign: "left",
      marginBottom: 5,
      color: "#fff",
   },
   input: {
      display: "flex",
      width: "100%",
      padding: 10,
      borderStyle: "solid",
      borderColor: "#fff",
      backgroundColor: "#ffffff2d",
      color: "#fff",
      borderWidth: 1,
      borderRadius: 10,
      marginBottom: 10,
   },
   button: {
      marginTop: 10,
      width: "100%",
      padding: 20,
      borderRadius: 10,
      marginBottom: 10,
      backgroundColor: "#fff",
   },
   buttonText: {
      textAlign: "center",
      color: "#000",
      fontSize: 16,
      fontWeight: "bold",
   },
   parrafText: {
      width: "100%",
      textAlign: "right",
      color: "#fff",
      fontSize: 15,
   },
});
