import React, { useCallback } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { View } from "react-native";
import { LoginScreen } from "./src/components/login/LoginScreen.component";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

export type RootStackParamList = {
   Login: undefined;
   Register: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
   const [fontsLoaded] = useFonts({
      "Poppins-100": require("./assets/fonts/Poppins/Poppins-Thin.ttf"),
      "Poppins-200": require("./assets/fonts/Poppins/Poppins-ExtraLight.ttf"),
      "Poppins-300": require("./assets/fonts/Poppins/Poppins-Light.ttf"),
      "Poppins-400": require("./assets/fonts/Poppins/Poppins-Regular.ttf"),
      "Poppins-500": require("./assets/fonts/Poppins/Poppins-Medium.ttf"),
      "Poppins-600": require("./assets/fonts/Poppins/Poppins-SemiBold.ttf"),
      "Poppins-700": require("./assets/fonts/Poppins/Poppins-Bold.ttf"),
      "Poppins-800": require("./assets/fonts/Poppins/Poppins-ExtraBold.ttf"),
      "Poppins-900": require("./assets/fonts/Poppins/Poppins-Black.ttf"),
   });
   const onLayoutRootView = useCallback(async () => {
      if (fontsLoaded) {
         await SplashScreen.hideAsync();
      }
   }, [fontsLoaded]);

   if (!fontsLoaded) {
      return null;
   }

   return (
      <View onLayout={onLayoutRootView} style={{ flex: 1 }}>
         <NavigationContainer>
            <Stack.Navigator>
               <Stack.Screen
                  name="Login"
                  component={LoginScreen}
                  options={{ title: "Login" }}
               />
            </Stack.Navigator>
         </NavigationContainer>
      </View>
   );
}
