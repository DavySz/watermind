import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({

    container:{
        width:'70%',
        height: 56,
        backgroundColor: theme.colors.buttonColor,
        borderRadius: 20,
        alignItems:'center',
        justifyContent: 'center',
        
    },
    title:{
        color: theme.colors.heading,
        fontSize: 15,
        textAlign: 'center',
        fontFamily: theme.fonts.text500
    }

});