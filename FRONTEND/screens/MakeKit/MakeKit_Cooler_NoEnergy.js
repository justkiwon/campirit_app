import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import {TouchableOpacity,ScrollView,Text,Image, View, StyleSheet, SafeAreaView, Button, Dimensions,Alert, Pressable,Modal,ImageBackground} from 'react-native';
//import ProductDetail from './screens/ProductDetail';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function StartPage({ navigation }) { 


  const tent = {
    1:{
      name:"차량용 타프",
      info:"텐트와 관련된 설명 간단하게 근데 이해하기는 쉽게 그러면 이거는 언제 어케 쓰냐 진심 미치겠네 미치겠네 미치겠네 미치겠네 미치겠네 미치겠네 미치겠네 미치겠네 미치겠네미쳐돌아 돌아 내가 미챠 버려 홀라라랄",
    },
    2:{
      name:"헥사 타프",
      info:"텐트와 관련된 설명 간단하게 근데 이해하기는 쉽게 그러면 이거는 언제 어케 쓰냐 진심 미치겠네 미치겠네 미치겠네 미치겠네 미치겠네 미치겠네 미치겠네 미치겠네 미치겠네미쳐돌아 돌아 내가 미챠 버려 홀라라랄",
    },
    3:{
      name:"헥사타프",
      info:"텐트와 관련된 설명 간단하게 근데 이해하기는 쉽게 그러면 이거는 언제 어케 쓰냐 진심 미치겠네 미치겠네 미치겠네 미치겠네 미치겠네 미치겠네 미치겠네 미치겠네 미치겠네미쳐돌아 돌아 내가 미챠 버려 홀라라랄",
    },
  };
 
  const product1 = {
    1:{
      name: "tent1",
      price: 1000,
      option1: "쉬파파파파욜로",
      option2: "뛰빠빠빠빠욜로",
      option3: "뛰빠뛰빠뒤빠빠",
      detail: "세상에서 가장 큰",
      jpg: "",
    },
    2:{
      name: "tent2",
      price: 2000,
      option1: "빨간거",
      option2: "쉬빨간거",
      option3: "핵빨간거",
      detail: "제일 이상한",
      jpg: "",
    }, 
    3:{
      name: "tent3",
      price: 3000,
      option1: "빨간거",
      option2: "쉬빨간거",
      option3: "핵빨간거",
      detail: "거대한",
      jpg: "",
    },
    4:{
      name: "tent4",
      price: 400000,      
      option1: "빨간거",
      option2: "쉬빨간거",
      option3: "핵빨간거",
      detail: "완전 아싸",
      jpg: "",
    }
  };
 
  const product2= {
    21:{
      name: "tent2-1",
      price: 1000,
      option1: "쉬파파파파욜로",
      option2: "뛰빠빠빠빠욜로",
      option3: "뛰빠뛰빠뒤빠빠",
      detail: "국내에서 제일 잘 팔리는",
      jpg: "",
    },
    22:{
      name: "tent2-2",
      price: 2000,
      option1: "빨간거",
      option2: "쉬빨간거",
      option3: "핵빨간거",
      detail: "완전 인싸템",
      jpg: "",
    },
    23:{
      name: "tent2-3",
      price: 3000,
      option1: "빨간거",
      option2: "쉬빨간거",
      option3: "핵빨간거",
      detail: "정말 커다란",
      jpg: "",
    },
    24:{
      name: "tent2-4",
      price: 400000,      
      option1: "빨간거",
      option2: "쉬빨간거",
      option3: "핵빨간거",
      detail: "획기적인",
      jpg: "",
    }
  };
 
  const product3= {
    31:{
      name: "tent3-1",
      price: 1000,
      option1: "쉬파파파파욜로",
      option2: "뛰빠빠빠빠욜로",
      option3: "뛰빠뛰빠뒤빠빠",
      detail: "피면 편안한",
      jpg: "",
    },
    32:{
      name: "tent3-2",
      price: 2000,
      option1: "빨간거",
      option2: "하하ㅏ하",
      option3: "안녕하쇼",
      detail: "엽기적인",
      jpg: "",
    },
    33:{
      name: "tent3-3",
      price: 3000,
      option1: "빨갱이",
      option2: "쉬빨간거",
      option3: "핵빨간거",
      detail: "감성템 1위인",
      jpg: "",
    },
    34:{
      name: "tent3-4",
      price: 400000,
      option1: "빨간거",
      option2: "쉬빨간거",
      option3: "핵빨간거",
      detail: "가성비 좋은",
      jpg: "",
    }
  };

  const [hi, setHi] = useState({});


