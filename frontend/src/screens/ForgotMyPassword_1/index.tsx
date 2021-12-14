import React from "react";
import {
  View,
  Text,
  TextInput,
  SafeAreaView,
  ImageBackground,
} from "react-native";
import { styles } from "./styles";
import imgbackground from "../../../assets/imgbackground.png";
import { Button } from "../../components/Button";

import { RootScreen } from "../../@types/routes";

const ForgotMyPassword_1: RootScreen<"ForgotMyPassword_1"> = ({
  navigation,
}) => {
  return (
    <>
      <ImageBackground source={imgbackground} style={styles.imageBackgorund}>
        <View style={styles.container}>
          <Text style={styles.text}>Problemas para entrar?</Text>
          <Text style={styles.subtitle}>
            Insira o seu email e enviaremos um link {"\n"}
            para você voltar a acessar a sua conta.
          </Text>
          <Text>{"\n"}</Text>

          <SafeAreaView>
            <TextInput style={styles.input} placeholder="Email" />

            <Text>{"\n"}</Text>
          </SafeAreaView>

          <Button title="Enviar" activeOpacity={0.7} />
          <Text>{"\n"}</Text>

          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View style={{ flex: 1, height: 1, backgroundColor: "black" }} />
            <View>
              <Text style={{ width: 50, textAlign: "center" }}>OU</Text>
            </View>
            <View style={{ flex: 1, height: 1, backgroundColor: "black" }} />
          </View>
          <Text>{"\n"}</Text>
          <Text
            style={styles.subtitle}
            onPress={() => navigation.navigate("SignIn")}
          >
            Voltar ao login
          </Text>
        </View>
      </ImageBackground>
    </>
  );
};
export default React.memo(ForgotMyPassword_1);
