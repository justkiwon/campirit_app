import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Image,
  Dimensions
} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const StatusBarHeight =
  Platform.OS === 'ios' ? 100 : StatusBar.currentHeight + 10;

const hi = {
  1: {
    "name": "tent1",
    "price": 1000,
    "select_option": "쉬파파파파욜로",
    "visible": false,
    jpg: "",
  },
  2: {
    "name": "tent2",
    "price": 2000, "select_option": "핵빨간거",
    "visible": true,
    jpg: "",
  },
  3: {
    "name": "tent3",
    "price": 3000,
    "select_option": "빨간거",
    "visible": true,
    jpg: "",
  },
  430: {
    "name": "tent4",
    "price": 4000,
    "select_option": "쉬파파파파욜로",
    "visible": false,
    jpg: "",
  },

};




export default function App() {


  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  const StatusBarHeight =
    Platform.OS === 'ios' ? 100 : StatusBar.currentHeight + 10;

  const hi = {
    1: {
      "name": "tent1",
      "price": 1000,
      "select_option": "쉬파파파파욜로",
      "visible": false,
      jpg: "",
    },
    2: {
      "name": "tent2",
      "price": 2000, "select_option": "핵빨간거",
      "visible": true,
      jpg: "",
    },
    3: {
      "name": "tent3",
      "price": 3000,
      "select_option": "빨간거",
      "visible": true,
      jpg: "",
    },
    430: {
      "name": "tent4",
      "price": 4000,
      "select_option": "쉬파파파파욜로",
      "visible": false,
      jpg: "",
    },

  };


  const Check = ({ }) => {
    var count;
    count = Object.keys(hi).length;
    const keys = Object.keys(hi)
    for (let i = 0;i < count;i++) {
      if (keys[i] / 10 == 1) {
        return (
          <View>
            <Image
              style={styles.tent}
              source={require("./assets/images/MainPage/tent.png")}
            />
          </View>
        );

      }
      else
        return (<View>
          <Image
            style={styles.tent}
            source={require("./assets/images/MainPage/tent.png")}
          />
        </View>);
    }

  }


  return (
    <View>
      <Check />

      <Text style={styles.textstyle}>
        된다.
      </Text>
    </View>
  )


};





const styles = StyleSheet.create({

  container: {
    flex: 1



  },


  textstyle: {
    marginTop: StatusBarHeight,
    fontSize: 20,
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



})
