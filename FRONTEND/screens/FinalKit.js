import React, { useState } from 'react';
import {backgroundcolor, _ScrollView, StyleSheet, Text, Pressable,Dimensions, View, ScrollView ,Image, ImageBackground,fontSize} from 'react-native';
import { FullWindowOverlay } from 'react-native-screens';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const fontsize =
  Platform.OS === 'ios' ? 1 : 1.3;

export default function FinalKit  ({navigation,finalhi}) {
  //usePreventScreenCapture();


    //========================================== Product_info_detail (side)function =====================================
    const Product_info_detail = ({ detail, name, price, imgs }) => {
      return (
        <View style={styles.products}>
          <View style={{ flexDirection: 'column' }}>
               <Image
                style={styles.product_image}
                source={require("../assets/images/MakeKit/rectangle.png")} />
            <Text style={styles.content_name}>{name}</Text>
            <Text style={styles.content_price}>{price}</Text>
          </View>
        </View>
      )
    };
    
    const H=false;
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

    <ScrollView style={styles.specific_item} horizontal bounces='false'>
      {Object.keys(finalhi).map((key) => (
      <View key={key}  style={{marginRight:windowWidth/150}}>
        <Product_info_detail name={finalhi[key].name} price={finalhi[key].price} imgs={finalhi[key].img} />
        </View>
      ))}
    </ScrollView>
   
    <View flexDirection='row' backgroundColor='blue'>
        <Pressable onPress={() => navigation.navigate("MainPage")}>
        <Image
          style={styles.Final}      
          source={require("../assets/images/FinalKit/Button_buy.png")} 
          />
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
    flexDirection:'column',
    backgroundColor: "red",
    width: windowWidth,
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
    alignSelf: 'flex-start',
    fontFamily: 'YiSunShin_B',

    marginBottom: windowHeight / 200,
    marginLeft: windowWidth / 40,
  },
  Final: {
    //width: windowWidth/2,
    //marginRight: windowWidth/50,
    //height: windowHeight/30,
    //resizeMode: 'contain',
    //borderRadius: 13,
    //resizeMode="cover"
    backgroundColor:'red'
  },
//------------------------------------ product_detail ----------------------------
  product_image: {
    resizeMode: 'stretch',
    alignSelf: 'flex-start',
    width: windowWidth / 3.5,
    height: windowWidth / 3.5,
    marginLeft: windowWidth / 50,
  },
  products: {
    marginLeft: windowWidth / 50,
    flexDirection: 'row',
    width: windowWidth / 3.5,
    //backgroundColor: "grey",
  },
  content_name: {
    marginLeft: windowWidth / 50,
    marginTop: windowHeight / 500,
    fontSize: 20 / fontsize,
    color: '#213063',
    fontWeight: 'bold',
  },

  content_price: {
    
    marginLeft: windowWidth / 50,
    fontSize: 16 / fontsize,
  },

  specific_item: {
    flexDirection: 'row',
    //marginLeft: windowWidth/200,
    marginBottom: windowHeight/2,
    marginRight:windowWidth/50
  },
//-------------------------------------------------------------------------------


});