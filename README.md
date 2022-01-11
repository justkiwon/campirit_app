# campirit_app

### 깃 시작하기
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
1. 깃 에드 . 
4,5,7 실행



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


### 설치할 파일

### 라이브러리 (모듈) 사용법
