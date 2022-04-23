import React, { useRef, useEffect } from 'react';
import { 
  StyleSheet,
  ImageBackground,
  Image,
  Text, 
  View,  
  Dimensions,
  Platform,
  StatusBar,
  Animated,} from 'react-native';
import { useFonts } from 'expo-font';
import { getStatusBarHeight } from 'react-native-status-bar-height';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const StatusBarHeight =
    Platform.OS === 'ios' ? getStatusBarHeight(true) : StatusBar.currentHeight;

  export default function QuizSituation({navigation, ansList}){
    const where = useRef(new Animated.Value(-350)).current 
    useEffect(() => {
      Animated.timing(
        where,{
          toValue: 0,
          duration: 2000,
          useNativeDriver: true,}
      ).start();
    }, [where])

    useEffect( ()=>{  
      let timer = setTimeout(() => {
        navigation.navigate('Quiz4');
      }, 2000);
      return ()=> clearTimeout(timer)
    },[]) 
    
    const [loaded] = useFonts({
      YiSunShin_B: require('../../assets/fonts/이순신돋움체B.ttf'),
      Roboto:require('../../assets/fonts/Roboto.ttf'),
    });
    if (!loaded) {
      return null;
    }

    return (
        <View style={styles.container}>
          <View style={styles.header}>
            <ImageBackground  
              style={styles.headerWave}
              source={require("../../assets/images/Quiz/bigheaderWave.png")}
              resizeMode="cover">
            <Text style={styles.headerText}>
              <Text style={{...styles.headerText,fontSize:25, }}>{ansList.A1} {ansList.A2}</Text>인 당신이 {"\n"}{"\n"}
              <Text style={{...styles.headerText,fontSize:25, }}>{ansList.A3}</Text>과 캠핑을 간다면..?
            </Text>
            </ImageBackground>
          </View>
          <View style = {styles.footer}>
            <View style = {styles.process}>
              <Animated.Image
                source={require("../../assets/images/Quiz/movingCar.png")}
                style={[styles.movingCar, {
                  transform: [{ translateX: where }]
                }]}/>
            </View>
            <Image
              source={require("../../assets/images/Quiz/Line.png")}/>
          </View>
          <StatusBar backgroundColor='#213063'></StatusBar>
        </View>
    );
}

const styles = StyleSheet.create({
  ///////////////////////////////<<<< Container : 최상위 박스 >>>>>//////////////////////////////////////  
  container: {
      flex: 1,
    },
    ///////////////////////////////<<<< Header : 파란물결 >>>>>//////////////////////////////////////
    header:{
      flex: 15,
      // backgroundColor:"red",
      marginTop:StatusBarHeight,

      alignItems: "center",
    },
    headerWave:{
      width: windowWidth,
      height:windowHeight,
      marginTop:-windowHeight/5,

      justifyContent: "center",
    },
    headerText:{
      color:"white",
      fontWeight:"400",
      fontSize:20,
      fontFamily:'YiSunShin_B',

      marginBottom:-windowHeight/10,
      marginLeft :windowWidth/17,
    },
    //////////////////////////<<<< Footer : 자동차 >>>>>///////////////////////////////////////////
    footer:{
      flex: 1,
      // backgroundColor:"blue",
    },
    process:{
      // backgroundColor:"blue",

      flexDirection:"row",
      justifyContent:"flex-end",
    },
    movingCar:{
      marginBottom:-3,
      
    },
  });