import {StyleSheet} from 'react-native';
import Constants from 'expo-constants';
import { Children } from 'react';

export default StyleSheet.create({
    container:{
        flex:1,

        alignItems:'center',
        justifyContent:'space-around',
    },
    backgroundImage:{
        flex: 1,
        paddingTop: 10,
        paddingHorizontal: 24,
        resizeMode:"cover",
        alignSelf: 'stretch'
    },
    logoText:{
        alignSelf: 'flex-start',
        position: "absolute",
        top: 13,
        width: 65,
        left: 31,
        height: 96,
        marginTop: 15,
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize:50,
        lineHeight: 96,
        color: "#FFFFFF",
        // fontSize: 60,
        // lineHeight: 96,

    },
    
    buttonContainer:{
        flex:1,
        justifyContent: 'space-between',
        
        maxHeight:135,
        minWidth: 295,
        marginTop:450,
        paddingVertical: 5,

    },

   buttonSign:{
        maxHeight: 55,
        backgroundColor: '#E85C4B',
        padding:15,
        borderRadius: 5,
        
        // borderColor: '#ddd',
        // borderBottomWidth: 0,
        // shadowColor: '#000',
        // shadowOffset: { width: 0, height: 2 },
        // shadowOpacity: 0.8,
        // shadowRadius: 2,

        width: 295,
        height: 135,
        left: 40,
        top: 40,

    },

    buttonCreate:{
        maxHeight: 55,
        backgroundColor: '#09354B',
        padding:15,
        borderRadius: 5,

        width: 295,
        height:135,
        left: 40,
        top: 40,
    },




    buttonText:{
        
        width: 74,
        height: 24,
        left: 100,
        top: 2,

        fontFamily:"Roboto",
        fontStyle:"normal",
        fontWeight:"800",

        fontSize: 18,
        lineHeight: 24,
        color: "#ffffff"
    },

    buttonTextCreate:{
        width: 154,
        height: 24,
        left: 75,
        top: 2,

        fontFamily:"Roboto",
        fontStyle:"normal",
        fontWeight:"600",

        fontSize: 16,
        lineHeight: 24,
        color: "#ffffff"
    },


    buttonSkip:{
        // paddingBottom: 5,
        top: 100,
        marginHorizontal:150,
        width: 31,
        height: 24,

    },
   
    textSkip:{
        fontFamily: 'Roboto',
        fontStyle: "normal",
        fontWeight: "300",
        fontSize: 14,
        lineHeight: 24,
        color: "#ffffff",
        left: 15,
        bottom:25,
    }

})