import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import {Picker} from '@react-native-picker/picker';
import {ScrollView,Text,Image, View, StyleSheet, SafeAreaView, Button, Alert} from 'react-native';
import { Dimensions } from 'react-native';


const App = ({ route , navigation }) => {

  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  const tent1='바람막이 텐트'
  const tent2='바람막이 텐트'
  const tent3='바람막이 텐트'
  const [selectedLanguage, setSelectedLanguage] = useState();
  
  const Selete_box = (props) =>{
    return(
    <View style={styles.selete_box}>
        <Image source={require("../assets/images/MakeKit/retangle.png")} style={styles.footer_selate_img}/>
          <View style={{left:10}}>
            <Text style={{fontSize:10}}>{props.tent_name}</Text>
            <Text style={{fontSize:10}}>선택한 옵션: {props.value}</Text>

              <Picker selectedValue={selectedLanguage}
                onValueChange={(itemValue, itemIndex) => setSelectedLanguage(itemValue)} 
                  style={{width:185, height:0 , borderWidth: 2,borderStyle: 'solid'}}>
                <Picker.Item label={props.option1} value="option1" style={styles.picker_value} />
                <Picker.Item label={props.option2} value="option2" style={styles.picker_value}/>
                <Picker.Item label={props.option3} value="option3" style={styles.picker_value}/>
              </Picker>
  
          </View>
            <Text style={{marginTop:1,left:-50}}>{props.money}원</Text>
      </View>
    )};
  

return (
  <SafeAreaView>
    <View style={styles.header}>
      <Image source={require("../assets/images/MakeKit/tent.png")} style={{marginTop:12}}/>
        <Text style={styles.header_title}>텐트</Text>
      <View style={{flexDirection: 'column',marginTop: 45,alignItems:'flex-start' }}>
          <Text style={styles.header_content1}>바람이 두려운 당신에게</Text>
          <Text style={styles.header_content2}>바람막이 텐트,돔텐트, 원터치 텐트를 추천합니다.</Text>
      </View>
    </View>
  <Image source={require("../assets/images/MakeKit/Top_line.png")}/>
    

  <ScrollView pagingEnabled style={styles.Content_list} horizontal = {true}>  
    <Image source={require("../assets/images/MakeKit/retangle.png")} style={styles.Content_image}/>
      <View style={styles.Content_explain}>
        <Text style={styles.Content_title}>돔텐트</Text>
          <Text style={styles.Content}>텐트와 관련된 설명 간단하게 근데 이해하기는 쉽게 그러면 이거는 언제 어케 쓰냐 진심 미치겠네 미치겠네 미치겠네 미치겠네 미치겠네 미치겠네 미치겠네 미치겠네 미치겠네미쳐돌아 돌아 내가 미챠 버려 홀라라랄</Text>
      </View>
    
    <View style={{flexDirection: 'row'}} >
     <Image source={require("../assets/images/MakeKit/slid_button.png")} style={{marginTop:17, height:100}}/>
      <View style={{width:300, height:100, backgroundColor:'grey'}}></View>
    </View>
  </ScrollView>

  <View style={styles.Content_list}>  
    <Image source={require("../assets/images/MakeKit/retangle.png")} style={styles.Content_image}/>
      <View style={styles.Content_explain}>
        <Text style={styles.Content_title}>돔텐트</Text>
          <Text style={styles.Content}>텐트와 관련된 설명 간단하게 근데 이해하기는 쉽게 그러면 이거는 언제 어케 쓰냐 진심 미치겠네 미치겠네 미치겠네 미치겠네 미치겠네 미치겠네 미치겠네 미치겠네 미치겠네미쳐돌아 돌아 내가 미챠 버려 홀라라랄</Text>
      </View>
  </View>

  <View style={styles.Content_list}>  
    <Image source={require("../assets/images/MakeKit/retangle.png")} style={styles.Content_image}/>
      <View style={styles.Content_explain}>
        <Text style={styles.Content_title}>돔텐트</Text>
          <Text style={styles.Content}>텐트와 관련된 설명 간단하게 근데 이해하기는 쉽게 그러면 이거는 언제 어케 쓰냐 진심 미치겠네 미치겠네 미치겠네 미치겠네 미치겠네 미치겠네 미치겠네 미치겠네 미치겠네미쳐돌아 돌아 내가 미챠 버려 홀라라랄</Text>
      </View>
  </View>

  <View style={styles.footer_selate}>
    <Text>내가 선택한 물품</Text>
      <Selete_box tent_name="바람막이 텐트" option1="뭘까" option2="정말 뭘까"option3="알 수 없다" money="15000"/>
  </View>


   
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