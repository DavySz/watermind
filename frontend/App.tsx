import React from "react";
import {
  Rajdhani_500Medium,
  Rajdhani_700Bold,
} from "@expo-google-fonts/rajdhani";
import { Inter_400Regular, Inter_500Medium } from "@expo-google-fonts/inter";
import { StatusBar } from "expo-status-bar";
import AppLoading from "expo-app-loading";
import { Routes } from "./src/routes";
import { useFonts } from "expo-font";

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Rajdhani_500Medium,
    Rajdhani_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <>
      <StatusBar style="auto" />
      <Routes />
    </>
  );
}
