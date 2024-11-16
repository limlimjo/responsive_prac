## week2 : NFT Marketplace

### 개발환경

1. 프로젝트 환경설정(vite 활용한 리액트 프로젝트): `npm create vite@latest` <br/>
2. CSS 스타일링을 위한 sass 설치: `npm install -D sass`

---

### 프로젝트 폴더 구조

```xml
📦src
 ┣ 📂assets -> icons 폴더, images 폴더, styles 폴더
 ┃ ┣ 📂icons
 ┃ ┃ ┣ 📜icon_arrowLeft.svg
 ┃ ┃ ┣ 📜icon_arrowRight.svg
 ┃ ┃ ┣ 📜icon_burgurMenu.svg
 ┃ ┃ ┣ 📜icon_copy.svg
 ┃ ┃ ┣ 📜icon_discordLogo.svg
 ┃ ┃ ┣ 📜icon_envelopeSimple.svg
 ┃ ┃ ┣ 📜icon_eye.svg
 ┃ ┃ ┣ 📜icon_eyeSlash.svg
 ┃ ┃ ┣ 📜icon_globe.svg
 ┃ ┃ ┣ 📜icon_instagramLogo.svg
 ┃ ┃ ┣ 📜icon_list.svg
 ┃ ┃ ┣ 📜icon_lockKey.svg
 ┃ ┃ ┣ 📜icon_magnifyingGlass.svg
 ┃ ┃ ┣ 📜icon_plus.svg
 ┃ ┃ ┣ 📜icon_rocket.svg
 ┃ ┃ ┣ 📜icon_rocketLaunch.svg
 ┃ ┃ ┣ 📜icon_storeFront.svg
 ┃ ┃ ┣ 📜icon_trendUp.svg
 ┃ ┃ ┣ 📜icon_twitterLogo.svg
 ┃ ┃ ┣ 📜icon_user.svg
 ┃ ┃ ┣ 📜icon_userCircle.svg
 ┃ ┃ ┣ 📜icon_wallet.svg
 ┃ ┃ ┗ 📜icon_youtubeLogo.svg
 ┃ ┣ 📂images
 ┃ ┃ ┗ 📂dummyData
 ┃ ┃ ┃ ┣ 📂cardData
 ┃ ┃ ┃ ┃ ┣ 📜image_cardData1.png
 ┃ ┃ ┃ ┃ ┣ 📜image_cardData10.png
 ┃ ┃ ┃ ┃ ┣ 📜image_cardData11.png
 ┃ ┃ ┃ ┃ ┣ 📜image_cardData12.png
 ┃ ┃ ┃ ┃ ┣ 📜image_cardData2.png
 ┃ ┃ ┃ ┃ ┣ 📜image_cardData3.png
 ┃ ┃ ┃ ┃ ┣ 📜image_cardData4.png
 ┃ ┃ ┃ ┃ ┣ 📜image_cardData5.png
 ┃ ┃ ┃ ┃ ┣ 📜image_cardData6.png
 ┃ ┃ ┃ ┃ ┣ 📜image_cardData7.png
 ┃ ┃ ┃ ┃ ┣ 📜image_cardData8.png
 ┃ ┃ ┃ ┃ ┗ 📜image_cardData9.png
 ┃ ┃ ┃ ┗ 📂creatorData
 ┃ ┃ ┃ ┃ ┣ 📜image_creatorData1.png
 ┃ ┃ ┃ ┃ ┣ 📜image_creatorData10.png
 ┃ ┃ ┃ ┃ ┣ 📜image_creatorData11.png
 ┃ ┃ ┃ ┃ ┣ 📜image_creatorData12.png
 ┃ ┃ ┃ ┃ ┣ 📜image_creatorData2.png
 ┃ ┃ ┃ ┃ ┣ 📜image_creatorData3.png
 ┃ ┃ ┃ ┃ ┣ 📜image_creatorData4.png
 ┃ ┃ ┃ ┃ ┣ 📜image_creatorData5.png
 ┃ ┃ ┃ ┃ ┣ 📜image_creatorData6.png
 ┃ ┃ ┃ ┃ ┣ 📜image_creatorData7.png
 ┃ ┃ ┃ ┃ ┣ 📜image_creatorData8.png
 ┃ ┃ ┃ ┃ ┗ 📜image_creatorData9.png
 ┃ ┗ 📂styles
 ┃ ┃ ┣ 📜color.scss - 색깔 변수화
 ┃ ┃ ┣ 📜commonVal.scss - 화면 사이즈 변수화
 ┃ ┃ ┣ 📜font.scss - 폰트 스타일 변수화
 ┃ ┃ ┣ 📜icons.scss - icon 변수화
 ┃ ┃ ┣ 📜main.scss - main css
 ┃ ┃ ┗ 📜reset.scss - reset css
 ┣ 📂components -> 공통 컴포넌트 (버튼, 푸터, 헤더)
 ┃ ┗ 📂common
 ┃ ┃ ┣ 📂button
 ┃ ┃ ┃ ┣ 📜CommonButton.module.scss
 ┃ ┃ ┃ ┗ 📜CommonButton.tsx
 ┃ ┃ ┣ 📂footer
 ┃ ┃ ┃ ┣ 📜CommonFooter.module.scss
 ┃ ┃ ┃ ┗ 📜CommonFooter.tsx
 ┃ ┃ ┗ 📂header
 ┃ ┃ ┃ ┣ 📜CommonHeader.module.scss
 ┃ ┃ ┃ ┗ 📜CommonHeader.tsx
 ┣ 📂data -> 더미 데이터
 ┃ ┗ 📜dummyData.js
 ┣ 📂pages -> 페이지
 ┃ ┗ 📂index -> index 페이지
 ┃ ┃ ┣ 📂components -> index 페이지내에서 사용하는 컴포넌트 (카드, intro)
 ┃ ┃ ┃ ┣ 📜Card.module.scss
 ┃ ┃ ┃ ┣ 📜Card.tsx
 ┃ ┃ ┃ ┣ 📜Intro.module.scss
 ┃ ┃ ┃ ┗ 📜Intro.tsx
 ┃ ┃ ┣ 📂styles -> index 페이지의 style
 ┃ ┃ ┃ ┗ 📜index.module.scss
 ┃ ┃ ┗ 📜index.tsx
 ┣ 📜App.tsx
 ┣ 📜main.tsx
 ┗ 📜vite-env.d.ts
```
---

