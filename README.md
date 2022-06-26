# campirit_app
개발언어: FRONTEND: REACT-NATIVE(java script)
          BACKEND: fire-base
## CAMPRIT-APP이란          
CAMPIRIT-APP은 초보 캠퍼들이 무엇을 사야 할지 몰라 막막할 때 무엇을 사야 하는지 순차적으로 알려주는 솔루션 플랫폼입니다. 
       
## 팀원 소개

### 김서윤 ( 기획, DESIGNER, FRONTEND )
  - 디자인, 퍼블리싱 
  - FRONTEND (MAIN PAGE, LOADING PAGE1,2)
### 김기원 (기획,FRONTEND)
  - FRONTEND(START_PAGE,MAKEKIT 페이지들)
### 정재윤 (기획, BACKEND)
  - BACKEND
### 최혜림 (기획, FRONTNED)
  - FRONTNEND(FINALKIT)
### 박지후 (기획, FRONTEND)
  - FRONTEND(QUIZ_START,QUIZ_SITUATION)


## 캠피릿 백엔드 데이터 설정방법

```javascript
"box" = 박스 물품 데이터 집합
{
  "box" = 박스 물품 설명에 대한 데이터
  [
    "info" = 박스 물품 설명
    "name" = 박스 물품 종류
  ]
  
  "product1" = 1번째줄 박스 물품 데이터
  {
    "box1" = 1번째줄 1번째 박스에 대한 데이터
    {
      "detail" = 물품 디테일
      "imageurl" = 썸네일 이미지 url(firebase storage에 저장)
      "name" = 물품 이름
      "option1 ~ option3" = 물품 선택 옵션 (있을 경우에)
      "price" = 물품 가격
    }
  }
}
```

## 캠피릿 썸네일 이미지
300 x 300 pixel 크기로 찍어주세요

## Campirit PreView
![KakaoTalk_20220528_202454055](https://user-images.githubusercontent.com/72431775/170829522-0d6c67f2-d2e1-4d95-80dc-9886d2d48c4e.jpg)



## 파일을 수정할 때 마다, 표시 확실하게 하기
- issue에도 올리기

ex) - ***2022.04.23 _ main page 구입 버튼 위치 변경


## 핸드폰으로 에뮬레이터 실행하기
1. 핸드폰 설정
설정 -> 개발자 옵션 -> USB 디버깅 활성화

2. CMD창에 명령어 입력\
abd devices\
위의 명령어를 입력하면 에뮬레이터와 기기번호가 나옴

3. run-android 실행\
react-native run-android

https://growing-nyang.tistory.com/107


## 깃 시작하기
1. 폴더 생성
2. 닉네임과 이메일 등록  
git config --global user.name "닉네임" \
git config --global user.email "이메일" \
3.저장소 생성 
git init 
4. staging Area로 저장   git add . 
5. Local Repository로 이동   git commit -m "파일에 대한 메세지"\
6.(처음 커밋때만 사용) git remote add origin "github URL"\
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

## 깃 가져오기

1. 폴더 생성
2. 닉네임과 이메일 등록  
git config --global user.name "닉네임" \
git config --global user.email "이메일" \

3. 깃 저장소 생성
git init \
4. 깃 레퍼지토리 연결
git remote add origin "https://github.com/justkiwon/campirit_app.git"
5. 잘 연결 됬나 확인
git remote -v  \
6. 깃허브 브랜치, 파일 모든 것 가져오기
git pull origin <자신이 가져올 브런치 이름>
7. 브런치 갱신
git remote update
8. 원격 브런치를 로컬 브런치로 가져오기
git checkout -b [생성할 branch 이름] [원격 저장소의 branch 이름]

## 오류들
### expo 스크립트를 실행할 수 없을때
https://seopark.tistory.com/6
\
\
\
------- 참고자료 -------------- \
https://sin0824.tistory.com/11

https://cjh5414.github.io/get-git-remote-branch/

https://yztech.tistory.com/32#:~:text=git%20checkout%20%2Dt%20%EB%A5%BC%20%EC%82%AC%EC%9A%A9,%EB%B3%80%EA%B2%BD%ED%95%B4%EC%84%9C%20%EA%B0%80%EC%A0%B8%EC%98%AC%20%EC%88%98%20%EC%9E%88%EC%8A%B5%EB%8B%88%EB%8B%A4.

## MakeKit data structure
### 불러올   
  const tent = {\
    1:{\
      name:"돔텐트",\
      info:"텐트와 관련된 설명 간단하게 근데 이해하기는 쉽게 그러면 이거는 언제 어케 쓰냐 진심 미치겠네 미치겠네 미치겠네 미치겠네 미치겠네 미치겠네 미치겠네 미치겠네 미치겠네미쳐돌아 돌아 내가 미챠 버려 홀라라랄",\
    },\
    2:{\
      name:"티피텐트",\
      info:"텐트와 관련된 설명 간단하게 근데 이해하기는 쉽게 그러면 이거는 언제 어케 쓰냐 진심 미치겠네 미치겠네 미치겠네 미치겠네 미치겠네 미치겠네 미치겠네 미치겠네 미치겠네미쳐돌아 돌아 내가 미챠 버려 홀라라랄",\
    },\
    3:{\
      name:"헥사텐트",\
      info:"텐트와 관련된 설명 간단하게 근데 이해하기는 쉽게 그러면 이거는 언제 어케 쓰냐 진심 미치겠네 미치겠네 미치겠네 미치겠네 미치겠네 미치겠네 미치겠네 미치겠네 미치겠네미쳐돌아 돌아 내가 미챠 버려 홀라라랄",\
    },\
  };\
 
  const product1 = {\
    1:{\
      name: "tent1",\
      price: 1000,\
      option1: "쉬파파파파욜로",\
      option2: "뛰빠빠빠빠욜로",\
      option3: "뛰빠뛰빠뒤빠빠",\
      detail: "세상에서 가장 큰",\
      jpg: "",\
    },\
    2:{\
      name: "tent2",\
      price: 2000,\
      option1: "빨간거",\
      option2: "쉬빨간거",\
      option3: "핵빨간거",\
      detail: "제일 이상한",\
      jpg: "",\
    },\
    3:{\
      name: "tent3",\
      price: 3000,\
      option1: "빨간거",\
      option2: "쉬빨간거",\
      option3: "핵빨간거",\
      detail: "거대한",\
      jpg: "",\
    },\
    4:{\
      name: "tent4",\
      price: 400000,\
      option1: "빨간거",\
      option2: "쉬빨간거",\
      option3: "핵빨간거",\
      detail: "완전 아싸",\
      jpg: "",\
    }\
  };
  
  
