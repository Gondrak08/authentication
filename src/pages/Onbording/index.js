import React from 'react';
import {View, Text,ImageBackground, TouchableOpacity, Image } from 'react-native';

import styles from './styles';

import BackgroundImage from '../../../assets/backgroundNature.jpg';
import AvatarUser from '../../../assets/Avatar.png';

export default function Onbording(){
    return(
        
            <ImageBackground source={BackgroundImage} style={styles.backgroundImage}>

              
                   
                        <Text style={styles.helloText} >
                            Hello, 
                            <Text style={styles.userName} >
                                {''} Avatar
                            </Text>
                        </Text>
                    
                    <Image source={AvatarUser} style={styles.avatar} />

                    <Text 
                        style={styles.description}
                        >
                        Verão. Venha caminhar pelas montanhas da Chapada Diamantina e conhecer os seus segredos.
                    </Text>

                   <View>

                   </View>

                    <TouchableOpacity onPress={()=>{}}  style={styles.startButton}  >
                            <Text style={styles.startText} >Start Tour </Text>
                    </TouchableOpacity>

            </ImageBackground>
             
      
    )
}