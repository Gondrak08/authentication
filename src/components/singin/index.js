import React,{useState} from 'react';
import {View, TextInput, TouchableOpacity, Text, Linking } from 'react-native';
import {MaterialIcons} from '@expo/vector-icons';

import styles from './styles';


import Login from '../../pages/Login/index'

export default function SignIn({navigation}){
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    // const [signIn, setSignin] = useState(false);
    
   
    return(
        <>
                <View style={styles.singInWindow } >
                    <TextInput style={styles.userInput}
                      underlineColorAndroid="transparent"
                      placeholder="Username or Email "
                      onChangeText={user=> setUser(user)}
                      defaultValue={user}
                      placeholderTextColor="white"
                      numberOfLines={20}
                      multiline={true}
                    /> 
                    <TextInput style={styles.userInput} 
                         underlineColorAndroid="transparent"
                         placeholder="Password"
                         onChangeText={password => setPassword(password)}
                         defaultValue={password}
                         placeholderTextColor="white"
                         numberOfLines={20}
                         multiline={true}
                        
                    />
                      
                    <TouchableOpacity style={styles.buttonSend } onPress={()=>{}} > 
                        <Text style={styles.buttonSendText } > Sing Up </Text>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity  style={styles.buttonBack} onPress={()=>  navigation.push('Login') }>
                    <MaterialIcons name="arrow-back" size={40} color="white" style={{lineHeight:50, left: 10 }} />
                </TouchableOpacity>
        </>
    
    );
}