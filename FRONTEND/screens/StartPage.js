import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import {
  SafeAreaView,
  ImageBackground,
  StyleSheet,
  Text, View,
  Button, Image,
  TouchableOpacity,
  Dimensions
} from 'react-native';



const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function StartPage({ navigation }) {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={{ height: "100%", resizeMode: 'cover' }}  //View를 꽉채우도록
        source={require("../assets/images/startPage/background.png")}  //이미지경로
        resizeMode="cover" // 'cover', 'contain', 'stretch', 'repeat', 'center' 중 선택 
      >
        <Image style={styles.title} source={require("../assets/images/startPage/title.png")} />
        <TouchableOpacity style={styles.BButton} onPress={() => navigation.navigate('QuizStart')}>
          <Image source={require("../assets/images/startPage/Button.png")} />
        </TouchableOpacity>


        <TouchableOpacity style={styles.BButton} onPress={() => navigation.navigate('MainPage')}>
          <Image source={require("../assets/images/startPage/Button.png")} />
        </TouchableOpacity>

        <Image style={styles.tent} source={require("../assets/images/startPage/Tent.png")} />

      </ImageBackground>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {

  },


  title: {
    width: windowWidth / 1.6,
    height: windowHeight / 20,
    alignSelf: 'center',
    resizeMode: 'contain',
    marginTop: windowHeight / 4,
    //backgroundColor: 'blue'
  },
  BButton: {
    marginTop: windowHeight / 500,
    alignItems: 'center',

  },

  tent: {
    width: windowWidth / 1.2,
    height: windowHeight / 1.5,
    marginTop: windowHeight / 5.5,
    //backgroundColor: 'pink',
    resizeMode: 'contain',
    alignSelf: 'center',

  },


});