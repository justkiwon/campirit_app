import React, { useState } from 'react';
import { Alert, Modal, StyleSheet, Text, Pressable,Dimensions, View, ScrollView ,Image} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const ProductDetail = (product_detail, product_name, price, visible)=> {
  const [modalVisible, setModalVisible] = useState(false);
  return (
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
                  <Text style={{marginTop:windowHeight/65, fontSize:15}}>{product_detail}</Text>
                  <Text style={{fontSize:25}}>{product_name}</Text>
                </View>
                  <Text style={{marginTop:windowHeight/35, fontSize:17}}>{price}원</Text>
            </View>
{/**_______________________________________________________________ main Scroll View __________________________________________________ */}
              <View style={{height:windowHeight/1.5,width:windowWidth/1.1,backgroundColor:"grey"}}>
                <ScrollView horizontal={false}>
                <Text style={styles.modalText}>Hello World!</Text>
                  <View  style={{width:300,height:5000, backgroundColor:"yellow"}}/>
                </ScrollView>
              </View>
            
            <Pressable style={[styles.buttonClose]}  onPress={() => setModalVisible(!modalVisible)}>
            <Image source={require("../assets/images/ProductDetail/Button_close.png")}/>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable style={[styles.button, styles.buttonOpen]} onPress={() => setModalVisible(true)}>
        <Text style={styles.textStyle}>Show Modal</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    width:windowWidth,
    height:windowHeight/300,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: windowHeight/22,
  },
  modalView: {
    marginTop:-windowHeight/110,
    width:windowWidth/1.05,
    height:windowHeight/1.1,
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    marginTop:windowHeight/45,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default ProductDetail;