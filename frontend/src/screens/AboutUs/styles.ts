import {StyleSheet} from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({

    imageBackgorund:{
        flex:1,
        justifyContent: 'center',
        alignItems:'center'
    },
    watermindLogo:{
        width: 257.41,
        height: 67.74,
        marginTop: -325,
        marginLeft: 63,
        marginRight:63
    },
    text:{
        textAlign: 'center',
        alignItems: 'center',
        fontFamily: theme.fonts.title700,
        fontSize: 30,
    },
    subtitle:{
        textAlign: 'center',
        alignItems: 'center',
        fontFamily: theme.fonts.text400,
        fontSize: 18,
    }

})