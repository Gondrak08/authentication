import React, {useState} from 'react';
import { StyleSheet,ImageBackground, Text, View, Button, Linking, TouchableOpacity } from 'react-native';


import styles from './styles';
import BackgroundImage from '../../../assets/backgroundNature.jpg';

export default function Login(){

   const [signIn, setSignin] = useState(false);



   



    return(
        <View style={styles.container} >
            <ImageBackground source={BackgroundImage} style={styles.backgroundImage}>
            <Text style={styles.logoText} >Tt.</Text>

            <View style={styles.buttonContainer} >
                {/* <Button style={styles.buttonRed}
                    onPress={()=>{}}
                    title="Sign in"
                    color="#E85C4B"
                />
                <Button style={styles.buttonBlack}
                    onPress={()=>{}}
                    title="Create an account"
                    color="#09354B"
                /> */}
                <TouchableOpacity style={styles.buttonSign}
                    onPress={()=>{}}
                > 
                    <Text style={styles.buttonText} >Sing in </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonCreate}
                    onPress={()=>{}}
                    
                >
                    <Text style={styles.buttonTextCreate} >Create account</Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity  style={styles.buttonSkip} onPress={()=>{}}>
                <Text style={styles.textSkip} >
                    Skip
                </Text>
            </TouchableOpacity>
            
            </ImageBackground>
        </View>
    )
}