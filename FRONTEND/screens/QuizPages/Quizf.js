import React, { useRef, useState, useEffect} from 'react';
import { 
  StyleSheet,
  Image,
  Text, 
  View, 
  Pressable,   
  Dimensions,
  Platform,
  StatusBar,
  Animated,
  Alert,} from 'react-native';
import { useFonts } from 'expo-font';
import { getStatusBarHeight } from 'react-native-status-bar-height';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const StatusBarHeight =
    Platform.OS === 'ios' ? getStatusBarHeight(true) : StatusBar.currentHeight;

  export default function Quizf({navigation, ansList, setansList}) {
    const [chosen1, setChosen1] = useState(false);
    const [chosen2, setChosen2] = useState(false);

    const Bus = useRef(new Animated.Value(114)).current 
    useEffect(() => {
      Animated.timing(
        Bus,{
          toValue: 129,
          duration: 1000,
          useNativeDriver: true,}
      ).start();
    }, [Bus])

    const CanNEXT = () =>{
      let num = 0;
  
      chosen1==true ? (num += 1) : null;
      chosen2==true ? (num += 1) : null;
  
      num == 1 ? NEXT() : OnemoreTime();
    }   
  
    const OnemoreTime = () => {
      Alert.alert(
        '',
        '한 가지만 선택해주세요',
        [{text: '다시 고르기', onPress: () => null}],
      )
    }

    const NEXT =()=>{
      navigation.navigate('Loading1')

      chosen1 ? setansList({ ...ansList, Af: 1 }) : null
      chosen2 ? setansList({ ...ansList, Af: 2 }) : null
    }

    const [loaded] = useFonts({
      YiSunShin_B: require('../../assets/fonts/이순신돋움체B.ttf'),
      Roboto:require('../../assets/fonts/Roboto.ttf'),
    });
    
    if (!loaded) {
      return null;
    }

    console.log(ansList);

    return (
        <View style={styles.container}>
{/* ///////////////////////////////<<<< Header : 파란물결 >>>>>////////////////////////////////////// */}
          <View style={styles.header}>
            <Image 
              style={styles.headerWave}
              source={require("../../assets/images/Quiz/headerWave.png")}/>
          </View>
{/* ////////////////////////////<<<< Body : 질문, 선택지, NEXT버튼 >>>>>///////////////////////////////////////// */}
          <View style={styles.body}>
            <Image
              source={require("../../assets/images/Quiz/TentSpace.png")}
              style={styles.TentSpace}/>
            <Image
              source={require("../../assets/images/Quiz/FocusLine.png")}
              style={styles.FocusLine}/>
            <View style={styles.quiz}>
              <Text style={styles.quizText}> 7. </Text>
              <Text style={styles.quizText}>
                사진에서 보여지는{"\n"}
                공간이 필요하다고 생각하시나요?
              </Text>
            </View>
            <View style={styles.answers}>

            <View style={styles.ans}>
                  <Pressable
                    onPress={()=>{setChosen1(prev => !prev)}}>                   
                    <View style={{...styles.btn_Ans, backgroundColor: chosen1 ? "#F3AE58" : "#D9D9D9"}}>
                    <Text style={styles.btn_Ans2}>
                    저기서 요리하고, 먹고, 쉬면 좋겠다
                    </Text>
                  </View>
                  </Pressable> 
                </View>

                <View style={styles.ans}>
                  <Pressable
                    onPress={()=>{setChosen2(prev => !prev)}}>                   
                    <View style={{...styles.btn_Ans, backgroundColor: chosen2 ? "#F3AE58" : "#D9D9D9"}}>
                    <Text style={styles.btn_Ans2}>
                    굳이..?
                    </Text>
                  </View>
                  </Pressable> 
                </View>


            </View>
            <Pressable style={styles.btn_Next} onPress={CanNEXT}>
              <Text style={styles.btn_nextText}>NEXT</Text>
            </Pressable>
          </View>
 {/* //////////////////////////<<<< Footer : 자동차 >>>>>/////////////////////////////////////////// */}
          <View style = {styles.footer}>
            <View style = {styles.process}>
            <Animated.Image
                source={require("../../assets/images/Quiz/movingCar.png")}
                style={[styles.movingCar, {
                  transform: [{ translateX: Bus }]
                }]}/>
              <Text style = {styles.processText}>45%</Text>
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
  flex: 0.75,
  marginTop:StatusBarHeight,
  backgroundColor:"white",

  alignItems: "center",
},
headerWave:{
  width: windowWidth,
  height: 197,
  justifyContent: "center",
},
headerText:{
  color:"white",
  fontWeight:"400",
  fontSize:15,
  fontFamily:'YiSunShin_B',

  marginBottom:windowHeight*9/32/3,
  marginLeft :windowWidth/40,
},
////////////////////////////<<<< Body : 질문, 선택지, NEXT버튼 >>>>>/////////////////////////////////////////
body:{
  flex: 2,
  backgroundColor:"white",

  alignItems:'center',
  justifyContent: "center",
},
TentSpace:{

},
FocusLine:{
  marginTop:-windowHeight/5,
  marginBottom:windowHeight*5/8/17,
},
quiz:{
  marginBottom: windowHeight*5/8/17,
  marginLeft :-windowWidth/6,

  flexDirection:"row",
},
quizText:{
  // backgroundColor:"gray",
  fontWeight:"700",
  fontSize:20,
  fontFamily:"Roboto",
},
answers:{
  // backgroundColor:"blue",
  marginHorizontal:windowWidth/10,
  alignSelf:"stretch",
},

ans:{
  marginBottom: windowHeight/50,
  flexDirection: "row",
  alignSelf: "center",
  justifyContent: "center"
},

btn_Ans:{
  borderRadius:35,
  width:windowWidth/1.5,
  borderRadius: 8,
  overflow: 'hidden',
  alignItems:'center',
  justifyContent:'center',
},


btn_Ans2:{
  fontSize: 16,
  marginVertical: 6
},

btn_ansText:{
  fontWeight:"400",
  fontSize:14,
  fontFamily:"Roboto",
},
btn_Next:{
  backgroundColor:'#FFD300',
  width:windowWidth/1.8,
  height:windowHeight*5/8/12,
  borderRadius:13,  

  marginTop:windowHeight/20,
  marginBottom:-windowHeight/50,
  justifyContent:"center",
  alignItems:"center",
},
btn_nextText:{
  color:"white",
  fontWeight:"400",
  fontSize:12,
  fontFamily:'YiSunShin_B',
},
//////////////////////////<<<< Footer : 자동차 >>>>>///////////////////////////////////////////
footer:{
  flex: 0.18,
  backgroundColor:"white",
},
process:{
  // backgroundColor:"blue",

  flexDirection:"row",
  justifyContent:"flex-end",
},
movingCar:{
  marginBottom:-3,
  marginRight:windowWidth-110,
},
processText:{
  alignSelf:"flex-end",
  marginBottom:3,
  marginRight:5,

  color:"#497860",
  fontWeight:"400",
  fontSize:12,
  fontFamily:'YiSunShin_B',
},
});