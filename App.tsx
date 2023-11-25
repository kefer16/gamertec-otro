import React, { useCallback } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LoginScreen } from "./src/components/login/LoginScreen.component";
import { RegistroScreen } from "./src/components/registro/RegistroScreen";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import { View } from "react-native";

SplashScreen.preventAutoHideAsync();

export type RootStackParamList = {
   Login: undefined;
   Registro: undefined;
};

const Stack = createNativeStackNavigator();

export default function App() {
   const [fontsLoaded, fontError] = useFonts({
      "Poppins-100": require("./assets/fonts/Poppins-Thin.ttf"),
      "Poppins-200": require("./assets/fonts/Poppins-ExtraLight.ttf"),
      "Poppins-300": require("./assets/fonts/Poppins-Light.ttf"),
      "Poppins-400": require("./assets/fonts/Poppins-Regular.ttf"),
      "Poppins-500": require("./assets/fonts/Poppins-Medium.ttf"),
      "Poppins-600": require("./assets/fonts/Poppins-SemiBold.ttf"),
      "Poppins-700": require("./assets/fonts/Poppins-Bold.ttf"),
      "Poppins-800": require("./assets/fonts/Poppins-ExtraBold.ttf"),
      "Poppins-900": require("./assets/fonts/Poppins-Black.ttf"),
   });
   const onLayoutRootView = useCallback(async () => {
      if (fontsLoaded || fontError) {
         await SplashScreen.hideAsync();
      }
   }, [fontsLoaded, fontError]);

   if (!fontsLoaded && !fontError) {
      return null;
   }

   return (
      <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
         <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
               <Stack.Screen
                  name="Login"
                  component={LoginScreen}
                  options={{ title: "Login" }}
               />
               <Stack.Screen
                  name="Registro"
                  component={RegistroScreen}
                  options={{ title: "Registro" }}
               />
            </Stack.Navigator>
         </NavigationContainer>
      </View>
   );
}
