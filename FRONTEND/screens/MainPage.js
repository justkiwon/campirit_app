import { StatusBar } from 'expo-status-bar';
import React, { useState,useEffect } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    ScrollView,
    TouchableOpacity,
    Image,
} from 'react-native';

import { getStatusBarHeight } from 'react-native-status-bar-height';

import AsyncStorage from '@react-native-async-storage/async-storage';
import AsyncStorageLib from '@react-native-async-storage/async-storage';

import { useIsFocused } from '@react-navigation/native';

const STORAGE_KEY="@toDos"   

const windowWidth = Dimensions.get('window').width;

const windowHeight = Dimensions.get('window').height;
const StatusBarHeight =
    Platform.OS === 'ios' ? getStatusBarHeight(true) : StatusBar.currentHeight;

    
const fontsize =
Platform.OS === 'ios' ? 1 : 1.3;

export default function App({ navigation, finalhi, setFinalhi, final_select, Setfinal_select,Navi }) {
const isFocused = useIsFocused();

// -----------------------------------/ store local storage /--------------------------
const saveToDos = async(toSave) => {
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(toSave));
 };
 const loadToDos = async() => {
   if (finalhi != null){
     try{
    const s = await AsyncStorage.getItem(STORAGE_KEY);
    // parse는 string을 javascript object로 만들어 주는 것
    if(s) setFinalhi(JSON.parse(s));     
     }
     catch(err) {alert(err)}}
   
};

useEffect(()=>{
  loadToDos();
}, [isFocused]);
//  ------------------------------------------------------------------------------------

