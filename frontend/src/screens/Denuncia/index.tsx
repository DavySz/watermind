import React, { useState, useEffect } from "react";
import { StyleSheet, View, Dimensions } from "react-native";

import { AntDesign } from "@expo/vector-icons";
import * as Location from "expo-location";
import MapView from "react-native-maps";

import { RootScreen } from "../../@types/routes";
import { useDenuncia } from "../../hooks";

const Denuncia: RootScreen<"Denuncia"> = ({ navigation }) => {
  const [errorMsg, setErrorMsg] = useState({});
  const currentLocation = useDenuncia();
  const [region, setRegion] = useState({
    latitude: 1,
    longitude: 1,
    latitudeDelta: 1,
    longitudeDelta: 1,
  });
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setRegion({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.0014,
        longitudeDelta: 0.0014,
      });

      currentLocation.Denuncia.latitude = location.coords.latitude.toString();
      currentLocation.Denuncia.logitude = location.coords.longitude.toString();
    })();
  }, []);

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        region={region}
        showsUserLocation={true}
        zoomEnabled={false}
        loadingEnabled={true}
      />

      <View style={{ flexDirection: "row" }}>
        <AntDesign
          name="close"
          size={80}
          color="#b8ed37"
          style={{
            backgroundColor: "#1893f8",
            alignSelf: "flex-start",
            paddingRight: 130,
          }}
          onPress={() => navigation.navigate("Home")}
        />

        <AntDesign
          name="check"
          size={80}
          color="#b8ed37"
          style={{
            backgroundColor: "#1893f8",
            alignSelf: "flex-end",
            paddingLeft: 130,
          }}
          onPress={() => {
            navigation.navigate("Denuncia2");
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 140,
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});

export default React.memo(Denuncia);
