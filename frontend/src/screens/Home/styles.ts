import {StyleSheet} from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({

    imageBackgorund:{
        flex:1,
        justifyContent: 'center',
        alignItems:'center'
    },
    textPerfil:{
       marginBottom: 50,
       fontFamily: theme.fonts.text500,
       fontSize: 25,
       textAlign: 'center'
        
    },
    textDenuncia:{
        marginBottom: 50,
        fontFamily: theme.fonts.text500,
        fontSize: 25,
        textAlign: 'center',
    },
    textForum:{
        marginBottom: 50,
        fontFamily: theme.fonts.text500,
        fontSize: 25,
        textAlign: 'center'
    },
    iconUser:{
        alignSelf:'center',
        backgroundColor:'#C7ECFA',
        padding:20,
        borderRadius: 20
    },
    iconLocation:{
        alignSelf:'center',
        backgroundColor:'#C7ECFA',
        padding:20,
        borderRadius: 20
    },
    iconForum:{
        alignSelf:'center',
        backgroundColor:'#C7ECFA',
        padding:20,
        borderRadius: 20
    },
    text:{
        marginBottom: 50,
        fontSize: 30,
        fontFamily: theme.fonts.title700,

    },

})