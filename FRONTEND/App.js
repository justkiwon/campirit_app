import { StatusBar } from 'expo-status-bar';
import React, { useState, } from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MainPage from './screens/MainPage.js';
import StartPage from './screens/StartPage.js';
import QuizStart from './screens/QuizPages/QuizStart.js';
import QuizSituation from './screens/QuizPages/QuizSituation.js';
import Quiz1 from './screens/QuizPages/Quiz1.js';
import Quiz2 from './screens/QuizPages/Quiz2.js';
import Quiz3 from './screens/QuizPages/Quiz3.js';
import Quiz4 from './screens/QuizPages/Quiz4.js';
import Quiz5 from './screens/QuizPages/Quiz5.js';
import Quiz6 from './screens/QuizPages/Quiz6.js';
import Quiz7 from './screens/QuizPages/Quiz7.js';
import Quiz8 from './screens/QuizPages/Quiz8.js';
import Quiz9 from './screens/QuizPages/Quiz9.js';
import Quizf from './screens/QuizPages/Quizf.js';
import Loading1 from './screens/Loading1.js';
import Loading2 from './screens/Loading2.js';
import MakeKit_Tent from './screens/MakeKit/MakeKit_Tent.js';
import MakeKit_Tarp from './screens/MakeKit/MakeKit_Tarp.js';
import MakeKit_Tarp_NoCar from './screens/MakeKit/MakeKit_Tarp_NoCar.js';
import MakeKit_Mat from './screens/MakeKit/MakeKit_Mat.js';
import MakeKit_Table from './screens/MakeKit/MakeKit_Table.js';
import MakeKit_Chair from './screens/MakeKit/MakeKit_Chair.js';
import MakeKit_Heater_Energy from './screens/MakeKit/MakeKit_Heater_Energy.js';
import MakeKit_Heater_NoEnergy from './screens/MakeKit/MakeKit_Heater_NoEnergy.js';
import MakeKit_Cooler_Energy from './screens/MakeKit/MakeKit_Cooler_Energy.js';
import MakeKit_Cooler_NoEnergy from './screens/MakeKit/MakeKit_Cooler_NoEnergy';
import MakeKit_Etc from './screens/MakeKit/MakeKit_Etc.js';
import MakeKit_Kitc from './screens/MakeKit/MakeKit_Kitc.js';
import MakeKit_Setiment from './screens/MakeKit/MakeKit_Setiment.js';
import MakeKit_Box from './screens/MakeKit/MakeKit_Box.js';
import FinalKit from './screens/FinalKit.js';

const Stack = createNativeStackNavigator();

