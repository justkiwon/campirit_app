import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { SafeAreaView, 
         ImageBackground,  
         StyleSheet, 
         Text, View, 
         Button, Image,
        TouchableOpacity } from 'react-native';

export default function StartPage({navigation}) {
  return (    
<View style={styles.container}>
  <ImageBackground
          style={{ width: "100%", height: "100%"}}  //View를 꽉채우도록
          source={require("../assets/images/startPage/background.png")}  //이미지경로
          resizeMode="cover" // 'cover', 'contain', 'stretch', 'repeat', 'center' 중 선택 
            >
    <TouchableOpacity style={styles.BButton} onPress = {() => navigation.navigate('QuizStart')}>
      <Image source={require("../assets/images/startPage/Button.png")}/>
    </TouchableOpacity>
    <Image style={styles.sign} source={require("../assets/images/startPage/sign.png")}/>
  </ImageBackground>
</View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  BButton: {
    marginTop: 299,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sign: {
  marginTop: 394,
  marginLeft: 15,
  alignItems: 'center',
  justifyContent: 'center',
  },
});