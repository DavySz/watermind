import React from "react";
import { View } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import { createStackNavigator } from "@react-navigation/stack";
import { RootStackParamList } from "../@types/routes";

import Home from "../screens/Home";
import Forum from "../screens/Forum";
import Perfil from "../screens/Perfil";
import SignIn from "../screens/SignIn";
import AboutUs from "../screens/AboutUs";
import Register from "../screens/Register";
import Denuncia from "../screens/Denuncia";
import Denuncia2 from "../screens/Denuncia2";
import Denuncia3 from "../screens/Denuncia3";
import InitialRouter from "../screens/InitialRouter";
import ForgotMyPassword_1 from "../screens/ForgotMyPassword_1";
import finallyDenuncia from "../screens/finallyDenuncia";

const Stack = createStackNavigator<RootStackParamList>();

export const AuthRoutes = () => {
  return (
    <Stack.Navigator
      initialRouteName="InitialRouter"
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: "transparent" },
      }}
    >
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: true,
          title: "watermind",
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "#1893f8",
          },
          headerRight: () => (
            <View style={{ flexDirection: "row", margin: 15 }}>
              <AntDesign name="setting" size={40} color="black" />
            </View>
          ),
        }}
      />

      <Stack.Screen
        name="Denuncia"
        component={Denuncia}
        options={{
          headerShown: true,
          title: "Denúncia",
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "#1893f8",
          },
        }}
      />

      <Stack.Screen
        name="Denuncia2"
        component={Denuncia2}
        options={{
          headerShown: true,
          title: "Denúncia",
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "#1893f8",
          },
        }}
      />

      <Stack.Screen
        name="Denuncia3"
        component={Denuncia3}
        options={{
          headerShown: true,
          title: "Denúncia",
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "#1893f8",
          },
        }}
      />

      <Stack.Screen name="InitialRouter" component={InitialRouter} />

      <Stack.Screen
        name="Perfil"
        component={Perfil}
        options={{
          headerShown: true,
          title: "",
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "#1893f8",
          },
          headerRight: () => (
            <View style={{ flexDirection: "row", margin: 15 }}>
              <AntDesign name="setting" size={40} color="black" />
            </View>
          ),
        }}
      />

      <Stack.Screen name="SignIn" component={SignIn} />

      <Stack.Screen name="finallyDenuncia" component={finallyDenuncia} />

      <Stack.Screen name="Register" component={Register} />

      <Stack.Screen name="ForgotMyPassword_1" component={ForgotMyPassword_1} />

      <Stack.Screen name="AboutUs" component={AboutUs} />

      <Stack.Screen
        name="Forum"
        component={Forum}
        options={{
          headerShown: true,
          title: "Forum",
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "#1893f8",
          },
        }}
      />
    </Stack.Navigator>
  );
};
