# 아이아이컴바인드 랜딩페이지

## 문제정의

- 아이아이컴바인드는 오프라인 공간을 통해 젠틀몬스터 · 탬버린즈 · 누데이크 세 브랜드의 정체성을 보여주면서, 조화롭게 보일수 있는 브랜딩을 진행중

- 하지만 실제 오프라인을 방문해보지 않은 고객들 사이에 같은 계열사의 브랜드인지 인지못하는 경우가 있음

<br/>

## 목적

- 아이아이컴바인드의 세 브랜드의 각각의 특징을 살리면서도 브랜드 컬러를 연결하기 위한 랜딩페이지 제작

<br/>

## 설계

- fullpage를 활용하고, video와 image를 배경으로 배치하여 브랜드 정체성 확보

- https://www.figma.com/file/tkeH4cnEBfQ17nT1aA2kdi/IICOMBINED?node-id=0-1&t=zrITDwyHKqGYR2FR-0

<br/>

## 구현

- fullpage를 ref를 활용한 dom 조작 방식으로 구현 (https://github.com/jong6598/rending_for_IICOMBINED/blob/main/src/fullPage/index.tsx)

- fullpage 로만 구현할 시 하단의 컨텐츠까지 접근하거나 맨 하단에서 첫페이지로 접근할때 UX 문제, 좌측 네비게이션을 이용한 접근도 가능하게 구현 (네비게이션 없이 접근시 대략 10초의 시간소요)

- 각 페이지마다 자세히보기 버튼을 통해 개별 브랜드 홈페이지 링크

<br/>


## 결과물

- 배포주소:
  http://iicombined.s3-website.ap-northeast-2.amazonaws.com/


https://user-images.githubusercontent.com/108744804/227699239-9abe19e2-aa16-4b02-87f1-ce38f42cf024.mp4


<br/>


## 추가과제

- [ ] 반응형 페이지 구현 (@media or Hoc)
- [ ] 화면전환 개선

<br/>

## 회고

- https://jong6598.tistory.com/45


<br/>

## 스킬셋

<img src="https://img.shields.io/badge/React.js-61DAFB?style=for-the-badge&logo=react&logoColor=white"><img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white"><img src="https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white">


