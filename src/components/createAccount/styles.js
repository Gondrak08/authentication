import {StyleSheet} from 'react-native';

export default  StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'space-evenly',

        maxHeight: 345,
        minWidth: 300,
        marginTop: 250,
        paddingVertical: 5,
    },

    acc:{
        maxHeight: 55,
        backgroundColor: "white",
        padding:15,
        borderRadius: 5,

        width: 295,
        height:135,
        left: 40,
        top: 40,
        borderColor:'grey',
        borderWidth: 1
    },

    accButton:{
        maxHeight: 55,
        backgroundColor: "#084d70",
        padding:15,
        borderRadius: 5,
        width: 295,
        height: 135,
        left: 40,
        top: 30,
    },

    backButton:{
        
        top: 40,
        marginHorizontal:155,
        width: 50,
        height: 44,
    }
})