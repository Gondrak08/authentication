import {StyleSheet} from 'react-native';


export default StyleSheet.create({
    container:{
        flex: 1,

    },

    backgroundImage:{
        flex: 1,
        paddingTop: 10,
        paddingHorizontal: 24,
        resizeMode:"cover",
        alignSelf: 'stretch'
    },

    // userContainer:{
    //    flex: 1,
    //    position: 'absolute',
    //    width: 131,
    //    height: 81,
    //    left: 30,
    //    top: 41,

    // },
    
    avatar:{
        // position: "absolute",
        // width: 84,
        // height: 84,
        // left: 261,
        // top: 40,
        
        position: "absolute",
        width: 84,
        height: 84,
        left: 261,
        top: 40,
    },

   

    helloText:{
        position: "absolute",
        width: 131,
        height: 81,
        left: 40,
        top: 41,

        fontSize: 35,
        fontStyle: 'normal',
        lineHeight: 41,
    },

    userName:{
        fontSize: 34,
        fontWeight: "600",
        fontStyle: 'normal',
        lineHeight: 41,
    },

    description:{
        // position: 'absolute',
        flex:1,
        width: 304,
        height: 48,
        left: 20,
        top: 142,

        
        fontStyle: 'normal',
        fontWeight: '300',
        fontSize: 17,
        lineHeight: 24,

        color:  "#ffffff"
    },

    startButton:{
        width: 120,
        height: 36,
        left: 230,
        bottom: 60,
    },

    startText:{
        fontStyle: "normal",
        fontWeight: "800",
        fontSize: 24,
        lineHeight: 36,
        color:  "#ffffff"
    }


})