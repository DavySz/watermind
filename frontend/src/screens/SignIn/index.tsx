import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  SafeAreaView,
  ImageBackground,
} from "react-native";
import imgbackground from "../../../assets/imgbackground.png";

import { Button } from "../../components/Button";
import api from "../../../service/api";
import { styles } from "./styles";

import { useCurrentUser } from "../../hooks";

import { RootScreen } from "../../@types/routes";

const SignIn: RootScreen<"SignIn"> = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  var currentUser = useCurrentUser();

  function autenticar() {
    api
      .post("login", {
        e: email,
        s: senha,
      })
      .then((response) => {
        if (Object(response.data).length > 0) {
          api
            .get(`user/${email}`)
            .then((res) => {
              currentUser.currentUser.cpf = res.data[0].cpf;
              currentUser.currentUser.nome = res.data[0].nome;
              currentUser.currentUser.email = res.data[0].email;
              currentUser.currentUser.senha = res.data[0].senha;

              navigation.navigate("Home");
            })
            .catch((err) => [console.log(err)]);
        } else {
          alert("Email ou Senha incorreta!");
        }
      });
  }

  return (
    <>
      <ImageBackground source={imgbackground} style={styles.imageBackgorund}>
        <View style={styles.container}>
          <Text style={styles.text}>Login</Text>
          <Text>{"\n"}</Text>

          <View>
            <TextInput
              style={styles.input}
              placeholder="Email"
              value={email}
              onChangeText={(value) => setEmail(value)}
            />

            <Text>{"\n"}</Text>

            <TextInput
              style={styles.input}
              secureTextEntry={true}
              placeholder="Senha"
              value={senha}
              onChangeText={(value) => setSenha(value)}
            />
          </View>

          <Text>{"\n"}</Text>
          <Text
            style={styles.subtitle}
            onPress={() => navigation.navigate("ForgotMyPassword_1")}
          >
            Esqueci minha senha
          </Text>
          <Text>{"\n"}</Text>
          <Button title="Entrar" activeOpacity={0.7} onPress={autenticar} />
          <Text>{"\n"}</Text>
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.subtitle}>Você é novo por aqui?</Text>
            <Text onPress={() => navigation.navigate("Register")}>
              {" "}
              REGISTRE-SE
            </Text>
          </View>
        </View>
      </ImageBackground>
    </>
  );
};
export default React.memo(SignIn);
