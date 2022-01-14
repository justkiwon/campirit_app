import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import {Picker} from '@react-native-picker/picker';
import {TouchableOpacity,ScrollView,Text,Image, View, StyleSheet, SafeAreaView, Button, Dimensions,Alert} from 'react-native';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function StartPage({ ansList, route , navigation }) { 
  const tent1='바람막이 텐트'
  const tent2='바람막이 텐트'
  const tent3='바람막이 텐트'
  const [selectedLanguage, setSelectedLanguage] = useState();


  //========================================= Selete box function ========================================
  const Selete_box = (props) =>{
    return(
    <View style={styles.select_box}>
        <Image source={require("../assets/images/MakeKit/retangle.png")} style={styles.footer_selate_img}/>
          <View style={{left:10}}>
            <Text style={{fontSize:10}}>{props.tent_name}</Text>
            <Text style={{fontSize:10}}>선택한 옵션: {props.value}</Text>
  
              <Picker selectedValue={selectedLanguage}
                onValueChange={(itemValue, itemIndex) => setSelectedLanguage(itemValue)} 
                  style={{width:185, height:0 , borderWidth: 2,borderStyle: 'solid'}}>
                <Picker.Item label={props.option1} value="option1" style={styles.picker_value}/>
                <Picker.Item label={props.option2} value="option2" style={styles.picker_value}/>
                <Picker.Item label={props.option3} value="option3" style={styles.picker_value}/>
              </Picker>
  
          </View>
            <Text style={{marginTop:1,left:-50}}>{props.money}원</Text>
      </View>
    )};
//============================================ Product_info function =========================================================
const Product_info = (props) =>{
    return(
    <View>
    <View style={styles.Content_explain}>
        <Text style={styles.Content_title}>{props.name}</Text>
          <Text style={styles.Content}>{props.info}</Text>
    </View>    
      <View style={{flexDirection: 'row'}} >
       <Image source={require("../assets/images/MakeKit/more.png")} style={styles.slid_button}/>
        <View style={styles.specific_item}>
            </View>
          </View>
        </View>
)};
const Product_detail = (props) =>{
  <View style={{flexDirection: 'row'}} >
       <Image source={require("../assets/images/MakeKit/more.png")} style={styles.slid_button}/>
        <View style={styles.specific_item}>
  <View style={styles.products}>
  <View style={{flexDirection: 'column'}}>
  <Image source={require("../assets/images/MakeKit/retangle.png")}/> 
   <Text>안녕</Text>  
   <Text>3000원</Text> 
 </View>         
     <TouchableOpacity>
       <Image source={require("../assets/images/MakeKit/product_select.png")} style={{marginTop:windowHeight/8, left: -windowWidth/17}} />
     </TouchableOpacity>
 </View>
 </View>
          </View>
};
return (
  <SafeAreaView>
{/*====================================== header ---------------------------------------------------- */}
    <View style={styles.header}>
      <Image source={require("../assets/images/MakeKit/tent.png")} style={{marginTop:windowHeight/64}}/>
        <Text style={styles.header_title}>텐트</Text>
      
    </View>
  <Image source={require("../assets/images/MakeKit/Top_line.png")}/>

{/*---------------------------------------메인 내용1 -------------------------------------------------- */}
<ScrollView style={styles.Content_list} horizontal = {true}>
  <Product_info name="돔텐트" info="텐트와 관련된 설명 간단하게 근데 이해하기는 쉽게 그러면 이거는 언제 어케 쓰냐 진심 미치겠네 미치겠네 미치겠네 미치겠네 미치겠네 미치겠네 미치겠네 미치겠네 미치겠네미쳐돌아 돌아 내가 미챠 버려 홀라라랄"/>
</ScrollView>  
{/*---------------------------------------메인 내용2 -------------------------------------------------- */}
  <Product_info name="돔텐트" info="텐트와 관련된 설명 간단하게 근데 이해하기는 쉽게 그러면 이거는 언제 어케 쓰냐 진심 미치겠네 미치겠네 미치겠네 미치겠네 미치겠네 미치겠네 미치겠네 미치겠네 미치겠네미쳐돌아 돌아 내가 미챠 버려 홀라라랄"/>
  
{/*---------------------------------------메인 내용3 -------------------------------------------------- */}
  <Product_info name="돔텐트" info="텐트와 관련된 설명 간단하게 근데 이해하기는 쉽게 그러면 이거는 언제 어케 쓰냐 진심 미치겠네 미치겠네 미치겠네 미치겠네 미치겠네 미치겠네 미치겠네 미치겠네 미치겠네미쳐돌아 돌아 내가 미챠 버려 홀라라랄"/>
  
{/*--------------------------------------- 하단에 셀렉트 창 -------------------------------------------------- */}
  <View style={styles.footer_selate}>
    <Text>내가 선택한 물품</Text>
      <ScrollView horizontal = {true}> 
        <Selete_box tent_name="바람막이 텐트" option1="뭘까" option2="정말 뭘까"option3="알 수 없다" money="15000"/>
        <Product_detail/>
        <Selete_box tent_name="바람막이 텐트" option1="뭘까" option2="정말 뭘까"option3="알 수 없다" money="15000"/>
        
        </ScrollView>
  </View>


{/*--------------------------------------- footer 캠핑카 ----------------------------------------------------- */}
<TouchableOpacity  onPress = {() => navigation.navigate("MainPage")}>
  <Image source={require("../assets/images/MakeKit/next_move_button.png")} style={{left:windowWidth/1.2}}/>
  </TouchableOpacity>
  <Image source={require("../assets/images/MakeKit/camping_car.png")} style={{position:'absolute',bottom: -windowHeight/44}}/>
  <Image source={require("../assets/images/MakeKit/footer.png")} style={{justifyContent: 'flex-end',bottom:-windowHeight/39}}/>

   
    <StatusBar/>
  </SafeAreaView>
)
}

