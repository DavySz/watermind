import React from "react";
import { View, Text, ImageBackground } from "react-native";
import { styles } from "./styles";
import imgbackground from "../../../assets/imgbackground.png";

import { RootScreen } from "../../@types/routes";
import { Entypo } from "@expo/vector-icons";

const Forum: RootScreen<"Forum"> = ({ navigation }) => {
  return (
    <>
      <ImageBackground source={imgbackground} style={styles.imageBackgorund}>
        <View
          style={{
            alignContent: "center",
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <Text>Em desenvolvimento </Text>
          <Entypo name="code" size={24} color="black" />
        </View>
      </ImageBackground>
    </>
  );
};
export default React.memo(Forum);