export default function App() {
  const [ansList, setansList] = useState(
    {
      A1: "",
      A2: "",
      A3: "",
      A4: 0,
      A5: 0,
      A6: 0,
      A7: 0,
      A8: 0,
      A9: 0,
      Af: 0,
    });

    const [Navi,setNavi]=useState([
    [false,"MakeKit_Tent","텐트",{img:require("./assets/images/MainPage/Main_tent.png")}],
    [false,"MakeKit_Tarp","타프",{img:require("./assets/images/MainPage/Main_Tarp.png")}],
    [false,"MakeKit_Tarp_NoCar","타프",{img:require("./assets/images/MainPage/Main_Tarp.png")}],
    [false,"MakeKit_Mat","매트",{img:require("./assets/images/MainPage/Main_mat.png")}],
    [false,"MakeKit_Table","테이블",{img:require("./assets/images/MainPage/Main_Table.png")}],
    [false,"MakeKit_Chair","의자",{img:require("./assets/images/MainPage/Main_chair.png")}],
    [false,"MakeKit_Heater_Energy","난로",{img:require("./assets/images/MainPage/Main_hitter.png")}],
    [false,"MakeKit_Heater_NoEnergy","난로",{img:require("./assets/images/MainPage/Main_hitter.png")}],
    [false,"MakeKit_Cooler_Energy","에어컨",{img:require("./assets/images/MainPage/Main_cooler.png")}],
    [false,"MakeKit_Cooler_NoEnergy","에어컨",{img:require("./assets/images/MainPage/Main_cooler.png")}],
    [false,"MakeKit_Etc","기타용품",{img:require("./assets/images/MainPage/Main_etc.png")}],
    [false,"MakeKit_Kitc","주방용품",{img:require("./assets/images/MainPage/Main_kitchen.png")}],
    [false,"MakeKit_Setiment","감성용품",{img:require("./assets/images/MainPage/Main_mood.png")}],
    [false,"MakeKit_Box","폴딩박스",{img:require("./assets/images/MainPage/Main_box.png")}],
    "-1"
    ]);

  const [finalhi, setFinalhi] = useState({});  

  const [final_select, Setfinal_select] = useState({});

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="StartPage">
        <Stack.Screen name="StartPage" component={StartPage} options={{ headerShown: false }} />

        <Stack.Screen name="QuizStart" component={QuizStart} options={{ headerShown: false }} />
        <Stack.Screen name="QuizSituation" options={{ headerShown: false }} children={
          ({ navigation }) => <QuizSituation navigation={navigation} ansList={ansList} />
        } />
        <Stack.Screen name="Quiz1" options={{ headerShown: false }} children={
          ({ navigation }) => <Quiz1 navigation={navigation} ansList={ansList} setansList={setansList} />
        } />
        <Stack.Screen name="Quiz2" options={{ headerShown: false }} children={
          ({ navigation }) => <Quiz2 navigation={navigation} ansList={ansList} setansList={setansList} />
        } />
        <Stack.Screen name="Quiz3" options={{ headerShown: false }} children={
          ({ navigation }) => <Quiz3 navigation={navigation} ansList={ansList} setansList={setansList} />
        } />
        <Stack.Screen name="Quiz4" options={{ headerShown: false }} children={
          ({ navigation }) => <Quiz4 navigation={navigation} ansList={ansList} setansList={setansList} />
        } />
        <Stack.Screen name="Quiz5" options={{ headerShown: false }} children={
          ({ navigation }) => <Quiz5 navigation={navigation} ansList={ansList} setansList={setansList} />
        } />
        <Stack.Screen name="Quiz6" options={{ headerShown: false }} children={
          ({ navigation }) => <Quiz6 navigation={navigation} ansList={ansList} setansList={setansList} />
        } />
        <Stack.Screen name="Quiz7" options={{ headerShown: false }} children={
          ({ navigation }) => <Quiz7 navigation={navigation} ansList={ansList} setansList={setansList} />
        } />
        <Stack.Screen name="Quiz8" options={{ headerShown: false }} children={
          ({ navigation }) => <Quiz8 navigation={navigation} ansList={ansList} setansList={setansList} />
        } />
        <Stack.Screen name="Quiz9" options={{ headerShown: false }} children={
          ({ navigation }) => <Quiz9 navigation={navigation} ansList={ansList} setansList={setansList} />
        } />
        <Stack.Screen name="Quizf" options={{ headerShown: false }} children={
          ({ navigation }) => <Quizf navigation={navigation} ansList={ansList} setansList={setansList} Navi={Navi}/>
        } />
        <Stack.Screen name="Loading1" options={{ headerShown: false }} children={
          ({ navigation }) => <Loading1 navigation={navigation} ansList={ansList}  Navi={Navi} setNavi={setNavi} />
        } />
          <Stack.Screen name="Loading2" options={{ headerShown: false }} children={
          ({ navigation }) => <Loading1 navigation={navigation} ansList={ansList}  Navi={Navi} setNavi={setNavi} />
        } />
        <Stack.Screen name="MainPage" options={{ headerShown: false }} children={
          ({ navigation }) => <MainPage navigation={navigation} ansList={ansList} final_select={final_select} Setfinal_select={Setfinal_select} finalhi={finalhi} setFinalhi={setFinalhi} Navi={Navi} setNavi={setNavi}/>
        } />

        <Stack.Screen name="MakeKit_Tent" options={{ headerShown: false }} children={
          ({ navigation }) => <MakeKit_Tent navigation={navigation} ansList={ansList} final_select={final_select} Setfinal_select={Setfinal_select} finalhi={finalhi} setFinalhi={setFinalhi}  Navi={Navi} setNavi={setNavi} />
        } />
        <Stack.Screen name="MakeKit_Tarp" options={{ headerShown: false }} children={
          ({ navigation }) => <MakeKit_Tarp navigation={navigation} ansList={ansList} final_select={final_select} Setfinal_select={Setfinal_select} finalhi={finalhi} setFinalhi={setFinalhi}  Navi={Navi} setNavi={setNavi} />
        } />
        <Stack.Screen name="MakeKit_Tarp_NoCar" options={{ headerShown: false }} children={
          ({ navigation }) => <MakeKit_Tarp_NoCar navigation={navigation} ansList={ansList} final_select={final_select} Setfinal_select={Setfinal_select} finalhi={finalhi} setFinalhi={setFinalhi}  Navi={Navi} setNavi={setNavi} />
        } />
        <Stack.Screen name="MakeKit_Mat" options={{ headerShown: false }} children={
          ({ navigation }) => <MakeKit_Mat navigation={navigation} ansList={ansList} final_select={final_select} Setfinal_select={Setfinal_select} finalhi={finalhi} setFinalhi={setFinalhi}  Navi={Navi} setNavi={setNavi} />
        } />
        <Stack.Screen name="MakeKit_Table" options={{ headerShown: false }} children={
          ({ navigation }) => <MakeKit_Table navigation={navigation} ansList={ansList} final_select={final_select} Setfinal_select={Setfinal_select} finalhi={finalhi} setFinalhi={setFinalhi}  Navi={Navi} setNavi={setNavi} />
        } />
        <Stack.Screen name="MakeKit_Chair" options={{ headerShown: false }} children={
          ({ navigation }) => <MakeKit_Chair navigation={navigation} ansList={ansList} final_select={final_select} Setfinal_select={Setfinal_select} finalhi={finalhi} setFinalhi={setFinalhi}  Navi={Navi} setNavi={setNavi} />
        } />
        <Stack.Screen name="MakeKit_Heater_Energy" options={{ headerShown: false }} children={
          ({ navigation }) => <MakeKit_Heater_Energy navigation={navigation} ansList={ansList} final_select={final_select} Setfinal_select={Setfinal_select} finalhi={finalhi} setFinalhi={setFinalhi}  Navi={Navi} setNavi={setNavi} />
        } />
        <Stack.Screen name="MakeKit_Heater_NoEnergy" options={{ headerShown: false }} children={
          ({ navigation }) => <MakeKit_Heater_NoEnergy navigation={navigation} ansList={ansList} final_select={final_select} Setfinal_select={Setfinal_select} finalhi={finalhi} setFinalhi={setFinalhi}  Navi={Navi} setNavi={setNavi} />
        } />
        <Stack.Screen name="MakeKit_Cooler_Energy" options={{ headerShown: false }} children={
          ({ navigation }) => <MakeKit_Cooler_Energy navigation={navigation} ansList={ansList} final_select={final_select} Setfinal_select={Setfinal_select} finalhi={finalhi} setFinalhi={setFinalhi}  Navi={Navi} setNavi={setNavi} />
        } />
        <Stack.Screen name="MakeKit_Cooler_NoEnergy" options={{ headerShown: false }} children={
          ({ navigation }) => <MakeKit_Cooler_NoEnergy navigation={navigation} ansList={ansList} final_select={final_select} Setfinal_select={Setfinal_select} finalhi={finalhi} setFinalhi={setFinalhi}  Navi={Navi} setNavi={setNavi} />
        } />
        <Stack.Screen name="MakeKit_Etc" options={{ headerShown: false }} children={
          ({ navigation }) => <MakeKit_Etc navigation={navigation} ansList={ansList} final_select={final_select} Setfinal_select={Setfinal_select} finalhi={finalhi} setFinalhi={setFinalhi}  Navi={Navi} setNavi={setNavi} />
        } />
        <Stack.Screen name="MakeKit_Kitc" options={{ headerShown: false }} children={
          ({ navigation }) => <MakeKit_Kitc navigation={navigation} ansList={ansList} final_select={final_select} Setfinal_select={Setfinal_select} finalhi={finalhi} setFinalhi={setFinalhi}  Navi={Navi} setNavi={setNavi} />
        } />
        <Stack.Screen name="MakeKit_Setiment" options={{ headerShown: false }} children={
          ({ navigation }) => <MakeKit_Setiment navigation={navigation} ansList={ansList} final_select={final_select} Setfinal_select={Setfinal_select} finalhi={finalhi} setFinalhi={setFinalhi}  Navi={Navi} setNavi={setNavi} />
        } />
        <Stack.Screen name="MakeKit_Box" options={{ headerShown: false }} children={
          ({ navigation }) => <MakeKit_Box navigation={navigation} ansList={ansList} final_select={final_select} Setfinal_select={Setfinal_select} finalhi={finalhi} setFinalhi={setFinalhi}  Navi={Navi} setNavi={setNavi} />
        } />
        <Stack.Screen name="FinalKit" options={{ headerShown: false }} children={
          ({ navigation }) => <MakeKit_Box navigation={navigation} ansList={ansList} final_select={final_select} Setfinal_select={Setfinal_select} finalhi={finalhi} setFinalhi={setFinalhi}  Navi={Navi} setNavi={setNavi} />
        } />

      </Stack.Navigator>
      <StatusBar></StatusBar>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'gray'
  },
});
