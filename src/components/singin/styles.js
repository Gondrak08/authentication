    import {StyleSheet} from 'react-native';

    export default StyleSheet.create({

        
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
    
    