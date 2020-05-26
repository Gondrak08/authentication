import React, {useState, useEffect} from 'react';
import {ImageBackground, Text, TextInput, View, TouchableOpacity} from 'react-native';

import styles from './styles';
import BackgroundImage from '../../../assets/backgroundNature.jpg';

import {MaterialIcons} from "@expo/vector-icons";

export default function CreateAccount({navigation}){

    return(
        <>
        <View style={styles.container} >
        <TextInput 
          style={styles.acc}
          underlineColorAndroid="transparent"
          placeholder="Name "
          onChangeText={()=>{}}
          defaultValue={()=>{}}
          placeholderTextColor="black"
          numberOfLines={20}
          multiline={true}
        /> 
        <TextInput 
          style={styles.acc}
          underlineColorAndroid="transparent"
          placeholder="email "
          onChangeText={()=>{}}
          defaultValue={()=>{}}
          placeholderTextColor="black"
          numberOfLines={20}
          multiline={true}
        /> 
        <TextInput 
             style={styles.acc} 
             underlineColorAndroid="transparent"
             placeholder="chose a password"
             onChangeText={()=>{}}
             defaultValue={()=>{}}
             placeholderTextColor="black"
             numberOfLines={20}
             multiline={true}
            
        />
          
        <TouchableOpacity 
        style={styles.accButton}
        onPress={()=>{}} > 
            <Text  
                style={{fontFamily:'Roboto', fontStyle:'normal',fontWeight:"800",
                fontSize: 18, color:"white", left: 60,
            }}
            > 
                Create Account 
            </Text>
        </TouchableOpacity>
    </View>

    <TouchableOpacity  
    style={styles.backButton}
    onPress={()=>{navigation.push('Login')}}>
        <MaterialIcons name="arrow-back" size={40} color="white" style={{lineHeight:50, left: 10 }} />
    </TouchableOpacity>
        </>
   ) 
}