//========================================= Selete box function ========================================
const Selete_box = ({ tent_name, keyy, money, option1, option2, option3 }) => {
    saveToDos(finalhi);
    return (
    <View>
    <View style={styles.select_box}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Image source={require("../assets/images/MakeKit/rectangle.png")} style={styles.footer_selate_img} />

        <View style={{ flexDirection: 'column' }}>
            <View style={{ width: windowWidth / 1.5, flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={{ fontSize: 18 / fontsize, fontWeight: 'bold', color: '#213063', marginTop: windowWidth / 80, }}>{tent_name}</Text>
            <Text style={{ fontSize: 16 / fontsize, marginTop: windowWidth / 80 }}>{money} 원</Text>
            
            </View>

            <Text style={{ fontSize: 14 / fontsize, marginTop: windowHeight / 500, fontWeight: 'bold' }}>선택한 옵션: {finalhi[keyy].select_option}</Text>

            
        </View>

        </View>

    </View >

    </View >
   )
};

//======================================== Next Navigation =========================================

const NEXT = () => {
    for(var fff=0;fff<Navi.length;fff++){
        if(Navi[fff][0] == false){
            Navi[fff][0]= true;
            navigation.navigate(Navi[fff][1]);
            console.log("Navi_num:",Navi[fff][0])
            break;
        }
        if(Navi[fff] == -1){
            navigation.navigate("Loading2");
            break;
        }
    }
   console.log("next");
  };


//========================================= MAIN ===============================================
//console.log(finalhi);
    return (
        
        < View style={styles.container} >
            <ScrollView bounces='false' >
                <ScrollView horizontal bounces='false' pagingEnabled='false' style={styles.menu_bar}>
                    
    {Navi.map((key) => (
        <View key={key}>
        <TouchableOpacity style={styles.menu_content} onPress={ key[0] ? (() => navigation.navigate(key[1])): null}>
                <Image
                    style={styles.menu_image}
                    source={ key[0] ?
                        key[3].img : 
                        require("../assets/images/MainPage/Main_.png")} />
                <Text style={styles.menu_text}> {key[2]} </Text>
        </TouchableOpacity>
    </View>
    ))}

                </ScrollView>

                <View style={styles.background}>
                    <Image source={require("../assets/images/MainPage/Mainbackground.png")}
                        style={styles.background} />

                    <Image
                        style={styles.tent}
                        source={require("../assets/images/MainPage/tent.png")}
                    />
                    <Image
                        style={styles.tarp}
                        source={require("../assets/images/MainPage/tarp.png")}
                    />
                    <Image
                        style={styles.tarp2}
                        source={require("../assets/images/MainPage/tarp2.png")}
                    />
                    <Image
                        style={styles.mat}
                        source={require("../assets/images/MainPage/mat.png")}
                    />
                    <Image
                        style={styles.table}
                        source={require("../assets/images/MainPage/Main_Table.png")}
                    />
                    <Image
                        style={styles.chair}
                        source={require("../assets/images/MainPage/chair.png")}
                    />
                    <Image
                        style={styles.hitter}
                        source={require("../assets/images/MainPage/hitter.png")}
                    />
                    <Image
                        style={styles.hitter2}
                        source={require("../assets/images/MainPage/hitter2.png")}
                    />
                    <Image
                        style={styles.cooler}
                        source={require("../assets/images/MainPage/Main_cooler.png")}
                    />
                    <Image
                        style={styles.etc}
                        source={require("../assets/images/MainPage/etc.png")}
                    />
                    <Image
                        style={styles.kitchen}
                        source={require("../assets/images/MainPage/kitchen.png")}
                    />
                    <Image
                        style={styles.mood}
                        source={require("../assets/images/MainPage/Main_mood.png")}
                    />
                    <Image
                        style={styles.box}
                        source={require("../assets/images/MainPage/Main_box.png")}
                    />

                </View>


                <Text style={styles.head}>나만의 스타터 키트 구성품</Text>

                <View>
                <ScrollView horizontal={false} style={{ marginTop: windowHeight / 200 }}>
            {Object.keys(finalhi).map((key) => (
              <View key={key}>
                <Selete_box keyy={key} tent_name={finalhi[key].name} money={finalhi[key].price} option1={finalhi[key].select_option}/>
              </View>
            ))}
          </ScrollView>
                </View>

            </ScrollView>


            <View style={styles.footer}>

                <View style={{ flexDirection: "row" }} >
                    <Image
                        style={styles.car}
                        source={require("../assets/images/MainPage/camping_car.png")} />
                    <TouchableOpacity onPress={NEXT}>
                        <Image
                            style={styles.nextbutton}
                            source={require("../assets/images/MainPage/NEXT.png")} />
                    </TouchableOpacity>
                </View>

                <Image
                    style={styles.bar}
                    source={require("../assets/images/MainPage/Bar.png")} />
            </View>


        </View >
    );
};





const styles = StyleSheet.create({


    container:
    {
        flex: 1,
    },

    background: {
        resizeMode: "cover",
        width: windowWidth,
        height: windowWidth,
        zIndex: 0,


    },

    tent: {
        position: 'absolute',
        zIndex: 2,
        opacity: 1,
        alignSelf: 'center',
        resizeMode: 'contain',
        width: windowWidth / 1.8,
        height: windowWidth / 1.5,
        marginTop: windowWidth / 2.8
    },

    tent: {
        position: 'absolute',
        zIndex: 2,
        opacity: 1,
        alignSelf: 'center',
        resizeMode: 'contain',
        width: windowWidth / 1.8,
        height: windowWidth / 1.5,
        marginTop: windowWidth / 2.8
    },


    tarp: {
        position: 'absolute',
        zIndex: 1,
        opacity: 1,
        resizeMode: 'contain',
        width: windowWidth / 1,
        height: windowWidth / 1.8,
        marginTop: windowWidth / 3,
        marginLeft: windowWidth / 20
    },
    tarp2: {
        position: 'absolute',
        zIndex: 4,
        opacity: 1,
        resizeMode: 'contain',
        width: windowWidth / 1,
        height: windowWidth / 1.8,
        marginTop: windowWidth / 3,
        marginLeft: windowWidth / 20
    },

    mat: {
        position: 'absolute',
        zIndex: 3,
        opacity: 1,
        resizeMode: 'contain',
        width: windowWidth / 10,
        height: windowWidth / 1.8,
        marginTop: windowWidth / 2,
        marginLeft: windowWidth / 2.2
    },

    table: {
        position: 'absolute',
        zIndex: 5,
        opacity: 1,
        resizeMode: 'contain',
        width: windowWidth / 3,
        height: windowWidth / 1.8,
        marginTop: windowWidth / 1.7,
        marginLeft: windowWidth / 1.7
    },

    chair: {
        position: 'absolute',
        zIndex: 6,
        opacity: 1,
        resizeMode: 'contain',
        width: windowWidth / 5,
        height: windowWidth / 1.8,
        marginTop: windowWidth / 1.8,
        marginLeft: windowWidth / 5
    },

    hitter: {
        position: 'absolute',
        zIndex: 7,
        opacity: 1,
        resizeMode: 'contain',
        width: windowWidth / 8,
        height: windowWidth / 2,
        marginTop: windowWidth / 1.65,
        marginLeft: windowWidth / 6
    },

    hitter2: {
        position: 'absolute',
        zIndex: 4,
        opacity: 0,
        resizeMode: 'contain',
        width: windowWidth / 8,
        height: windowWidth / 1.7,
        marginTop: windowWidth / 1.75,
        marginLeft: windowWidth / 15
    },
    cooler: {
        position: 'absolute',
        zIndex: 4,
        opacity: 1,
        resizeMode: 'contain',
        width: windowWidth / 12,
        height: windowWidth / 1.7,
        marginTop: windowWidth / 1.9,
        marginLeft: windowWidth / 10
    },

    etc: {
        position: 'absolute',
        zIndex: 8,
        opacity: 1,
        resizeMode: 'contain',
        width: windowWidth / 5,
        height: windowWidth / 1.7,
        marginTop: windowWidth / 2.05,
        marginLeft: windowWidth / 1.6
    },

    kitchen: {
        position: 'absolute',
        zIndex: 9,
        opacity: 1,
        resizeMode: 'contain',
        width: windowWidth / 6,
        height: windowWidth / 1.7,
        marginTop: windowWidth / 1.75,
        marginLeft: windowWidth / 1.4
    },

    mood: {
        position: 'absolute',
        zIndex: 10,
        opacity: 1,
        resizeMode: 'contain',
        width: windowWidth / 3.8,
        height: windowWidth / 1.85,
        marginTop: windowWidth / 4.2,
        marginLeft: windowWidth / 2.1
    },

    box: {
        position: 'absolute',
        zIndex: 4,
        opacity: 1,
        resizeMode: 'contain',
        width: windowWidth / 6,
        height: windowWidth / 10,
        marginTop: windowWidth / 1.25,
        marginLeft: windowWidth / 2.1
    },



    head: {
        marginTop: 5,
        marginLeft: 10,
        fontWeight: 'bold',
        fontSize: 18
    },


    test1: {
        height: windowHeight / 1,
    },

    test2:
    {
        flex: 1,
        height: 100,
        width: 100,

    },

    menu_bar: {
        marginTop: windowHeight / 20,
        height: windowHeight / 10,
        backgroundColor: '#EEECE0',
    },

    menu_content:
    {

    },
    menu_image:
    {
        width: windowWidth / 7,
        height: windowHeight / 20,
        marginLeft: windowHeight / 200,
        marginTop: windowHeight / 100,
        marginBottom: windowHeight / 120,
        resizeMode: 'contain',

        alignContent: 'center'
    },

    menu_text: {
        fontSize: 14,
        fontWeight: 'bold',
        width: windowWidth / 7,
        marginLeft: windowHeight / 200,
        textAlign: 'center',

    },

    footer:
    {

    },

    nextbutton: {
        resizeMode: 'contain',
        width: windowWidth / 5,
        height: windowHeight / 20,
        marginLeft: windowWidth / 1.8,
        bottom: 0,

    },

    bar: {
        bottom: 0,
    },

    car:
    {
        resizeMode: 'contain',
        width: windowWidth / 5,
        height: windowHeight / 20,

    },
//------------------------- select_Box ------------------------------
    select_box: {
        zIndex: 0,
        marginRight: windowWidth / 30,
        marginTop: windowHeight / 200,
        left: windowWidth / 70,
        height: windowHeight / 8,
        width: windowWidth / 1.1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderWidth: 1,
        borderStyle: 'dashed',
      },
      Delete_Button: {
        resizeMode: 'contain',
        justifyContent: "center",
        width: windowWidth / 20,
      },



    })
