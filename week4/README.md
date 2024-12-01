## week4 : NFT Marketplace

### 개발환경

1. 프로젝트 환경설정(vite 활용한 리액트 프로젝트): `npm create vite@latest`
2. CSS 스타일링을 위한 sass 설치: `npm install sass`

---

### 프로젝트 폴더 구조

```xml
📦src
 ┣ 📂assets
 ┃ ┣ 📂icons
 ┃ ┣ 📂images
 ┃ ┗ 📂styles
 ┃ ┃ ┣ 📜color.scss
 ┃ ┃ ┣ 📜commonVal.scss
 ┃ ┃ ┣ 📜font.scss
 ┃ ┃ ┣ 📜icons.scss
 ┃ ┃ ┣ 📜main.scss
 ┃ ┃ ┗ 📜reset.scss
 ┣ 📂components
 ┃ ┗ 📂common
 ┃ ┃ ┣ 📂button
 ┃ ┃ ┃ ┣ 📜CommonButton.module.scss
 ┃ ┃ ┃ ┗ 📜CommonButton.tsx
 ┃ ┃ ┣ 📂footer
 ┃ ┃ ┃ ┣ 📜CommonFooter.module.scss
 ┃ ┃ ┃ ┗ 📜CommonFooter.tsx
 ┃ ┃ ┣ 📂header
 ┃ ┃ ┃ ┣ 📜CommonHeader.module.scss
 ┃ ┃ ┃ ┗ 📜CommonHeader.tsx
 ┃ ┃ ┗ 📂input
 ┃ ┃ ┃ ┣ 📜CommonInput.module.scss
 ┃ ┃ ┃ ┗ 📜CommonInput.tsx
 ┣ 📂pages
 ┃ ┗ 📂index
 ┃ ┃ ┣ 📂components
 ┃ ┃ ┃ ┣ 📜Account.module.scss
 ┃ ┃ ┃ ┗ 📜Account.tsx
 ┃ ┃ ┣ 📂styles
 ┃ ┃ ┃ ┗ 📜index.module.scss
 ┃ ┃ ┗ 📜index.tsx
 ┣ 📜App.tsx
 ┣ 📜main.tsx
 ┗ 📜vite-env.d.ts
```

---

### 작업하면서 시도해봤던 것

- 헤더와 푸터는 이전과 동일하고 Create Account 영역 부분은 웹/태블릿 같은 경우는 왼쪽에 이미지 오른쪽에는 계정 생성하는 UI이며 모바일 같은 경우에는 상단에 이미지, 아래에 계정 생성하는 UI이다.
웹/태블릿 같은 경우 width를 50%로씩 주어 flex를 사용하여 배치하였다.

- 로고 같은 경우 웹의 Sign Up의 아이콘과 Username의 input창에 있는 아이콘이 동일한데 하나의 svg 파일을 사용하고 색깔만 바꿔줄 수 없나 찾아보다가 svg 파일에서 fill="currentColor"로 바꿔주고 부모 요소에 해당하는 color로 바꿔주면 색깔이 바뀐다고 해서 시도해보았으나 안되어 색깔이 다른 아이콘 svg 파일을 하나 더 만들어 불러왔다. 나중에 아이콘 색만 바꿔달라고 하는 경우가 있을 텐데 일일이 각 색상의 svg 이미지를 하나 더 파일에 저장하고 그 파일을 import 해오는거는 번거로울 것 같은데 효율적인 방법이 있는지 더 찾아봐야겠다.