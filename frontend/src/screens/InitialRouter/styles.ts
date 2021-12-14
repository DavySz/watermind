import {StyleSheet} from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({

    imageBackgorund:{
        flex:1,
        justifyContent: 'center',
        alignItems:'center'
    },
    container: {
        flex:1,
        justifyContent: 'center',
        
    },
    button: {
        width:'70%',
        height: 56,
        backgroundColor: theme.colors.background,
        borderColor:theme.colors.buttonColor,
        borderRadius: 20,
        alignItems:'center',
        justifyContent: 'center',
        borderWidth:4,
        margin:-15
     
    }
    

})