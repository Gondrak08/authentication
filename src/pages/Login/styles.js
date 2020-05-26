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
        top: 1,

        fontFamily:"Roboto",
        fontStyle:"normal",
        fontWeight:"800",

        fontSize: 18,
        lineHeight: 23,
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
        top: 45,
        marginHorizontal:155,
        width: 50,
        height: 44,  

    },
   
    textSkip:{
        fontFamily: 'Roboto',
        fontStyle: "normal",
        fontWeight: "300",
        fontSize: 15,
        lineHeight: 24,
        color: "#ffffff",
        left: 11,
        top: 10,
       
    },


    //SignIn

    singInWindow:{
        flex:1,
        justifyContent: 'space-evenly',
        
        maxHeight:235,
        minWidth: 295,
        marginTop:370,
        paddingVertical: 5,
    },



    userInput:{
        maxHeight: 55,
        backgroundColor: "#084d70",
        padding:15,
        borderRadius: 5,

        width: 295,
        height:135,
        left: 40,
        top: 40,

        borderColor:'grey',
       
        borderWidth: 1
        


    },

    buttonSend:{
        
            maxHeight: 55,
            backgroundColor: "white",
            padding:15,
            borderRadius: 5,
            width: 295,
            height: 135,
            left: 40,
            top: 40,
    
           


    },

    buttonSendText:{
        width:"100%",
        height: 25,
        left: 85,
        top: 2,

        fontFamily:"Roboto",
        fontStyle:"normal",
        fontWeight:"800",

        fontSize: 18,
        lineHeight: 24,
        color:"#008329"
    },

    buttonBack:{
        
        top: 40,
        marginHorizontal:155,
        width: 50,
        height: 44,



    }

})