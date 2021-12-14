import React, { useState, useEffect } from "react";
import { View, Text, TextInput, ImageBackground } from "react-native";
import imgbackground from "../../../assets/imgbackground.png";

import { Button } from "../../components/Button";
import { styles } from "./styles";

import { RootScreen } from "../../@types/routes";
import { useDenuncia, useCurrentUser } from "../../hooks";

import api from "../../../service/api";

const Denuncia3: RootScreen<"Denuncia3"> = ({ navigation }) => {
  const currentDescricao = useDenuncia();
  const currentFinallyDenuncia = useDenuncia();
  const currerntUser = useCurrentUser();
  const [text, setText] = useState("");

  function finallyDenuncia() {
    var date = new Date().getDate();
    var month = new Date().getMonth() + 1;
    var year = new Date().getFullYear();
    var data = date + "-" + month + "-" + year; //format: dd-mm-yyyy;
    currentFinallyDenuncia.Denuncia.data = data;

    currentDescricao.Denuncia.descricao = text;

    var hora = new Date().getHours();
    var minutos = new Date().getMinutes();
    var time = hora + ":" + minutos;
    currentFinallyDenuncia.Denuncia.hora = time;

    api
      .post("add_denuncia", {
        cpf: currerntUser.currentUser.cpf,
        lat: currentFinallyDenuncia.Denuncia.latitude,
        lon: currentFinallyDenuncia.Denuncia.logitude,
        desc: currentFinallyDenuncia.Denuncia.descricao,
        data: currentFinallyDenuncia.Denuncia.data,
        time: currentFinallyDenuncia.Denuncia.hora,
      })
      .then(() => {
        console.log("dados inseridos");
        navigation.navigate("finallyDenuncia");
      });
  }

  return (
    <>
      <ImageBackground source={imgbackground} style={styles.imageBackgorund}>
        <View>
          <Text style={styles.text}>Descrição da denúncia</Text>
          <Text>{"\n"}</Text>

          <TextInput
            multiline={true}
            numberOfLines={4}
            value={text}
            onChangeText={(value) => setText(value)}
            placeholder={"Descrição denúncia"}
            style={{
              borderColor: "black",
              backgroundColor: "white",
              borderRadius: 20,
              marginLeft: 20,
              marginRight: 20,
              paddingBottom: 120,
              paddingLeft: 10,
              paddingRight: 10,
            }}
          />
          <Text>{"\n"}</Text>
          <View style={{ alignItems: "center" }}>
            <Button title="Finalizar denúncia" onPress={finallyDenuncia} />
          </View>
        </View>
      </ImageBackground>
    </>
  );
};
export default React.memo(Denuncia3);
