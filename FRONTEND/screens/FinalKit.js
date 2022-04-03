import React, { useState } from 'react';
import {backgroundcolor, StyleSheet, Text, Pressable,Dimensions, View, ScrollView ,Image, ImageBackground} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


export default function FinalKit  ({navigation}) {
  //usePreventScreenCapture();

  const H = false;
  return (
    <View style={styles.container}>
      {/* 배경화면 */}
      <View style={styles.header}>
      <Image
      style={styles.maincontain}      
      source={require("../assets/images/FinalKit/FinalBG.png")} 
      resizeMode="cover"/>
      </View>
      
       {/* 공유하기 버튼 */}
      <View style={styles.body}>
      <Image 
      style={{...styles.Share,height:H ? windowHeight/30:0}}     
      source={require("../assets/images/FinalKit/ShareBtn.png")}></Image>
    
      </View>

      {/* 마지막 구성 */}
      <Text style={styles.FinalText}>
            나만의 스타터 키트 구성품
      </Text>

      <View style={styles.body}>
      <Pressable onPress={() => navigation.navigate("MainPage")}>
      <Image
      style={styles.Final}      
      source={require("../assets/images/FinalKit/Button_buy.png")} 
      resizeMode="cover"/>
      </Pressable>
      </View>
      


      </View>

      
  );
};

const styles = StyleSheet.create({
  maincontain: {
    width: windowWidth,
    resizeMode: 'contain'
  },
  body:{
    flexDirection:'row-reverse',
  },
  Share: {
    width: windowWidth/5,
    marginRight: windowWidth/50,
    height: windowHeight/30,
    resizeMode: 'contain',
  },
  FinalText: {
    color: "black",
    fontWeight: "400",
    fontSize: 20,
    fontFamily: 'YiSunShin_B',

    marginBottom: windowHeight * 9 / 32 / 3,
    marginLeft: windowWidth / 40,
  },
  Final: {
    width: windowWidth/2,
    marginRight: windowWidth/50,
    height: windowHeight/30,
    resizeMode: 'contain',
    borderRadius: 13,
  }
});