//_________________________하단 selete객체 추가__________________

const [modalVisible, setModalVisible] = useState(false);

const [morden_select, setMorden_select] = useState(["detail","name","price"]);


const PickerAdd =(key,name,price,select_option) =>{
  const newPicker = {
    ...hi,
  [key]:{ "name":name,
          "price":price,
          "select_option":select_option,
          "visible":false,
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
         "visible":true,
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
const Product_info_detail =({detail,name,price}) => {
  return(
    <View style={styles.products}>
             <View style={{flexDirection: 'column'}}>
               <Pressable onPress={()=>{setModalVisible(true) ,setMorden_select([detail,name,price])}}>
             <Image
                style = {styles.product_image} 
                source={require("../../assets/images/MakeKit/rectangle.png")}/> 
               </Pressable>
              <Text style ={{marginLeft: windowWidth/50, marginTop: windowHeight/300, fontSize:18, color:'#213063',fontWeight:'bold' }}>{name}</Text>  
              <Text style ={{marginLeft: windowWidth/50}}>{price}</Text> 
            </View>         
    </View>
  )};

  //========================================= Selete box function ========================================
  const Selete_box = ({tent_name,keyy,money,option1,option2,option3}) =>{
    return(
      <View>
    <View style={styles.select_box}>
        <Image source={require("../../assets/images/MakeKit/rectangle.png")} style={styles.footer_selate_img}/>
          <View style={{left:windowWidth/35, width:windowWidth/2.3}}>
            <Text style={{fontSize:18, fontWeight: 'bold', marginTop: windowWidth/80, color: '#213063'}}>{tent_name}</Text>
            <Text style={{fontSize:14,marginTop:windowHeight/200, fontWeight: 'bold'}}>선택한 옵션: {hi[keyy].select_option}</Text>  
          </View>
            <Text style={{marginTop:windowHeight/50,left:-windowWidth/20, fontSize: 16}}>{money} 원</Text>
      </View>
      <View style={{flexDirection:"row", position:"absolute", left:windowWidth/3.8, marginTop:windowHeight/11, width:windowWidth/1.78, height:windowHeight/21}}>
          <TouchableOpacity style={{...styles.Picker_Button, height: hi[keyy].visible ? windowHeight/22.5 : 0 }} onPress={()=>{PickerAdd(keyy,tent_name,money,option1)}}><Text>{option1}</Text></TouchableOpacity>
          <TouchableOpacity style={{...styles.Picker_Button, height: hi[keyy].visible ? windowHeight/22.5 : 0 }} onPress={()=>{PickerAdd(keyy,tent_name,money,option2);}}><Text>{option2}</Text></TouchableOpacity>
          <TouchableOpacity style={{...styles.Picker_Button, height: hi[keyy].visible ? windowHeight/22.5 : 0 }} onPress={()=>{PickerAdd(keyy,tent_name,money,option3);}}><Text>{option3}</Text></TouchableOpacity>
            </View>
          <TouchableOpacity onPress={() => Delete_product(keyy)}>
            <Image source={require("../../assets/images/MakeKit/canel_button.png")} style={styles.Delete_Button}/>
          </TouchableOpacity>
        </View>
    )};

console.log(hi);
console.log(morden_select);

{/*_______________________________________________________________REAL MAIN_______________________________________________________________________________________- */}





return (
  <SafeAreaView>

{/**________________________________________________________Modal chang______________________________________ */}
<View style={styles.centeredView}>
      <Modal
         animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
{/**_____________________________________________________________ Header _______________________________________________________________ */}
            <View style={{width:windowWidth/1.1,height:windowHeight/10, marginBottom:3,flexDirection:"row"}}>
              <View style={{width:windowWidth/30,height:windowHeight/10, backgroundColor:"#213063"}} />
                <View style={{flexDirection:"column", width:windowWidth/1.5,left:windowWidth/50}}>
                  <Text style={{marginTop:windowHeight/65, fontSize:15}}>{morden_select[0]}</Text>
                  <Text style={{fontSize:25}}>{morden_select[1]}</Text>
                </View>
                  <Text style={{marginTop:windowHeight/35, fontSize:17}}>{morden_select[2]}원</Text>
            </View>
{/**_______________________________________________________________ main Scroll View __________________________________________________ */}
              <View style={{height:windowHeight/1.5,width:windowWidth/1.1,backgroundColor:"grey"}}>
                <ScrollView horizontal={false}>
                <Text style={styles.modalText}>Hello World!</Text>
                  <View  style={{width:300,height:5000, backgroundColor:"yellow"}}/>
                </ScrollView>
              </View>   
            
            <Pressable style={[styles.buttonClose]}  onPress={() => setModalVisible(!modalVisible)}>
            <Image source={require("../../assets/images/ProductDetail/Button_close.png")}/>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>

{/*====================================== Modal finish, header ---------------------------------------------------- */}
<View style={styles.header}>
      <ImageBackground source={require("../../assets/images/MakeKit/aircon.png")} style={styles.header_image}>
        <TouchableOpacity onPress={() => navigation.navigate('MainPage')}>
          <Image source={require("../../assets/images/MakeKit/reback.png")} style={styles.reback_button}/>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  

{/*---------------------------------------메인 내용1 -------------------------------------------------- */}
  <ScrollView style={styles.Content_list} horizontal = {true} showsHorizontalScrollIndicator={false} bounces={false}>  
      <View style={styles.Content_explain}>
          <Text style={styles.Content_title}>{tent[1].name}</Text>
            <Text style={styles.Content}>{tent[1].info}</Text>
      </View> 

      <View style={{flexDirection: 'column' }} >
          <Image source={require("../../assets/images/MakeKit/slid_button2.png")} style={styles.slid_button}/>
          <View style={styles.specific_item}>
                {Object.keys(product1).map((key) =>(
                  <View key={key}>
                    <Product_info_detail detail={product1[key].detail} name={product1[key].name} price={product1[key].price}/>
                      <TouchableOpacity style={styles.check_button} onPress={()=>{ Add(key, product1[key].name, product1[key].price, product1[key].option1, product1[key].option2, product1[key].option3)}}>
                      <Text style={styles.buy_button}>BUY</Text>
                    </TouchableOpacity>
                  </View> 
              ))}
          </View>           
      </View>
  </ScrollView>  
{/*---------------------------------------메인 내용2 -------------------------------------------------- */}
<ScrollView style={styles.Content_list} horizontal = {true}showsHorizontalScrollIndicator={false} bounces={false}>  
      <View style={styles.Content_explain}>
          <Text style={styles.Content_title}>{tent[2].name}</Text>
            <Text style={styles.Content}>{tent[2].info}</Text>
      </View>    
        <View style={{flexDirection: 'row'}} >
        <Image source={require("../../assets/images/MakeKit/slid_button2.png")} style={styles.slid_button}/>
          <View style={styles.specific_item}>
                {Object.keys(product2).map((key) =>(
                <View key={key}>
            <Product_info_detail detail={product2[key].detail} name={product2[key].name} price={product2[key].price}/>
              <TouchableOpacity style={styles.check_button} onPress={()=>{ Add(key, product2[key].name, product2[key].price,product2[key].option1,product2[key].option2,product2[key].option3)}}>
              <Text style={styles.buy_button}>BUY</Text>
              </TouchableOpacity>
                </View>
              ))}
                  </View>
                </View>
  </ScrollView>
{/*---------------------------------------메인 내용3 -------------------------------------------------- */}
<ScrollView style={styles.Content_list} horizontal = {true} showsHorizontalScrollIndicator={false} bounces={false}>  
    <View style={styles.Content_explain}>
        <Text style={styles.Content_title}>{tent[3].name}</Text>
          <Text style={styles.Content}>{tent[3].info}</Text>
    </View>    
      <View style={{flexDirection: 'row'}} >
      <Image source={require("../../assets/images/MakeKit/slid_button2.png")} style={styles.slid_button}/>
        <View style={styles.specific_item}>
              {Object.keys(product3).map((key) =>(
              <View key={key}>
          <Product_info_detail detail={product3[key].detail} name={product3[key].name} price={product3[key].price}/>
          <TouchableOpacity style={styles.check_button} onPress={()=>{ Add(key, product3[key].name, product3[key].price,product3[key].option1,product3[key].option2,product3[key].option3)}}>
              <Text style={styles.buy_button}>BUY</Text>
            </TouchableOpacity>
              </View>
            ))}
                </View>
              </View>
</ScrollView>
{/*--------------------------------------- 하단에 셀렉트 창 -------------------------------------------------- */}
<View style={styles.footer_selate}>
    <Text style={{left:windowWidth/15,zIndex:-1, position:'absolute', fontWeight:'bold', fontSize:16, marginTop: windowHeight/50}}>내가 선택한 물품</Text>
      <ScrollView horizontal = {true} style={{marginTop:windowHeight/100}}> 
      {Object.keys(hi).map((key) =>(
         <View key={key}>
            <Selete_box keyy={key} tent_name={hi[key].name} money={hi[key].price} option1={hi[key].option1} option2={hi[key].option2} option3={hi[key].option3}/>
         </View>
       ))}
        </ScrollView> 
  </View>


{/*--------------------------------------- footer 캠핑카 ----------------------------------------------------- */}
<TouchableOpacity  onPress = {() => navigation.navigate("StartPage")}>
  <Image source={require("../../assets/images/MakeKit/next_move_button.png")} style={styles.nextbutton}/>
  </TouchableOpacity>
  <Image source={require("../../assets/images/MakeKit/camping_car.png")} style={{position:'absolute',bottom: -windowHeight/15}}/>
  <Image source={require("../../assets/images/MakeKit/footer.png")} style={{position:'absolute', justifyContent: 'flex-end',bottom:-windowHeight/15}}/>   
    <StatusBar/>
  </SafeAreaView>
)
}


const styles = StyleSheet.create({

  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: windowHeight/45
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },


  header: {
    //marginTop: windowHeight/80,
    flexDirection: 'row',
  },

  header_image:{
    width: windowWidth,
    resizeMode:'contain',
    marginBottom: windowHeight/50,
  },

  Content_list: {
    marginRight : windowWidth/50,
    marginTop: windowHeight/95,
    left: windowWidth/23,
    marginRight: windowWidth/23,
    flexDirection: 'row',
    
  },
  header_title: {
    marginTop: windowHeight/15,
    fontSize: 30,
    backgroundColor: 'red',
    fontWeight: '900',
    textAlign: 'center'
  },
  header_content1: {
    fontSize: 20,
    textAlign: 'center'
  },
  header_content2: {
    fontSize: 20,
    textAlign: 'center'
  },

  reback_button:{
    
    width: windowWidth/2.3,
    marginRight: windowWidth/30,
    alignSelf: 'flex-end',
    resizeMode: 'contain'
  },

  
  product_image:{
    resizeMode: 'stretch', 
    alignSelf: 'flex-start',
    width: windowWidth/3.5,
    height:windowWidth/3.5,
    marginLeft: windowWidth/50,
  },


  products:{
    marginLeft: windowWidth/20,
    flexDirection: 'row',
    width:windowWidth/3.5,
    //backgroundColor:"grey",
  },

  check_button:{
    alignItems:"center", 
    justifyContent:"center",
    position:"absolute",
    marginTop:windowHeight/6.5,
    borderRadius:2,
    left:windowWidth/4,
    width:windowWidth/9,
    height:windowHeight/60,
    backgroundColor: '#F3AE58'
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
    //backgroundColor:'yellow',    
  },
  Content_title: {
    fontSize:20,
    //backgroundColor: 'pink',
    fontWeight: 'bold'
  },

  slid_button:{
    position:'absolute',
    resizeMode: 'contain',
    marginTop:windowHeight/8,
    left:-windowWidth/7, 
    height:windowHeight/20,
    width: windowWidth/6,
    //backgroundColor: 'pink',

  },
  specific_item :{
    
    flexDirection: 'row',
    marginRight: windowWidth/20,
  },

  nextbutton:{
    resizeMode: 'contain',
    width: windowWidth/5,
    height: windowHeight/30,
    marginTop: windowHeight/80,
    marginLeft: windowWidth/1.3,
    alignItems: 'flex-end'
  },




  Content: {
    marginTop: windowHeight/100,
    fontSize:15,
  },
  footer_selate: {
    height:windowHeight/6,
    //backgroundColor: 'green',
  },
  select_box: {
    zIndex:0,
    marginRight:windowWidth/30,
    marginTop:windowHeight/30,
    left:windowWidth/70,
    height: windowHeight/8.2,
    width:windowWidth/1.2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 1,
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


  buy_button:{
    fontWeight: 'bold',
    fontSize: 15
  },

  Picker_Button:{
  backgroundColor: "#FDE7C6",
  width:"33%",
  height:windowHeight/22.5, 
  alignItems:"center", 
  justifyContent:"center",
  marginRight:windowWidth/100
  },

  Delete_Button:{ 
    //alignItems:"center",
    resizeMode: 'contain', 
    justifyContent:"center" ,
    height: windowHeight/20,  
    width:windowWidth/20,  
    marginTop:-windowHeight/7,   
    left: windowWidth/1.23,
    //backgroundColor:'tomato',
    position:'absolute',
  }
});






























/*
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

*/