const styles = StyleSheet.create({
  header: {
    marginTop: windowHeight/45,
    flexDirection: 'row',
  },
  Content_list: {
    marginRight : windowWidth/50,
    marginTop: windowHeight/31.4,
    left: windowWidth/23,
    flexDirection: 'row',
  },
  header_title: {
    marginTop: windowHeight/14.5,
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
  //Content_image: {
    //marginTop: 20,
   // borderRadius:50,
   // backgroundColor: 'tomato',
  //},
  Content_explain: {
    alignItems:'flex-start',
    height:windowHeight/6,
    width:windowHeight/3.5,
 //   backgroundColor:'yellow',    
  },
  Content_title: {
    fontSize:20,
  },
  slid_button:{
    position:'absolute',
    marginTop:windowHeight/7.2,
    left:-windowWidth/11.5, 
    height:windowHeight/50
  },
  specific_item :{
    left: windowWidth/100,
    marginTop: windowHeight/80, 
    flexDirection: 'row',
    // backgroundColor:'tomato',
  },
  Content: {
    fontSize:13,
  },
  footer_selate: {
    height:windowHeight/6,
    //backgroundColor: 'green',
  },
  select_box: {
    marginRight:windowWidth/30,
    marginTop:-windowHeight/750,
    left:windowWidth/70,
    height: windowHeight/8.2,
    width:windowWidth/1.4,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 2,
    borderStyle: 'dashed',
  },
  footer_selate_img: {
    marginTop:windowHeight/130,
    left: windowWidth/88,
    height:windowHeight/9.55,
    width:windowWidth/4.4
  },
  picker_value:{
    borderRadius: 70,
  },
  products:{
    marginLeft: windowWidth/15,
    flexDirection: 'row',
    width:windowWidth/3.5,
    //backgroundColor:"grey",
  },
});
