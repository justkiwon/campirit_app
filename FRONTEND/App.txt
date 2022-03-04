import { StatusBar } from 'expo-status-bar';
import React, { useState,} from 'react';
import { StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MainPage from './screens/MainPage.js';
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
import MakeKit from './screens/MakeKit.js';
import StartPage from './screens/StartPage.js';

const Stack = createNativeStackNavigator();

export default function App() {
  const[ansList, setansList] = useState(
    {
      A1:"",
      A2:"",
      A3:"",
      A4:0,
      A5:0,
      A6:0,
      A7:0,
      A8:0,
      A9:0,
      Af:0,
    });

  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="StartPage">
          
        <Stack.Screen name="QuizStart" component={QuizStart} options={{ headerShown: false }}/>
        <Stack.Screen name="QuizSituation" options={{ headerShown: false }} children={
          ({navigation}) => <QuizSituation navigation={navigation} ansList={ansList}/>
          }/>
        <Stack.Screen name= "Quiz1" options={{ headerShown: false }} children={
          ({navigation}) => <Quiz1 navigation={navigation} ansList={ansList} setansList={setansList}/>
          }/>
        <Stack.Screen name="Quiz2" options={{ headerShown: false }}children={
          ({navigation}) => <Quiz2 navigation={navigation} ansList={ansList} setansList={setansList}/>
          }/>
        <Stack.Screen name="Quiz3" options={{ headerShown: false }}children={
          ({navigation}) => <Quiz3 navigation={navigation} ansList={ansList} setansList={setansList}/>
          }/>
        <Stack.Screen name="Quiz4" options={{ headerShown: false }}children={
          ({navigation}) => <Quiz4 navigation={navigation} ansList={ansList} setansList={setansList}/>
          }/>
        <Stack.Screen name="Quiz5" options={{ headerShown: false }}children={
          ({navigation}) => <Quiz5 navigation={navigation} ansList={ansList} setansList={setansList}/>
          }/>
        <Stack.Screen name="Quiz6" options={{ headerShown: false }}children={
          ({navigation}) => <Quiz6 navigation={navigation} ansList={ansList} setansList={setansList}/>
          }/>
        <Stack.Screen name="Quiz7" options={{ headerShown: false }}children={
          ({navigation}) => <Quiz7 navigation={navigation} ansList={ansList} setansList={setansList}/>
          }/>
        <Stack.Screen name="Quiz8" options={{ headerShown: false }}children={
          ({navigation}) => <Quiz8 navigation={navigation} ansList={ansList} setansList={setansList}/>
          }/>
        <Stack.Screen name="Quiz9" options={{ headerShown: false }}children={
          ({navigation}) => <Quiz9 navigation={navigation} ansList={ansList} setansList={setansList}/>
          }/>
        <Stack.Screen name="Quizf" options={{ headerShown: false }}children={
          ({navigation}) => <Quizf navigation={navigation} ansList={ansList} setansList={setansList}/>
          }/>
          <Stack.Screen name="MakeKit" options={{ headerShown: false }}children={
          ({navigation}) => <MakeKit navigation={navigation} ansList={ansList} />
          }/>
        <Stack.Screen name="StartPage" component={StartPage} options={{ headerShown: false }} />
        <Stack.Screen name="MainPage" component={MainPage} options={{ headerShown: false }}/>
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