### 작업하면서 공유하면 좋을 내용 및 자료

- 프로젝트를 만들 때 항상 프로젝트 폴더 구조를 어떻게 가져가야 좋을까 생각을 많이 했는데 참고할만한 좋은 영상이 있어 공유드립니다.<br/>
[React 폴더 구조 관련 참고 영상](https://www.youtube.com/watch?time_continue=19&v=64Fx5Y1gEOA&embeds_referring_euri=https%3A%2F%2Fwww.google.com%2Fsearch%3Fq%3D%25EB%25A6%25AC%25EC%2595%25A1%25ED%258A%25B8%2B%25ED%258F%25B4%25EB%258D%2594%25EA%25B5%25AC%25EC%25A1%25B0%26sca_esv%3D825ec49c2d0202bf%26ei%3DliM&source_ve_path=MjM4NTE)

- 반응형 웹을 구현할 때 PC -> 태블릿 -> 모바일 순으로 구현을 했었는데 아래 자료를 보니 레이아웃이 심플한 걸 먼저 구현하는게 더 나을 수도 있겠다는 생각이 들었습니다. 물론 프로젝트마다 다르겠지만 다음에는 대부분 레이아웃이 간단한 모바일부터 구현해봐야겠다는 생각이 들었습니다.<br/>
[반응형 웹 관련 참고 컨텐츠](https://studiomeal.com/archives/1004)

- 저번에는 Card 컴포넌트를 배치할 때, gap을 계산해서 일일이 계산해주었는데 grid를 사용하니까 grid 트랙의 크기를 지정만 해주면 돼서 편리한 것 같습니다.<br/>
[grid 관련 참고 컨텐츠](https://studiomeal.com/archives/533)

- 일부 이미지 같은 경우 img 태그를 사용했지만 대부분 background에 이미지를 넣어 처리하였습니다. img 태그에서 이미지를 일일이 경로에서 불러오면 나중에 경로가 바뀌었을 경우 유지보수하기 어려울 것 같다는 생각이 들어 icons.scss에 svg 파일을 url로 변경하여 변수화해서 관리하였습니다. But, svg 로고의 색을 바꿔주려고 할 때 그 부분은 방법을 찾아봐서 시도했으나 성공하지 못하였습니다. 그래서 같은 로고여도 색깔이 다르면 $icon_blueMenu, $icon_blackMenu 이런식으로 변수를 두 개를 만들어야 한다는 단점이 있었습니다. 이 부분은 이후에 더 찾아봐야 할 것 같습니다.<br/>
[URL-encoder for SVG 참고](https://yoksel.github.io/url-encoder/ )

---