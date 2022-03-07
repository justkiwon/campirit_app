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
import { InputAccessoryView } from 'react-native-web';

const windowWidth = Dimensions.get('window').width; 
const windowHeight = Dimensions.get('window').height;
export default function Loading1({navigation, ansList, Navi}) {


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


    setTimeout(() => {
      const a=0;
      console.log(a);

      const Navi2=[...Navi];
      for(var i=0 ;i<Navi.length;i++){
        if(ansList.A8 == 2 ){ // 캠핑 안가는 계절=  여름 && 전기 사용X
          if(Navi[i][1]== "MakeKit_Cooler_NoEnergy"){
            Navi.splice(i);
            a=2;
          }
          if(Navi[i][1]== "MakeKit_Heater_NoEnergy"){
            Navi.splice(i);
          }  
      }
      if(ansList.A8 == 4 ){ // 캠핑 안가는 계절 -- 겨울 && 전기 사용 X
        if(Navi[i][1]=="MakeKit_Heater_Energy"){
            Navi.splice(i);
        }
        if(Navi[i][1] == "MakeKit_Cooler_NoEnergy"){
            Navi.splice(i);
            a=3;
        }
      }
      if(ansList.A9 ==2){
        if(Navi[i][1] == "MakeKit_Cooler_NoEnergy"){
          Navi.splice(i);
      }
      if(Navi[i][1]== "MakeKit_Heater_NoEnergy"){
        Navi.splice(i);
        a=5;
      }  
  
      }
      if(ansList.A5 == 2){ //감성 여부
            if(Navi[i][1]== "MakeKit_Sentiment"){
            Navi.push(Navi[i]);
            Navi.splice(i);
            a=7;
            }
      }
      if(ansList.A6 == 2){
        if(Navi[i][1] == "MakeKit_Tarp_NoCar"){
          Navi.splice(i);
          a=8;
        }
      }
    }
     
      navigation.navigate(Navi[0][1]);
    }, 3000);

console.log("Navi:", Navi);
//console.log("Navi2:", Navi2);
  return (   
    <View style = {styles.container}>
        
        <View>
          <View style = {styles.for_test} >
            <Animated.Text 
              style={[styles.explain, {opacity: Fadein1}]}>
                {ansList.A4 ==1 ? <Text>미니멀 리스트인 당신</Text>: <Text>공간이 여유로운 당신</Text>}
                </Animated.Text>

            <Animated.Text 
              style={[styles.explain,{opacity: Fadein1 }]}>
                {ansList.A6 ==1 ? <Text>차박을 즐기는 당신</Text>: <Text>텐트에서 자는 당신</Text>}
                </Animated.Text>
            
            <Animated.Text style={[styles.explain,{opacity: Fadein1}]}>
                {ansList.A5 ==1 ? <Text>감성을 추구하는 당신</Text>:<Text>가성비를 추구하는 당신</Text>}
                </Animated.Text>
            
            <Animated.Text style={[styles.explain,{opacity: Fadein1}]}>
                {ansList.A1 ==9 ? <Text>전기를 사용하는 당신</Text>: <Text>진정한 캠퍼인 당신</Text>}
                </Animated.Text>
            
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
                  source={require ("../assets/images/loading/background3.png")}>
          </Animated.Image>

          <Image 
              style= {styles.percentagebar}
              source={require("../assets/images/loading/PercentageBar.png")}/>  
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

