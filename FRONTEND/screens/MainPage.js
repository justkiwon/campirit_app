import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import {Picker} from '@react-native-picker/picker';
import {ScrollView,Text,Image, View, StyleSheet, SafeAreaView, Button, Alert} from 'react-native';
import { Dimensions } from 'react-native';


const App = ({ route , navigation }) => {

  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

return (
  <SafeAreaView>
       <Text style={{marginTop:150, fontSize:25}}>넌 정말 멍청하다</Text> 
    <StatusBar/>
  </SafeAreaView>
)
}

const styles = StyleSheet.create({
  header: {
    marginTop: 18,
    flexDirection: 'row',
  },
  Content_list: {
    marginTop: 30,
    flexDirection: 'row',
  },
  header_title: {
    marginTop: 58,
    fontSize: 30,
    textAlign: 'center'
  },
  header_content1: {
    fontSize: 20,
    textAlign: 'center'
  },
  header_content2: {
    fontSize: 15,
    textAlign: 'center'
  },
  Content_image: {
    marginTop: 20,
    borderRadius:50,
    backgroundColor: 'tomato',
  },
  Content_explain: {
    alignItems:'flex-start',
    height:140,
    width:270,
    backgroundColor:'yellow'
  },
  Content_title: {
    fontSize:20,
  },
  Content: {
    fontSize:13,
  },
  footer_selate: {
    height:140,
    backgroundColor: 'green',
  },
  selete_box: {
    marginTop:5,
    left:9,
    height: 100,
    width:290,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 2,
    borderStyle: 'dashed',
  },
  footer_selate_img: {
    marginTop:5,
    left:5,
    height:85,
    width:85
  },
  picker_value:{
    borderRadius: 70,
  },
});

export default App;
