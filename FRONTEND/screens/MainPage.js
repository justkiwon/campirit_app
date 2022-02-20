import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    ScrollView,
    TouchableOpacity,
    Image


} from 'react-native';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function App({ navigation }) {

    return (
        < View style={styles.container} >
            <ScrollView bounces='false' >
                <ScrollView horizontal bounces='false' pagingEnabled='false' style={styles.menu_bar}>
                    <TouchableOpacity style={styles.menu_content}>
                        <Image
                            style={styles.menu_image}
                            source={require("./assets/images/MainPage/Main_tent.png")} />
                        <Text style={styles.menu_text}> 텐트 </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.menu_content}>
                        <Image
                            style={styles.menu_image}
                            source={require("./assets/images/MainPage/Main_Tarp.png")} />
                        <Text style={styles.menu_text}> 타프 </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.menu_content}>
                        <Image
                            style={styles.menu_image}
                            source={require("./assets/images/MainPage/Main_mat.png")} />
                        <Text style={styles.menu_text}> 매트 </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.menu_content}>
                        <Image
                            style={styles.menu_image}
                            source={require("./assets/images/MainPage/Main_Table.png")} />
                        <Text style={styles.menu_text}> 테이블 </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.menu_content}>
                        <Image
                            style={styles.menu_image}
                            source={require("./assets/images/MainPage/Main_chair.png")} />
                        <Text style={styles.menu_text}> 체어 </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.menu_content}>
                        <Image
                            style={styles.menu_image}
                            source={require("./assets/images/MainPage/Main_hitter.png")} />
                        <Text style={styles.menu_text}> 난로 </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.menu_content}>
                        <Image
                            style={styles.menu_image}
                            source={require("./assets/images/MainPage/Main_cooler.png")} />
                        <Text style={styles.menu_text}> 에어컨 </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.menu_content}>
                        <Image
                            style={styles.menu_image}
                            source={require("./assets/images/MainPage/Main_etc.png")} />
                        <Text style={styles.menu_text}> 기타용품 </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.menu_content}>
                        <Image
                            style={styles.menu_image}
                            source={require("./assets/images/MainPage/Main_kitchen.png")} />
                        <Text style={styles.menu_text}> 주방용품 </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.menu_content}>
                        <Image
                            style={styles.menu_image}
                            source={require("./assets/images/MainPage/Main_mood.png")} />
                        <Text style={styles.menu_text}> 감성용품 </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.menu_content}>
                        <Image
                            style={styles.menu_image}
                            source={require("./assets/images/MainPage/Main_box.png")} />
                        <Text style={styles.menu_text}> 폴딩박스 </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.menu_content}>
                        <Image
                            style={styles.menu_image}
                            source={require("./assets/images/MainPage/Main_.png")} />
                        <Text style={styles.menu_text}> 미개봉 </Text>
                    </TouchableOpacity>
                </ScrollView>

                <View style={styles.background}>
                    <Image source={require("./assets/images/MainPage/Mainbackground.png")}
                        style={styles.background} />

                    <Image
                        style={styles.tent}
                        source={require("./assets/images/MainPage/tent.png")}
                    />
                    <Image
                        style={styles.tarp}
                        source={require("./assets/images/MainPage/tarp.png")}
                    />
                    <Image
                        style={styles.tarp2}
                        source={require("./assets/images/MainPage/tarp2.png")}
                    />
                    <Image
                        style={styles.mat}
                        source={require("./assets/images/MainPage/mat.png")}
                    />
                    <Image
                        style={styles.table}
                        source={require("./assets/images/MainPage/Main_Table.png")}
                    />
                    <Image
                        style={styles.chair}
                        source={require("./assets/images/MainPage/chair.png")}
                    />
                    <Image
                        style={styles.hitter}
                        source={require("./assets/images/MainPage/hitter.png")}
                    />
                    <Image
                        style={styles.hitter2}
                        source={require("./assets/images/MainPage/hitter2.png")}
                    />
                    <Image
                        style={styles.cooler}
                        source={require("./assets/images/MainPage/Main_cooler.png")}
                    />
                    <Image
                        style={styles.etc}
                        source={require("./assets/images/MainPage/etc.png")}
                    />
                    <Image
                        style={styles.kitchen}
                        source={require("./assets/images/MainPage/kitchen.png")}
                    />
                    <Image
                        style={styles.mood}
                        source={require("./assets/images/MainPage/Main_mood.png")}
                    />
                    <Image
                        style={styles.box}
                        source={require("./assets/images/MainPage/Main_box.png")}
                    />

                </View>


                <Text style={styles.head}>나만의 스타터 키트 구성품</Text>

                <View>
                    <Text style={styles.test1}> 여기</Text>
                </View>


            </ScrollView>


            <View style={styles.footer}>

                <View style={{ flexDirection: "row" }} >
                    <Image
                        style={styles.car}
                        source={require("./assets/images/MainPage/camping_car.png")} />
                    <TouchableOpacity>
                        <Image
                            style={styles.nextbutton}
                            source={require("./assets/images/MainPage/NEXT.png")} />
                    </TouchableOpacity>
                </View>

                <Image
                    style={styles.bar}
                    source={require("./assets/images/MainPage/Bar.png")} />
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



})

