
import React, { Component, useEffect, useRef } from 'react';
import { 
  Dimensions, 
  Image,
  View,
  StyleSheet, 
  Animated,
  Text, 
  SafeAreaView,
  ImageBackground,
  Easing,
  requireNativeComponent} from 'react-native';


const windowWidth = Dimensions.get('window').width; 
const windowHeight = Dimensions.get('window').height;
  


export default function Loading2() {
    

    const Fadein1 = new Animated.Value(0);
    const Fadein2 = new Animated.Value(0);
    const where = useRef(new Animated.Value(-3000)).current;

    useEffect(() => {
    Animated.sequence([
        Animated.parallel([
            Animated.timing(Fadein1, {
                toValue: 100,
                duration: 2000,
                useNativeDriver: true,
              }),
            Animated.timing(
              where,{
                toValue: -2000,
                duration: 3000,
                useNativeDriver: true
            })
          ]),
          Animated.timing(Fadein2, {
            toValue: 100,
            duration: 30000,
            useNativeDriver: true,
          })

        ]).start();
      },[where,Fadein2,Fadein1]);
    


      setTimeout(() => {
         navigation.navigate('Quiz1');
       }, 30000);
   


    return (
        <View style = {styles.container}>
            <View>
            
                <Animated.Text 
                style={[
                    styles.explain,
                    {
                    opacity: Fadein2
                    }
                ]}>오직</Animated.Text> 
                
                <Animated.Text 
                style={[
                    styles.explain,
                    {
                    opacity: Fadein2
                    }
                ]}>당신의 캠핑에 필요한</Animated.Text>   

                <Animated.Text 
                style={[
                    styles.explain1,
                    {
                    opacity: Fadein2
                    }
                ]}>캠핑 스타터 키트          
                </Animated.Text>    
                
                <Animated.Text 
                style={[
                    styles.explain,
                    {
                    opacity: Fadein2
                    }
                ]}>를 구성하고 있습니다.</Animated.Text>   

                <Animated.Text 
                style={[
                    styles.explain2,
                    {
                    opacity: Fadein1
                    }
                ]}>_____________________</Animated.Text>   

            <Animated.Image 
                style={styles.backgroundimage,{
                transform: [{translateX: where}]
                }} 
                source={require("./assets/background.png")}>
            </Animated.Image>




            </View>

        </View>

    );

};


const styles =StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "#213063",
        flexDirection: "column-reverse"
    },

    backgroundimage:{
        resizeMode:"contain",
        alignSelf: "flex-end",
    },

    explain: {
        alignSelf: "flex-start",
        marginLeft:windowWidth/7,
        color: "white",
        fontSize: 25,
        marginTop: windowHeight/100,
    },

    explain1: {
        alignSelf: "flex-start",
        marginLeft:windowWidth/7,
        color: "white",
        fontWeight:'bold',
        fontSize: 28,
        marginTop:  windowHeight/100
    },
    explain2: {
        alignSelf: "flex-start",
        marginLeft: windowWidth/7,
        color: "white",
        fontWeight:'bold',
        fontSize: 28,
        marginTop: windowHeight/100,
        marginBottom: windowHeight/7
    }




})