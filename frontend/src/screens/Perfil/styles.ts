import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({

    imageBackgorund:{
        flex:1,
        justifyContent: 'center',
        alignItems:'center'
    },
    container:{
       flex:1,
       backgroundColor:'#C7ECFA'
    },
    userInformation:{
        backgroundColor:"#C7ECFA",
        flexDirection:"row",
        marginTop: 0,
        padding: 45,
        borderRadius: 20,       
    },
    textnome:{
        color:'red',
        marginLeft:10,
        fontSize: 24
        
    },
    textemail:{
        color:'green',
        marginLeft:10,
        fontSize: 12,
        
    },
    Button:{
        backgroundColor:'white',
        flexDirection: 'row',
        borderRadius: 20,
        marginTop:5,
        marginLeft:5,
        marginRight:5,
        padding:15,
    },
    textButton:{
        flex:1,
        textAlign:'center'
    }


})