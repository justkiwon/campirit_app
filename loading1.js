import { StatusBar } from 'expo-status-bar';
import { render } from 'react-dom';
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
export default function App() {



    const Fadein1 = new Animated.Value(0);
    const Fadein2 = new Animated.Value(0);
    const where = useRef(new Animated.Value(0)).current;

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
              toValue: -200,
              duration: 2000,
              useNativeDriver: true
          })
        ]),
      Animated.timing(Fadein2, {
        toValue: 100,
        duration: 30000,
        useNativeDriver: true,
      })
      ]).start();
    },[where,Fadein1,Fadein2]);



  return (   
   
    <View style = {styles.container}>
        <View>
          <View style = {styles.for_test} >
            <Animated.Text 
              style={[
                styles.explain,
                {
                  opacity: Fadein1
                }
            ]}>혼자 떠나는 당신</Animated.Text>
            <Animated.Text 
              style={[
                styles.explain,
                {
                  opacity: Fadein1
                }
            ]}>차에서 자는 당신</Animated.Text>
                        <Animated.Text 
              style={[
                styles.explain,
                {
                  opacity: Fadein1
                }
            ]}>감성을 추구하는 당신</Animated.Text>
            <Animated.Text 
              style={[
                styles.explain,
                {
                  opacity: Fadein1
                }
            ]}>요리를 하고 싶은</Animated.Text>
            <Animated.Text 
              style={[
                styles.explain2,
                {
                  opacity: Fadein2
                }
            ]}>그런 당신을 위한</Animated.Text>
            <Animated.Text 
              style={[
                styles.explain3,
                {
                  opacity: Fadein2
                }
            ]}>캠핑 스타터 키트 물품</Animated.Text>
            <Animated.Text 
              style={[
                styles.explain4,
                {
                  opacity: Fadein2
                }
            ]}>을 추리고 있습니다.</Animated.Text>

          </View>
          <Animated.Image
                  style={styles.backgroundimage,{
                    transform: [{translateX: where}]
                  }} 
                  source={require ("./assets/background3.png")}>
          </Animated.Image>

          <Image 
              style= {styles.percentagebar}
              source={require("./assets/PercentageBar.png")}/>  
      </View>
    </View>

  
  );
};


const styles = StyleSheet.create({
    statusbar:{
      backgroundColor:'black'
    },
    
      container:{
        flex:1,
        backgroundColor:"#213063",
        flexDirection: "column-reverse"
      },

      backgroundimage:{
        resizeMode:"contain",
        alignSelf: "flex-start",
      },

      percentagebar:{
        alignSelf: "center",
        backgroundColor: 'white'
      },

      explain:{
        fontSize: 18,
        marginBottom: windowHeight/100,
        color: 'white',
        alignSelf: "center",
      },

      explain2:{
        fontSize: 20,
        color: 'white',
        marginTop: windowHeight/10,
        marginBottom: windowHeight/200,
        alignSelf: "center",
      },

      explain3:{
        fontSize: 20,
        fontWeight: "bold",
        color: 'white',
        alignSelf: "center",
        marginBottom: windowHeight/100
      },
      explain4:{
        fontSize: 20,
        color: 'white',
        alignSelf: "center",
      },

      for_test:{
        fontSize: 100,
        marginBottom: windowHeight/10,
        alignSelf: "center",
      },

    
  });


