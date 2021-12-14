import React, { useState } from "react";
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
import api from "../../../service/api";

import { RootScreen } from "../../@types/routes";

const Register: RootScreen<"Register"> = ({ navigation }) => {
  const [cpf, setCpf] = useState("");
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  function salvar() {
    api
      .post("add_m_usuario", {
        c: cpf,
        n: nome,
        e: email,
        s: senha,
      })
      .then(() => {
        console.log("dados inseridos");
        navigation.navigate("SignIn");
      });
  }

  return (
    <>
      <ImageBackground source={imgbackground} style={styles.imageBackgorund}>
        <View style={styles.container}>
          <Text style={styles.text}>Cadastro</Text>
          <Text>{"\n"}</Text>
          <SafeAreaView>
            <TextInput
              style={styles.input}
              placeholder="C.P.F."
              keyboardType="number-pad"
              value={cpf}
              onChangeText={(value) => setCpf(value)}
            />

            <Text>{"\n"}</Text>

            <TextInput
              style={styles.input}
              placeholder="Nome de usuário"
              value={nome}
              onChangeText={(value) => setNome(value)}
            />

            <Text>{"\n"}</Text>

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
          </SafeAreaView>
          <Text>{"\n"}</Text>
          <Button title="Cadastrar" activeOpacity={0.7} onPress={salvar} />
          <Text>{"\n"}</Text>
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.subtitle}>Tem uma conta? </Text>
            <Text onPress={() => navigation.navigate("SignIn")}>
              CONECTE-SE
            </Text>
          </View>
        </View>
      </ImageBackground>
    </>
  );
};
export default React.memo(Register);
