import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({

    container:{
        flex:1,
        justifyContent:'center',
        alignItems: 'center',
    },
    input: {  
        height: 50,
        width: 300,
        borderBottomWidth: 1,
    },
    text:{       
        justifyContent:'center',
        alignItems: 'center',
        fontSize: 25,
        fontFamily: theme.fonts.title700
    },
    subtitle: {
        justifyContent:'center',
        alignItems: 'center',
        fontSize: 12,
        fontFamily: theme.fonts.text400
    },
    imageBackgorund:{
        flex:1,
        justifyContent: "center"
    }

})