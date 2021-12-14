import React from "react";
import { styles } from "./styles";
import { View, Text, TouchableOpacity } from "react-native";

import { RootScreen } from "../../@types/routes";
import { AntDesign, FontAwesome5 } from "@expo/vector-icons";
import { useCurrentUser } from "../../hooks/useCurrentUser";

const Perfil: RootScreen<"Perfil"> = ({ navigation }) => {
  const { currentUser } = useCurrentUser();
  return (
    <>
      <View style={styles.container}>
        <View style={styles.userInformation}>
          <View>
            <FontAwesome5
              name="user-alt"
              size={50}
              color="white"
              style={{
                backgroundColor: "#9ABECB",
                borderRadius: 20,
                padding: 20,
                marginLeft: -40,
              }}
            />
          </View>

          <View style={{ marginTop: 20 }}>
            <Text style={styles.textnome}>{currentUser.nome}</Text>
            <Text style={styles.textemail}>{currentUser.email}</Text>
          </View>
        </View>

        <TouchableOpacity style={styles.Button} activeOpacity={0.7}>
          <Text style={styles.textButton}>Editar perfil</Text>
          <AntDesign
            name="edit"
            size={20}
            color="red"
            style={{
              backgroundColor: "white",
            }}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.Button}
          activeOpacity={0.7}
          onPress={() => navigation.navigate("InitialRouter")}
        >
          <Text style={styles.textButton}>Sair</Text>
          <AntDesign
            name="logout"
            size={20}
            color="red"
            style={{
              backgroundColor: "white",
            }}
          />
        </TouchableOpacity>
      </View>
    </>
  );
};
export default React.memo(Perfil);
