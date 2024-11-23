## week3 : NFT Marketplace

### 개발환경

1. 프로젝트 환경설정(vite 활용한 리액트 프로젝트): `npm create vite@latest`
2. CSS 스타일링을 위한 sass 설치: `npm install sass`
3. 반응형 구현 위한 라이브러리 react-responsive 설치: `npm install react-responsive`

---

### 프로젝트 폴더 구조

```xml
📦src
 ┣ 📂app - 전역 설정 및 초기화
 ┃ ┣ 📂styles
 ┃ ┃ ┣ 📜color.scss
 ┃ ┃ ┣ 📜commonVal.scss
 ┃ ┃ ┣ 📜font.scss
 ┃ ┃ ┣ 📜index.scss
 ┃ ┃ ┗ 📜reset.scss
 ┃ ┗ 📜index.tsx
 ┣ 📂pages - 페이지 단위 (라우트 기준)
 ┃ ┗ 📂HomePage
 ┃ ┃ ┣ 📂ui
 ┃ ┃ ┃ ┣ 📜CardContent.module.scss
 ┃ ┃ ┃ ┣ 📜CardContent.tsx
 ┃ ┃ ┃ ┣ 📜Intro.module.scss
 ┃ ┃ ┃ ┗ 📜Intro.tsx
 ┃ ┃ ┗ 📜index.tsx
 ┣ 📂shared - 재사용 가능한 범용 모듈
 ┃ ┣ 📂assets - 아이콘, 이미지 등의 리소스
 ┃ ┃ ┣ 📂icons
 ┃ ┃ ┗ 📂images
 ┃ ┣ 📂mocks - 더미 데이터
 ┃ ┗ 📂ui - 공통 UI 컴포넌트
 ┃ ┃ ┣ 📂button
 ┃ ┃ ┣ 📂card
 ┃ ┃ ┣ 📂footer
 ┃ ┃ ┗ 📂header
 ┣ 📜App.module.scss
 ┗ 📜App.tsx
```

---

### 작업하면서 공유하면 좋을 내용 및 자료

- 이번에는 FSD 구조를 사용하여 폴더 구조를 구성하였습니다. 그런데 한 페이지이고 기능이 없다보니 FSD 구조 폴더를 사용하는 것의 필요성을 느끼지 못하였습니다. But, 규모가 큰 프로젝트 같은 경우 이 폴더 구조를 사용하면 유용할 것 같다는 생각이 들었습니다.<br/>

    cf) 추가적으로 나중에 보면 좋을 자료<br/>
     [FSD 관련 참고자료1](https://velog.io/@teo/separation-of-concerns-of-frontend)<br/>
     [FSD 관련 참고자료2](https://velog.io/@teo/fsd)

- 이번에 작업할 때는 react-responsive 라이브러리를 사용하여 모바일 -> 태블릿 -> PC 순으로 반응형을 구현하였습니다. 이전에 media 쿼리로 구현했을 때와 비슷한 것 같은데 UI적으로 변동이 큰 부분은 이렇게 나눠서 하는게 훨씬 깔끔하다는 생각이 들었습니다. 하지만 sass를 사용할 때는 css를 작성할 때 media 쿼리를 사용할 수 밖에 없었습니다. 추가적으로 PC, 태블릿, 모바일에서 동일한 코드가 있는데 이 부분은 어떻게 개선해야할지 생각해보아야할 것 같습니다.

- 카드 배치 같은 경우 저번과 동일하게 grid를 사용하였는데 이전에는 화면의 크기가 커지거나 줄어들 때 카드의 크기는 그대로 유지하게 두었더니 UI적으로 보기에 좋지 않았습니다. 그래서 카드 UI에 width를 100% 줌으로써 화면의 크기가 커지거나 줄어들 때 카드의 크기가 커지고 줄어들게 함으로써 UI적으로 보기에 좋기 변경하였습니다.