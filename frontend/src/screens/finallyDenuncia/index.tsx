import React from "react";
import { View, Text, ImageBackground } from "react-native";
import { styles } from "./styles";
import imgbackground from "../../../assets/imgbackground.png";
import { AntDesign, Entypo } from "@expo/vector-icons";

import { RootScreen } from "../../@types/routes";

const finallyDenuncia: RootScreen<"Home"> = ({ navigation }) => {
  return (
    <>
      <ImageBackground source={imgbackground} style={styles.imageBackgorund}>
        <View>
          <AntDesign
            name="leftcircleo"
            size={80}
            color="black"
            style={styles.iconLocation}
            onPress={() => navigation.navigate("Home")}
          />

          <Text style={styles.textDenuncia}>Home</Text>
        </View>
      </ImageBackground>
    </>
  );
};
export default React.memo(finallyDenuncia);
