import React, { useEffect } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

import { Button } from "../../components/Button";
import { theme } from "../../global/styles/theme";
import { styles } from "./styles";

import { RootScreen } from "../../@types/routes";

const InitialRouter: RootScreen<"InitialRouter"> = ({ navigation }) => {
  return (
    <View
      style={{
        backgroundColor: "#C7ECFA",
        flex: 1,
        paddingTop: 200,
      }}
    >
      <Image
        source={require("../../../assets/icon.png")}
        style={{
          height: 250,
          width: 250,
          alignSelf: "center",
        }}
      />
      <Text style={{ alignSelf: "center" }}>Bem vindo ao watermind!</Text>
      <Text>{"\n"}</Text>
      <View
        style={{
          alignItems: "center",
        }}
      >
        <Button
          title={"ENTRAR"}
          onPress={() => navigation.navigate("SignIn")}
        />

        <Text>{"\n"}</Text>

        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => navigation.navigate("Register")}
          style={styles.button}
        >
          <Text
            style={{
              color: theme.colors.heading,
              fontSize: 15,
              textAlign: "center",
              fontFamily: theme.fonts.text500,
            }}
          >
            CADASTRAR
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default React.memo(InitialRouter);
