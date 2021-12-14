import React from "react";
import { View, Text, ImageBackground } from "react-native";
import { styles } from "./styles";
import imgbackground from "../../../assets/imgbackground.png";
import { AntDesign, Entypo } from "@expo/vector-icons";

import { RootScreen } from "../../@types/routes";

const Home: RootScreen<"Home"> = ({ navigation }) => {
  return (
    <>
      <ImageBackground source={imgbackground} style={styles.imageBackgorund}>
        <View>
          <AntDesign
            name="user"
            size={80}
            color="black"
            style={styles.iconUser}
            onPress={() => navigation.navigate("Perfil")}
          />
          <Text style={styles.textPerfil}>Perfil</Text>

          <AntDesign
            name="enviromento"
            size={80}
            color="black"
            style={styles.iconLocation}
            onPress={() => navigation.navigate("Denuncia")}
          />

          <Text style={styles.textDenuncia}>Denúncia</Text>

          <Entypo
            name="chat"
            size={80}
            color="black"
            style={styles.iconForum}
            onPress={() => navigation.navigate("Forum")}
          />
          <Text style={styles.textForum}>Forum</Text>
        </View>
      </ImageBackground>
    </>
  );
};
export default React.memo(Home);
