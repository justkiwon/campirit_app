import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import {TouchableOpacity,ScrollView,Text,Image, View, StyleSheet, SafeAreaView, Button, Dimensions,Alert} from 'react-native';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function StartPage({ ansList,navigation }) { 


  const tent = {
    1:{
      name:"돔텐트",
      info:"텐트와 관련된 설명 간단하게 근데 이해하기는 쉽게 그러면 이거는 언제 어케 쓰냐 진심 미치겠네 미치겠네 미치겠네 미치겠네 미치겠네 미치겠네 미치겠네 미치겠네 미치겠네미쳐돌아 돌아 내가 미챠 버려 홀라라랄",
    },
    2:{
      name:"티피텐트",
      info:"텐트와 관련된 설명 간단하게 근데 이해하기는 쉽게 그러면 이거는 언제 어케 쓰냐 진심 미치겠네 미치겠네 미치겠네 미치겠네 미치겠네 미치겠네 미치겠네 미치겠네 미치겠네미쳐돌아 돌아 내가 미챠 버려 홀라라랄",
    },
    3:{
      name:"헥사텐트",
      info:"텐트와 관련된 설명 간단하게 근데 이해하기는 쉽게 그러면 이거는 언제 어케 쓰냐 진심 미치겠네 미치겠네 미치겠네 미치겠네 미치겠네 미치겠네 미치겠네 미치겠네 미치겠네미쳐돌아 돌아 내가 미챠 버려 홀라라랄",
    },
  };

  const product1= {
    1:{
      name: "tent1",
      price: 1000,
      option1: "쉬파파파파욜로",
      option2: "뛰빠빠빠빠욜로",
      option3: "뛰빠뛰빠뒤빠빠",
    },
    2:{
      name: "tent2",
      price: 2000,
      option1: "빨간거",
      option2: "쉬빨간거",
      option3: "핵빨간거",
    },
    3:{
      name: "tent3",
      price: 3000,
      option1: "빨간거",
      option2: "쉬빨간거",
      option3: "핵빨간거",
    },
    4:{
      name: "tent4",
      price: 400000,      
      option1: "빨간거",
      option2: "쉬빨간거",
      option3: "핵빨간거",
    }
  };

  const product2= {
    21:{
      name: "tent2-1",
      price: 1000,
      option1: "쉬파파파파욜로",
      option2: "뛰빠빠빠빠욜로",
      option3: "뛰빠뛰빠뒤빠빠",
    },
    22:{
      name: "tent2-2",
      price: 2000,
      option1: "빨간거",
      option2: "쉬빨간거",
      option3: "핵빨간거",
    },
    23:{
      name: "tent2-3",
      price: 3000,
      option1: "빨간거",
      option2: "쉬빨간거",
      option3: "핵빨간거",
    },
    24:{
      name: "tent2-4",
      price: 400000,      
      option1: "빨간거",
      option2: "쉬빨간거",
      option3: "핵빨간거",
    }
  };

  const product3= {
    31:{
      name: "tent3-1",
      price: 1000,
      option1: "쉬파파파파욜로",
      option2: "뛰빠빠빠빠욜로",
      option3: "뛰빠뛰빠뒤빠빠",
    },
    32:{
      name: "tent3-2",
      price: 2000,
      option1: "빨간거",
      option2: "쉬빨간거",
      option3: "핵빨간거",
    },
    33:{
      name: "tent3-3",
      price: 3000,
      option1: "빨간거",
      option2: "쉬빨간거",
      option3: "핵빨간거",
    },
    34:{
      name: "tent3-4",
      price: 400000,      
      option1: "빨간거",
      option2: "쉬빨간거",
      option3: "핵빨간거",
    }
  };



  const [hi, setHi] = useState({});

//_________________________하단 selete객체 추가__________________
const PickerAdd =(key,name,price,select_option) =>{
  const newPicker = {
    ...hi,
  [key]:{ "name":name,
          "price":price,
          "select_option":select_option
        },
};
setHi(newPicker);
};

const Add = (key,name, price,option1 ,option2, option3) =>{
  const newAdd = {
    ...hi,
  [key]:{"name":name,
         "price":price,
         "option1":option1,
         "option2":option2,
         "option3":option3,
        },
};
setHi(newAdd);
};

//________________________하단 selete 객체 삭제___________________-

const Delete_product = (key) => {
  const newProduct ={...hi}; // toDos 객체를 ...으로 불러와서 다시 만들어 새 객체를 만듬
  delete newProduct[key]; //이 오브젝트에서 key를 삭제함
  setHi(newProduct);
};


//========================================== Product_info_detail (side)function =====================================
const Product_info_detail =({name,price}) => {
  return(
    <View style={styles.products}>
             <View style={{flexDirection: 'column'}}>
             <Image source={require("./assets/images/MakeKit/retangle.png")}/> 
              <Text>{name}</Text>  
              <Text>{price}</Text> 
            </View>         
            </View>
  )};

  //========================================= Selete box function ========================================
  const Selete_box = ({tent_name,keyy,money,option1,option2,option3}) =>{
    return(
      <View>
    <View style={styles.select_box}>
        <Image source={require("./assets/images/MakeKit/retangle.png")} style={styles.footer_selate_img}/>
          <View style={{left:windowWidth/35, width:windowWidth/2.3}}>
            <Text style={{fontSize:11.5}}>{tent_name}</Text>
            <Text style={{fontSize:11.5,marginTop:windowHeight/46}}>선택한 옵션: {hi[keyy].select_option}</Text>  
          </View>
            <Text style={{marginTop:windowHeight/200,left:-windowWidth/8}}>{money}원</Text>
      </View>
      <View style={{flexDirection:"row", position:"absolute", left:windowWidth/3.8, marginTop:windowHeight/11, width:windowWidth/2.2,height:windowHeight/21}}>
          <TouchableOpacity style={styles.Picker_Button} onPress={()=>{PickerAdd(keyy,tent_name,money,option1); }}><Text>{option1}</Text></TouchableOpacity>
          <TouchableOpacity style={styles.Picker_Button} onPress={()=>{PickerAdd(keyy,tent_name,money,option2)}}><Text>{option2}</Text></TouchableOpacity>
          <TouchableOpacity style={styles.Picker_Button} onPress={()=>{PickerAdd(keyy,tent_name,money,option3)} }><Text>{option3}</Text></TouchableOpacity>
            </View> 
          <TouchableOpacity style={styles.Delete_Button} onPress={() => Delete_product(keyy)}>
            <Image source={require("./assets/images/MakeKit/canel_button.png")}/>
          </TouchableOpacity>
        </View>
    )};

console.log(hi);
//console.log(product2);

{/*_______________________________________________________________REAL MAIN_______________________________________________________________________________________- */}





return (
  <SafeAreaView>
{/*====================================== header ---------------------------------------------------- */}
    <View style={styles.header}>
      <Image source={require("./assets/images/MakeKit/tent.png")} style={{marginTop:windowHeight/64}}/>
        <Text style={styles.header_title}>텐트</Text>
      
    </View>
  <Image source={require("./assets/images/MakeKit/Top_line.png")}/>

{/*---------------------------------------메인 내용1 -------------------------------------------------- */}
  <ScrollView style={styles.Content_list} horizontal = {true}>  
      <View style={styles.Content_explain}>
          <Text style={styles.Content_title}>{tent[1].name}</Text>
            <Text style={styles.Content}>{tent[1].info}</Text>
      </View>    
        <View style={{flexDirection: 'row'}} >
        <Image source={require("./assets/images/MakeKit/slid_button2.png")} style={styles.slid_button}/>
          <View style={styles.specific_item}>
                {Object.keys(product1).map((key) =>(
                <View key={key}>
            <Product_info_detail name={product1[key].name} price={product1[key].price}/>
            <TouchableOpacity style={styles.check_button} onPress={()=>{ Add(key, product1[key].name, product1[key].price, product1[key].option1, product1[key].option2, product1[key].option3)}}>
                <Text>BUY</Text>
              </TouchableOpacity>
                </View>
              ))}
                  </View>
                </View>
  </ScrollView>  
{/*---------------------------------------메인 내용2 -------------------------------------------------- */}
<ScrollView style={styles.Content_list} horizontal = {true}>  
      <View style={styles.Content_explain}>
          <Text style={styles.Content_title}>{tent[2].name}</Text>
            <Text style={styles.Content}>{tent[2].info}</Text>
      </View>    
        <View style={{flexDirection: 'row'}} >
        <Image source={require("./assets/images/MakeKit/slid_button2.png")} style={styles.slid_button}/>
          <View style={styles.specific_item}>
                {Object.keys(product2).map((key) =>(
                <View key={key}>
            <Product_info_detail name={product2[key].name} price={product2[key].price}/>
              <TouchableOpacity style={styles.check_button} onPress={()=>{ Add(key, product2[key].name, product2[key].price,product2[key].option1,product2[key].option2,product2[key].option3)}}>
                <Text>BUY</Text>
              </TouchableOpacity>
                </View>
              ))}
                  </View>
                </View>
  </ScrollView>
{/*---------------------------------------메인 내용3 -------------------------------------------------- */}
<ScrollView style={styles.Content_list} horizontal = {true}>  
      <View style={styles.Content_explain}>
          <Text style={styles.Content_title}>{tent[3].name}</Text>
            <Text style={styles.Content}>{tent[3].info}</Text>
      </View>    
        <View style={{flexDirection: 'row'}} >
        <Image source={require("./assets/images/MakeKit/slid_button2.png")} style={styles.slid_button}/>
          <View style={styles.specific_item}>
                {Object.keys(product3).map((key) =>(
                <View key={key}>
            <Product_info_detail name={product3[key].name} price={product3[key].price}/>
            <TouchableOpacity style={styles.check_button} onPress={()=>{ Add(key, product3[key].name, product3[key].price,product3[key].option1,product3[key].option2,product3[key].option3)}}>
                <Text>BUY</Text>
              </TouchableOpacity>
                </View>
              ))}
                  </View>
                </View>
  </ScrollView>
{/*--------------------------------------- 하단에 셀렉트 창 -------------------------------------------------- */}
  <View style={styles.footer_selate}>
    <Text style={{left:windowWidth/15,zIndex:-1, position:'absolute'}}>내가 선택한 물품</Text>
      <ScrollView horizontal = {true} style={{marginTop:windowHeight/80}}> 
      {Object.keys(hi).map((key) =>(
         <View key={key}>
            <Selete_box keyy={key} tent_name={hi[key].name} money={hi[key].price} option1={hi[key].option1} option2={hi[key].option2} option3={hi[key].option3}/>
         </View>
       ))}
        </ScrollView> 
  </View>


{/*--------------------------------------- footer 캠핑카 ----------------------------------------------------- */}
<TouchableOpacity  onPress = {() => navigation.navigate("StartPage")}>
  <Image source={require("./assets/images/MakeKit/next_move_button.png")} style={{left:windowWidth/1.2}}/>
  </TouchableOpacity>
  <Image source={require("./assets/images/MakeKit/camping_car.png")} style={{position:'absolute',bottom: -windowHeight/44}}/>
  <Image source={require("./assets/images/MakeKit/footer.png")} style={{justifyContent: 'flex-end',bottom:-windowHeight/39}}/>

   
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
    marginTop: windowHeight/95,
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
  check_button:{
    alignItems:"center", 
    justifyContent:"center",
    backgroundColor:"#ff8c00",
    position:"absolute",
    marginTop:windowHeight/7.2,
    borderRadius:50,
    left:windowWidth/5.6,
    width:windowWidth/9,
    height:windowHeight/32,
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
    zIndex:0,
    marginRight:windowWidth/30,
    marginTop:windowHeight/50,
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
  Picker_Button:{
  backgroundColor: "#f0ffff",
  width:"33%",
  height:windowHeight/22.5, 
  alignItems:"center", 
  justifyContent:"center"
  },
  Delete_Button:{ 
    alignItems:"center", 
    justifyContent:"center", 
    height:windowHeight/25,  
    width:windowWidth/15,  
    marginTop:windowHeight/350.2,   
    left: windowWidth/1.45,
    position:'absolute',}
});































//============================================ Product_info1 =========================================================
const Product_info1 = ({name,info,h}) =>{
  return(
<ScrollView style={styles.Content_list} horizontal = {true}>  
  <View style={styles.Content_explain}>
      <Text style={styles.Content_title}>{name}</Text>
        <Text style={styles.Content}>{info}</Text>
  </View>    
    <View style={{flexDirection: 'row'}} >
     <Image source={require("./assets/images/MakeKit/slid_button2.png")} style={styles.slid_button}/>
      <View style={styles.specific_item}>
            {Object.keys(product1).map((key) =>(
            <View key={key}>
        <Product_info_detail name={product1[key].name} price={product1[key].price}/>
        <View style={styles.check_button}>
          <Button  color="grey" title="BUY" onPress={()=>{ Add(key, product1[key].name, product1[key].price)}} />
        </View>
            </View>
          ))}
              </View>
            </View>
</ScrollView>
)};