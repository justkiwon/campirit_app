import React, { Component, useEffect, useRef } from 'react';
import { 
  Dimensions, 
  View,
  StyleSheet, 
  Animated,
  Text, 
  StatusBar,
  Image,
  ScrollView,
  Touchable,
  TouchableOpacity,
  Button} from 'react-native';


  import { getStatusBarHeight } from 'react-native-status-bar-height';
const windowWidth = Dimensions.get('window').width; 
const windowHeight = Dimensions.get('window').height;
const StatusBarHeight =
    Platform.OS === 'ios' ? getStatusBarHeight(true) : StatusBar.currentHeight;


export default function App({navigation}) {
    return(

          <View style = {styles.container}>


              <ScrollView bounces='false' > 
                  <ScrollView  horizontal bounces='false' pagingEnabled='false' style={styles.menu_bar}>
                        <TouchableOpacity  style={styles.menu_content}>
                            <Image 
                            style = {styles.menu_image}
                            source = {require("../assets/images/MainPage/Main_tent.png")}/> 
                            <Text style={styles.menu_text}> 텐트 </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.menu_content}>
                            <Image 
                            style = {styles.menu_image}
                            source = {require("../assets/images/MainPage/Main_Tarp.png")}/>
                            <Text style={styles.menu_text}> 타프 </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.menu_content}>
                            <Image 
                            style = {styles.menu_image}
                            source = {require("../assets/images/MainPage/Main_mat.png")}/>
                            <Text style={styles.menu_text}> 매트 </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.menu_content}>
                            <Image 
                            style = {styles.menu_image}
                            source = {require("../assets/images/MainPage/Main_Table.png")}/>
                            <Text style={styles.menu_text}> 테이블 </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.menu_content}>
                            <Image 
                            style = {styles.menu_image}
                            source = {require("../assets/images/MainPage/Main_chair.png")}/>
                            <Text style={styles.menu_text}> 체어 </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.menu_content}>
                            <Image 
                            style = {styles.menu_image}
                            source = {require("../assets/images/MainPage/Main_hitter.png")}/>
                            <Text style={styles.menu_text}> 난로 </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.menu_content}>
                            <Image 
                            style = {styles.menu_image}
                            source = {require("../assets/images/MainPage/Main_cooler.png")}/>
                            <Text style={styles.menu_text}> 에어컨 </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.menu_content}>
                            <Image 
                            style = {styles.menu_image}
                            source = {require("../assets/images/MainPage/Main_etc.png")}/>
                            <Text style={styles.menu_text}> 기타용품 </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.menu_content}>
                            <Image 
                            style = {styles.menu_image}
                            source = {require("../assets/images/MainPage/Main_kitchen.png")}/>
                            <Text style={styles.menu_text}> 주방용품 </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.menu_content}>
                            <Image 
                            style = {styles.menu_image}
                            source = {require("../assets/images/MainPage/Main_mood.png")}/>
                            <Text style={styles.menu_text}> 감성용품 </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.menu_content}>
                            <Image 
                            style = {styles.menu_image}
                            source = {require("../assets/images/MainPage/Main_box.png")}/>
                            <Text style={styles.menu_text}> 폴딩박스 </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.menu_content}>
                            <Image 
                            style = {styles.menu_image}
                            source = {require("../assets/images/MainPage/Main_.png")}/>
                            <Text style={styles.menu_text}> 미개봉 </Text>
                        </TouchableOpacity>
                  </ScrollView>

                  <View>
                      <Image
                           style = {{resizeMode: "cover", width: windowWidth}}
                          source = {require("../assets/images/MainPage/Mainbackground.png")}/>
                  </View>
                  
                  <Text style = {styles.head}>나만의 스타터 키트 구성품</Text>

                  <View>
                      <Text style = {styles.test1}>   이야야ㅑ 행복하다 조소연 내일와? </Text>
                  </View>

                  

              </ScrollView>

              <View style = {styles.footer}>

              <View style={[{flexDirection: "row"}, {justifyContent: "space-between "}]}>
                    <Image
                        style = {styles.car}
                        source = {require("../assets/images/MainPage/camping_car.png")}/>
                    <TouchableOpacity>
                        <Image 
                            style = {styles.nextbutton}
                            source={require("../assets/images/MainPage/NEXT.png")}/>
                    </TouchableOpacity>
                  </View>

                                <Image
                      style = {styles.bar}
                      source = {require("../assets/images/MainPage/Bar.png")}/>
                    


              </View>

          </View>

    );
};


const styles = StyleSheet.create({


    container:
    {
        flex: 1
    },

    head:{
        marginTop: 5,
        marginLeft: 10,
        fontWeight:'bold',
        fontSize: 18
    },





    test1:{
      height: windowHeight/1,
      //backgroundColor: 'pink'
  },

    test2:
    {
      flex: 1,
      height: 100,
      width: 100,
      backgroundColor: 'red'
    },

    menu_bar:{
        marginTop: windowHeight/20,
        height: windowHeight/10,
        backgroundColor: '#EEECE0',
    },

    menu_content:
    {

    },
    menu_image:
    {
        width: windowWidth/7,
        height: windowHeight/20,
        marginLeft: windowHeight/200,
        marginTop: windowHeight/100,
        marginBottom: windowHeight/120,
        resizeMode: 'contain',        

        alignContent: 'center'
    },

    menu_text:{
        fontSize: 16,
        fontWeight: 'bold',
        width: windowWidth/7,
        marginLeft: windowHeight/200,
        textAlign: 'center',
        
    },

    footer:
    {
       
    },

    nextbutton:{
        resizeMode: 'contain',
        width: windowWidth/5,
        height: windowHeight/20,
        marginLeft: windowWidth/1.8,
        bottom: 0,
    
    },    

    bar:{
        bottom: 0,
    },
    
    car:
    {
        resizeMode: 'contain',
        width: windowWidth/5,
        height: windowHeight/20,
       
    },



})

