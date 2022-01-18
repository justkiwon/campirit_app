# campirit_app

## 깃 시작하기
1. 폴더 생성
2. 닉네임과 이메일 등록
git config --global user.name "닉네임"
git config --global user.email "이메일"
3.저장소 생성
git init
4. staging Area로 저장   git add .
5. Local Repository로 이동   git commit -m "파일에 대한 메세지"
6.(처음 커밋때만 사용) git remote add origin "github URL"
7.(처음 커밋때만 사용) git push -u origin master(master자리에는 자신의 브런치 이름 쓰면 됨)
                             처음 이후는 git push 만 하면 됨

이미 리포지토리가 있다면
1. git add . 
4,5,7 실행 --> 7번은 한번 하면 git push만 해도 됨



깃 브런치
1. git branch
2. git checkout -b "브런치 이름" --> checkout하면서 브런치 생성 checkout할떄는 -b 지우기
3. git branch --> 잘 이동했나 확인
4. git add . --> 옮기기
5. git push --set-upstream origin backend --> backend 브런치 올리면서 깃허브에 올리기

-------- 참고 자료 ------------
1. 깃허브 협업 시작하기
 https://medium.com/webeveloper/%EA%B9%83%ED%97%88%EB%B8%8C-%EC%82%AC%EC%9A%A9%EB%B0%A9%EB%B2%95-github-tutorials-4a63f31bb6a5
2. 브랜치 작업
https://backlog.com/git-tutorial/kr/stepup/stepup2_4.html 

## MakeKit data structure

Object {
  "1": Object {
    "name": "tent1",
    "price": 1000,
  },
  "2": Object {
    "name": "tent2",
    "price": 2000,
  },
  "3": Object {
    "name": "tent3",
    "price": 3000,
  },
  "4": Object {
    "name": "tent4",
    "price": 4000,
  },
}

## 설치할 라이브러리 사용법

### Piker library
$ npm install @react-native-picker/picker --save

------- 참고자료-------------\
https://github.com/react-native-picker/picker

### BarHeight
$ npm install --save react-native-status-bar-height

------- 참고자료-------------\
https://velog.io/@zlemzlem5656/ReactNative-%EC%97%90%EC%84%9C-StatusBar-%EB%86%92%EC%9D%B4-%EA%B5%AC%ED%95%98%EA%B8%B0

### expo-font
$ expo install expo-font

------ 참고자료-------------\
https://docs.expo.dev/versions/latest/sdk/font/


### Dimensions

import {Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

Dimensions는 모니터 높이 너비를 가져와서 모니터마다 비율이 맞게 하는 모여주는 것임. 
따라서 스타일에서 숫자만 쓰지 말고 dimension 적용해서 쓰기

ex) marginTop:50 --> marginTop: windowHeight/50 (윈도우높이/50과 그냥 50은 사이즈가 다름 따라서 사이즈 맞춰 면경 요망)
ex) width:50 --> width: windowWidth/50

### useState

import React, {useState} from 'react';

const [state, setState] = useState("");

useState는 상태 변수로 state값이 기본 값이고 useState를 쓰면 setState로 바뀐다.
