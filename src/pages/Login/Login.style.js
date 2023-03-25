import {Dimensions, StyleSheet} from 'react-native';

export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#64b5f6',
    },
    logo_container:{
        flex:1,
        justifyContent:'center',
    },
    body_container:{
        flex:1,
    },
    logo:{
        width:Dimensions.get('window').width,
        height:Dimensions.get('window').height/3,
        resizeMode: 'contain',
        alignSelf: 'center',
        tintColor: 'white',
    }
})