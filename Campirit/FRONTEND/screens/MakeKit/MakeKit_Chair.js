import React, { useState } from 'react';
import {
  TouchableOpacity,
  ScrollView, Text, Image,
  View,
  StatusBar,
  StyleSheet, SafeAreaView, Button, Dimensions, Alert, Pressable, Modal, ImageBackground
} from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
//import ProductDetail from './screens/ProductDetail';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const StatusBarHeight =
  Platform.OS === 'ios' ? 0 : StatusBar.currentHeight + 10;
{/*const StatusBarHeight =
  Platform.OS === 'ios' ?: 0  windowHeight / 100;*/}

const fontsize =
  Platform.OS === 'ios' ? 1 : 1.3;

export default function MakeKit_Tent({ navigation }) {
  const tent = {
    1: {
      name: "돔텐트",
      info: "텐트와 관련된 설명 간단하게 근데 이해하기는 쉽게 그러면 이거는 언제 어케 쓰냐 진심 미치겠네 미치겠네 미치겠네 미치겠네 미치겠네 미치겠네 미치겠네 미치겠네 미치겠네미쳐돌아 돌아 내가 미챠 버려 홀라라랄",
    },
    2: {
      name: "티피텐트",
      info: "텐트와 관련된 설명 간단하게 근데 이해하기는 쉽게 그러면 이거는 언제 어케 쓰냐 진심 미치겠네 미치겠네 미치겠네 미치겠네 미치겠네 미치겠네 미치겠네 미치겠네 미치겠네미쳐돌아 돌아 내가 미챠 버려 홀라라랄",
    },
    3: {
      name: "헥사텐트",
      info: "텐트와 관련된 설명 간단하게 근데 이해하기는 쉽게 그러면 이거는 언제 어케 쓰냐 진심 미치겠네 미치겠네 미치겠네 미치겠네 미치겠네 미치겠네 미치겠네 미치겠네 미치겠네미쳐돌아 돌아 내가 미챠 버려 홀라라랄",
    },
  };

  const product1 = {
    1: {
      name: "tent1",
      price: 1000,
      option1: "쉬파파파파욜로",
      option2: "뛰빠빠빠빠욜로",
      option3: "뛰빠뛰빠뒤빠빠",
      detail: "세상에서 가장 큰",
      jpg: "",
      detail_url: "../../assets/images/Product/T_MAX-01.png",
    },
    2: {
      name: "tent2",
      price: 2000,
      option1: "빨간거",
      option2: "쉬빨간거",
      option3: "핵빨간거",
      detail: "제일 이상한",
      jpg: "",
      detail_url: "../../assets/images/Product/T_MAX-01.png",
    },
    3: {
      name: "tent3",
      price: 3000,
      option1: "빨간거",
      option2: "쉬빨간거",
      option3: "핵빨간거",
      detail: "거대한",
      jpg: "",
      detail_url: "../../assets/images/Product/T_MAX-01.png",
    },
    4: {
      name: "tent4",
      price: 400000,
      option1: "빨간거",
      option2: "쉬빨간거",
      option3: "핵빨간거",
      detail: "완전 아싸",
      jpg: "",
      detail_url: "../../assets/images/Product/T_MAX-01.png",
    }
  };

  const product2 = {
    21: {
      name: "tent2-1",
      price: 1000,
      option1: "쉬파파파파욜로",
      option2: "뛰빠빠빠빠욜로",
      option3: "뛰빠뛰빠뒤빠빠",
      detail: "국내에서 제일 잘 팔리는",
      jpg: "",
      detail_url: "../../assets/images/Product/T_MAX-01.png",
    },
    22: {
      name: "tent2-2",
      price: 2000,
      option1: "빨간거",
      option2: "쉬빨간거",
      option3: "핵빨간거",
      detail: "완전 인싸템",
      jpg: "",
      detail_url: "../../assets/images/Product/T_MAX-01.png",
    },
    23: {
      name: "tent2-3",
      price: 3000,
      option1: "빨간거",
      option2: "쉬빨간거",
      option3: "핵빨간거",
      detail: "정말 커다란",
      jpg: "",
      detail_url: "../../assets/images/Product/T_MAX-01.png",
    },
    24: {
      name: "tent2-4",
      price: 400000,
      option1: "빨간거",
      option2: "쉬빨간거",
      option3: "핵빨간거",
      detail: "획기적인",
      jpg: "",
      detail_url: "../../assets/images/Product/T_MAX-01.png",
    }
  };

  const product3 = {
    31: {
      name: "tent3-1",
      price: 1000,
      option1: "쉬파파파파욜로",
      option2: "뛰빠빠빠빠욜로",
      option3: "뛰빠뛰빠뒤빠빠",
      detail: "피면 편안한",
      jpg: "",
      detail_url: "../../assets/images/Product/T_MAX-01.png",
    },
    32: {
      name: "tent3-2",
      price: 2000,
      option1: "빨간거",
      option2: "하하ㅏ하",
      option3: "안녕하쇼",
      detail: "엽기적인",
      jpg: "",
      detail_url: "../../assets/images/Product/T_MAX-01.png",
    },
    33: {
      name: "tent3-3",
      price: 3000,
      option1: "빨갱이",
      option2: "쉬빨간거",
      option3: "핵빨간거",
      detail: "감성템 1위인",
      jpg: "",
      detail_url: "../../assets/images/Product/T_MAX-01.png",
    },
    34: {
      name: "tent3-4",
      price: 400000,
      option1: "빨간거",
      option2: "쉬빨간거",
      option3: "핵빨간거",
      detail: "가성비 좋은",
      jpg: "",
      detail_url: "../../assets/images/Product/T_MAX-01.png",
    }
  };

  const [hi, setHi] = useState({});


  //_________________________하단 selete객체 추가__________________

  const [modalVisible, setModalVisible] = useState(false);

  const [morden_select, setMorden_select] = useState(["detail", "name", "price", '../../assets/images/Product/T_MAX-01.png']);


  const PickerAdd = (key, name, price, select_option) => {
    const newPicker = {
      ...hi,
      [key]: {
        "name": name,
        "price": price,
        "select_option": select_option,
        "visible": false,
      },
    };
    setHi(newPicker);
  };

  const Add = (key, name, price, option1, option2, option3) => {
    const newAdd = {
      ...hi,
      [key]: {
        "name": name,
        "price": price,
        "option1": option1,
        "option2": option2,
        "option3": option3,
        "visible": true,
      },
    };
    setHi(newAdd);
  };

  //________________________하단 selete 객체 삭제___________________-

  const Delete_product = (key) => {
    const newProduct = { ...hi }; // toDos 객체를 ...으로 불러와서 다시 만들어 새 객체를 만듬
    delete newProduct[key]; //이 오브젝트에서 key를 삭제함
    setHi(newProduct);
  };


  //========================================== Product_info_detail (side)function =====================================
  const Product_info_detail = ({ detail, name, price, detail_url }) => {
    return (
      <View style={styles.products}>
        <View style={{ flexDirection: 'column' }}>
          <Pressable onPress={() => { setModalVisible(true), setMorden_select([detail, name, price, detail_url]) }}>
            <Image
              style={styles.product_image}
              source={require("../../assets/images/MakeKit/rectangle.png")} />
          </Pressable>
          <Text style={styles.content_name}>{name}</Text>
          <Text style={styles.content_price}>{price}</Text>
        </View>
      </View>
    )
  };

  //========================================= Selete box function ========================================
  const Selete_box = ({ tent_name, keyy, money, option1, option2, option3 }) => {
    return (
      <View>
        <View style={styles.select_box}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Image source={require("../../assets/images/MakeKit/rectangle.png")} style={styles.footer_selate_img} />

            <View style={{ flexDirection: 'column' }}>
              <View style={{ width: windowWidth / 1.5, flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={{ fontSize: 18 / fontsize, fontWeight: 'bold', color: '#213063', marginTop: windowWidth / 80, }}>{tent_name}</Text>
                <Text style={{ fontSize: 16 / fontsize, marginTop: windowWidth / 80 }}>{money} 원</Text>
                <TouchableOpacity onPress={() => Delete_product(keyy)}>
                  <Image source={require("../../assets/images/MakeKit/canel_button.png")} style={styles.Delete_Button} />
                </TouchableOpacity>
              </View>

              <Text style={{ fontSize: 14 / fontsize, marginTop: windowHeight / 500, fontWeight: 'bold' }}>선택한 옵션: {hi[keyy].select_option}</Text>

              <View style={{ flexDirection: "row", width: windowWidth / 1.7, height: windowHeight / 21, marginTop: windowHeight / 100 }}>
                <TouchableOpacity style={{ ...styles.Picker_Button, height: hi[keyy].visible ? windowHeight / 22.5 : 0 }} onPress={() => { PickerAdd(keyy, tent_name, money, option1) }}><Text style={styles.picker_content}>{option1}</Text></TouchableOpacity>
                <TouchableOpacity style={{ ...styles.Picker_Button, height: hi[keyy].visible ? windowHeight / 22.5 : 0 }} onPress={() => { PickerAdd(keyy, tent_name, money, option2); }}><Text style={styles.picker_content} >{option2}</Text></TouchableOpacity>
                <TouchableOpacity style={{ ...styles.Picker_Button, height: hi[keyy].visible ? windowHeight / 22.5 : 0 }} onPress={() => { PickerAdd(keyy, tent_name, money, option3); }}><Text style={styles.picker_content} >{option3}</Text></TouchableOpacity>
              </View >
            </View>

          </View>

        </View >

      </View >
    )
  };

  console.log(hi);
  //console.log(morden_select);

  {/*_______________________________________________________________REAL MAIN_______________________________________________________________________________________- */ }

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
              <View style={{ width: windowWidth / 1.1, height: windowHeight / 10, marginBottom: 3, flexDirection: "row" }}>
                <View style={{ width: windowWidth / 30, height: windowHeight / 10, backgroundColor: "#213063" }} />
                <View style={{ flexDirection: "column", width: windowWidth / 1.5, left: windowWidth / 50 }}>
                  <Text style={{ marginTop: windowHeight / 65, fontSize: 15 }}>{morden_select[0]}</Text>
                  <Text style={{ fontSize: 25 }}>{morden_select[1]}</Text>
                </View>
                <Text style={{ marginTop: windowHeight / 35, fontSize: 17 }}>{morden_select[2]}원</Text>
              </View>
              {/**_______________________________________________________________ main Scroll View __________________________________________________ */}
              <View style={{ height: windowHeight / 1.5, width: windowWidth / 1.1, backgroundColor: "grey" }}>
                <ScrollView horizontal={false} style={{ alignContent: 'flex-start' }}>
                  <Text style={styles.modalText}>Hello World!</Text>
                  <Image style={{ width: windowWidth / 1.15, alignSelf: 'flex-start', resizeMode: 'contain', alignSelf: 'center', backgroundColor: "yellow" }} source={require('../../assets/images/Product/T_MAX-01.png')} />
                </ScrollView>
              </View>

              <Pressable style={[styles.buttonClose]} onPress={() => setModalVisible(!modalVisible)}>
                <Image source={require("../../assets/images/ProductDetail/Button_close.png")} />
              </Pressable>
            </View>
          </View>
        </Modal>
      </View>

      {/*====================================== Modal finish, header ---------------------------------------------------- */}

      <View style={{ justifyContent: 'space-between', height: windowHeight }}>
        <View style={styles.header}>
          <ImageBackground source={require("../../assets/images/MakeKit/chair.png")} style={styles.header_image}>
            <TouchableOpacity onPress={() => navigation.navigate('MainPage')}>
              <Image source={require("../../assets/images/MakeKit/reback.png")} style={styles.reback_button} />
            </TouchableOpacity>
          </ImageBackground>
        </View>


        {/*---------------------------------------메인 내용1 -------------------------------------------------- */}
        <View style={styles.maincontain}>
          <ScrollView style={styles.Content_list} horizontal={true} showsHorizontalScrollIndicator={false} bounces={false}>
            <View style={styles.Content_explain} >
              <Text style={styles.Content_title}>{tent[1].name}</Text>
              <Text style={styles.Content}>{tent[1].info}</Text>
            </View>
            <View style={{ flexDirection: "column", alignSelf: "center" }} >
              <View style={styles.specific_item}>
                {Object.keys(product1).map((key) => (
                  <View key={key} >
                    <Product_info_detail detail={product1[key].detail} name={product1[key].name} price={product1[key].price} detail_url={product1[key].detail_url} />
                    <TouchableOpacity style={styles.check_button} onPress={() => { Add(key, product1[key].name, product1[key].price, product1[key].option1, product1[key].option2, product1[key].option3) }}>
                      <Text style={styles.buy_button}>BUY</Text>
                    </TouchableOpacity>
                  </View>
                ))}
              </View>
            </View>
          </ScrollView>
          {/*---------------------------------------메인 내용2 -------------------------------------------------- */}
          <ScrollView style={styles.Content_list} horizontal={true} showsHorizontalScrollIndicator={false} bounces={false}>
            <View style={styles.Content_explain}>
              <Text style={styles.Content_title}>{tent[2].name}</Text>
              <Text style={styles.Content}>{tent[2].info}</Text>
            </View>
            <View style={{ flexDirection: 'row' }} >
              <View style={styles.specific_item}>
                {Object.keys(product2).map((key) => (
                  <View key={key}>
                    <Product_info_detail detail={product2[key].detail} name={product2[key].name} price={product2[key].price} detail_url={product2[key].detail_url} />
                    <TouchableOpacity style={styles.check_button} onPress={() => { Add(key, product2[key].name, product2[key].price, product2[key].option1, product2[key].option2, product2[key].option3) }}>
                      <Text style={styles.buy_button}>BUY</Text>
                    </TouchableOpacity>
                  </View>
                ))}
              </View>
            </View>
          </ScrollView>

        </View>
        {/*--------------------------------------- 하단에 셀렉트 창 -------------------------------------------------- */}
        <View style={styles.footer_selate}>
          <Text style={{ left: windowWidth / 30, zIndex: -1, fontWeight: 'bold', fontSize: 18 / fontsize, textDecorationLine: 'underline' }}>내가 선택한 물품</Text>
          <ScrollView horizontal={true} style={{ marginTop: windowHeight / 200 }}>
            {Object.keys(hi).map((key) => (
              <View key={key}>
                <Selete_box keyy={key} tent_name={hi[key].name} money={hi[key].price} option1={hi[key].option1} option2={hi[key].option2} option3={hi[key].option3} />
              </View>
            ))}
          </ScrollView>
        </View>

        {/*--------------------------------------- footer 캠핑카 ----------------------------------------------------- */}
        <View style={{ justifyContent: 'flex-end' }}>
          <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
            <Image source={require("../../assets/images/MakeKit/camping_car.png")} />
            <TouchableOpacity onPress={() => navigation.navigate("MainPage")}>
              <Image source={require("../../assets/images/MakeKit/next_move_button.png")} style={styles.nextbutton} />
            </TouchableOpacity>
          </View>
          <Image source={require("../../assets/images/MakeKit/footer.png")} />
        </View>
      </View >

      <StatusBar />
    </SafeAreaView >
  )
}


const styles = StyleSheet.create({

  centeredView: {
    justifyContent: "center",
    alignItems: "center",
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
    //backgroundColor: 'green',
    marginTop: StatusBarHeight,

  },


  header_image: {
    width: windowWidth,
    //backgroundColor: 'blue',
    resizeMode: 'contain',
  },

  reback_button: {
    width: windowWidth / 2.3,
    marginRight: windowWidth / 30,
    alignSelf: 'flex-end',
    resizeMode: 'contain'
  },

  maincontain: {
    height: windowHeight / 1.5,
    marginTop: windowHeight / 60,

  },

  Content_list: {
    marginRight: windowWidth / 50,
    marginBottom: windowHeight / 100,
    marginRight: windowWidth / 50,
    marginLeft: windowWidth / 50,
    flexDirection: 'row',
    height: windowHeight / 5,
  },

  header_title: {
    marginTop: windowHeight / 15,
    fontSize: 30 / fontsize,
    //backgroundColor: 'red',
    fontWeight: '900',
    textAlign: 'center'
  },
  header_content1: {
    fontSize: 20 / fontsize,
    textAlign: 'center'
  },
  header_content2: {
    fontSize: 20 / fontsize,
    textAlign: 'center'
  },


  product_image: {
    resizeMode: 'stretch',
    alignSelf: 'flex-start',
    width: windowWidth / 3.5,
    height: windowWidth / 3.5,
    marginLeft: windowWidth / 50,
  },


  products: {
    marginLeft: windowWidth / 20,
    flexDirection: 'row',
    width: windowWidth / 3.5,
    //backgroundColor: "grey",
  },

  check_button: {
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    marginTop: windowHeight / 6,
    borderRadius: 2,
    marginLeft: windowWidth / 4,
    width: windowWidth / 9,
    height: windowHeight / 50,
    backgroundColor: '#F3AE58'
  },


  Content_explain: {
    alignItems: 'flex-start',
    height: windowHeight / 6,
    width: windowWidth / 1.8,
    flexDirection: 'column'
    //backgroundColor:'yellow',    
  },


  Content_title: {
    fontSize: 20 / fontsize,
    fontWeight: 'bold'
  },

  Content: {
    marginTop: windowHeight / 100,
    fontSize: 17 / fontsize,
    textAlign: 'left',
    //backgroundColor: 'pink'
  },


  content_name: {
    marginLeft: windowWidth / 50,
    marginTop: windowHeight / 500,
    fontSize: 20 / fontsize,
    color: '#213063',
    fontWeight: 'bold'
  },

  content_price: {
    marginLeft: windowWidth / 50,
    fontSize: 16 / fontsize

  },


  picker_content: {
    fontSize: 15 / fontsize,
  },

  specific_item: {
    flexDirection: 'row',
    marginRight: windowWidth / 50,
  },

  nextbutton: {
    resizeMode: 'contain',
    width: windowWidth / 5,
    height: windowHeight / 30,
    marginRight: windowWidth / 30,
    alignItems: 'flex-end'
  },


  footer_selate: {
    height: windowHeight / 6,
    justifyContent: 'flex-start',
  },

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

  footer_selate_img: {
    marginLeft: windowWidth / 50,
    marginRight: windowWidth / 70,
    height: windowHeight / 9.55,
    width: windowWidth / 4.4
  },

  picker_value: {
    borderRadius: 70,
  },


  buy_button: {
    fontWeight: 'bold',
    fontSize: 14 / fontsize
  },

  Picker_Button: {
    backgroundColor: "#FDE7C6",
    width: "33%",
    height: windowHeight / 22.5,
    alignItems: "center",
    justifyContent: "center",
    marginRight: windowWidth / 100
  },

  Delete_Button: {
    resizeMode: 'contain',
    justifyContent: "center",
    width: windowWidth / 20,
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