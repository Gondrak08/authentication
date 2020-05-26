import React, {useState} from 'react';
import {ImageBackground, Text, View, TouchableOpacity} from 'react-native';


import styles from './styles';
import BackgroundImage from '../../../assets/backgroundNature.jpg';

import SignIn from '../../components/singin/index';
import CreateAccount from '../../components/createAccount/index';



export default function Login({navigation}){

    const [signIn, setSignin] = useState(false);
    const [createAcc, setCreateAcc] = useState(false);

    function singInButton(e){
         e.preventDefault(e);
         setSignin(true);
        
    }
    function createAccButton(e){
        e.preventDefault(e);
        setCreateAcc(true);
    }
 
   


       return(
           
           <View style={styles.container} >
               <ImageBackground source={BackgroundImage} style={styles.backgroundImage}>
               <Text style={styles.logoText} >Tt.</Text>

                        {
                          signIn ? <SignIn navigation={navigation} /> :
                          createAcc ? <CreateAccount navigation={navigation} /> : (
                                    <>
                                    <View style={styles.buttonContainer} >
                                                
                                    <TouchableOpacity style={styles.buttonSign} screenName="Login"
                                        onPress={(e)=>{singInButton(e)}}
                                    > 
                                        <Text style={styles.buttonText} >Sing in </Text>
                                    </TouchableOpacity>
                        
                                    <TouchableOpacity style={styles.buttonCreate}
                                        onPress={(e)=>{createAccButton(e)}}
                                        
                                    >
                                        <Text style={styles.buttonTextCreate} >Create account</Text>
                                    </TouchableOpacity>
                                </View>
                        
                                <TouchableOpacity  style={styles.buttonSkip} onPress={()=>{navigation.navigate('Onbording')}}>
                                    <Text style={styles.textSkip} >
                                        Skip
                                    </Text>
                                </TouchableOpacity>
                                </>
                        )
                        }

                   
               </ImageBackground>
           </View>
       )

   }