## 최종 선택된 데이터  (객체 이름: hi)
Object {
  
  "1": Object {  
    "name": "tent1",                 
    "price": 1000,\
    "select_option": "쉬파파파파욜로",\
    "visible": false,\
    jpg:"",\
  },                 
  "2": Object {                
    "name": "tent2",               
    "price": 2000,
    "select_option": "핵빨간거",\
    "visible": true,\
    jpg:"",\
  },                         
  "3": Object {                
    "name": "tent3",       
    "price": 3000,         
    "select_option": "빨간거",\
    "visible": true,\
    jpg:"",\
  },                       
  "4": Object {           
    "name": "tent4",     
    "price": 4000,         
    "select_option": "쉬파파파파욜로",\
    "visible": false,\
    jpg:"",\
  },                         
}                            

## 파이어베이스 데이터 저장 형식 (json 배열, realtime database)
"product3": [\
            null,\
            {\
                "imageurl": "image 주소 (firestore 혹은 aws bucket 등 가능)",\
                "name": "tent3-1",\
                "option1": "쉬파파파파욜로",\
                "option2": "뛰빠빠빠빠욜로",\
                "option3": "뛰빠뛰빠뒤빠빠",\
                "detail": "피면 편안한",\
                "price": 1300\
            },\
            {\
                "imageurl": "image 주소 (firestore 혹은 aws bucket 등 가능)",\
                "name": "tent3-2",\
                "option1": "빨간거",\
                "option2": "쉬빨간거",\
                "option3": "핵빨간거",\
                "detail": "엽기적인",\
                "price": 2000\
            },\
            {\
                "imageurl": "image 주소 (firestore 혹은 aws bucket 등 가능)",\
                "name": "tent3-3",\
                "option1": "빨간거",\
                "option2": "쉬빨간거",\
                "option3": "핵빨간거",\
                "detail": "감성템 1위인",\
                "price": 3000\
            },\
            {\
                "imageurl": "image 주소 (firestore 혹은 aws bucket 등 가능)",\
                "name": "tent3-4",\
                "option1": "빨간거",\
                "option2": "쉬빨간거",\
                "option3": "핵빨간거",\
                "detail": "가성비 좋은",\
                "price": 400000\
            }\
        ],

## 설치할 라이브러리 사용법

### Piker library
$ npm install @react-native-picker/picker --save \
$ expo install @react-native-picker/picker \
------- 참고자료-------------\
https://github.com/react-native-picker/picker  \
https://taehoon95.tistory.com/117

### BarHeight
$ npm install --save react-native-status-bar-height

------- 참고자료-------------\
https://velog.io/@zlemzlem5656/ReactNative-%EC%97%90%EC%84%9C-StatusBar-%EB%86%92%EC%9D%B4-%EA%B5%AC%ED%95%98%EA%B8%B0

### expo-font
$ expo install expo-font

------ 참고자료-------------\
https://docs.expo.dev/versions/latest/sdk/font/

### async local storage
expo install @react-native-async-storage/async-storage


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

### firebase
$ npm install --save firebase

추후 내용 추가 

### 컴포넌트 조건문
https://itstudy-mary.tistory.com/381


### 컴포넌트 숨기기

ex)
const[hi,setHi]=useState({});

PickerAdd() =>{
  [key]:{
        "visible":false,
};
<TouchableOpacity style={{...styles.Picker_Button, height: hi[keyy].visible ? windowHeight/22.5 : 0 }} onPress={()=>{PickerAdd(keyy,tent_name,money,option1)}}><Text>{option1}</Text></TouchableOpacity>


https://webisfree.com/2019-08-14/react-native-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8-%EC%88%A8%EA%B8%B0%EA%B8%B0-hide
### 배열 삭제
const Navi=[1,2,3]

delete Navi[2]  --> Navi=[1,2,undefined] 따라서 그 자리는 남아있고 안에 값만 삭제됨

Navi.splice(1); --> Navi=[1,3] 그 자리 까지 사라짐

### 객체
1. 객체는 순서가 없다.
2. 딕셔너리 처럼 키 value값이 있지만 value값을 부르면 키 값이 출력된다.

### Page Refreash 하는 방법 (navigation이 이동하면)

useIsFocused는 A페이지에서 B 페이지로 전환됐을 때(포커스가 변경되었을 때)를 감지하여, 자동으로 useEffect 함수를 실행하게 된다.

import { useIsFocused } from '@react-navigation/native';
const isFocused = useIsFocused(); // isFoucesd Define

useEffect(() => {
return () => {
selectTest();
}
}, [isFocused]);

레퍼런스 : https://hdhdeveloper.tistory.com/72
