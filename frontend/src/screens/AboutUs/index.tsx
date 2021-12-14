import React from "react";
import {
  View,
  Text,
  ImageBackground,
  Image,
} from "react-native";
import { styles } from "./styles";
import imgbackground from "../../../assets/imgbackground.png";


const AboutUs: React.FC = () => {

  return (
    <>
      <ImageBackground source={imgbackground} style={styles.imageBackgorund}>

        <View>

            <Image
            source={require('../../../assets/watermind-logo.png')}
            style={styles.watermindLogo}
            />
            <Text>{'\n'}</Text>
            <Text style={styles.text}>Sobre nós</Text>
            <Text style={styles.subtitle}>
              Texto explicativo sobre o aplicativo e o nosso trabalho
            </Text>

        </View>
        
      </ImageBackground>
    </>
  );
}
export default React.memo(AboutUs);