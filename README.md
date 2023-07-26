# React Typescript 기초 예제

초간단 컴포넌트 예제

## 프로젝트 실행 방법

```
yarn install
yarn start
```

## 기본 세팅

- tsconfig.json `"target": "ES2016"` 수정
- styled-components, @types/styled-components 설치

## onClick, onSubmit 등 이벤트 타입 찾는 방법

`<form onSubmit={e=>{}}>...</form>` 와 같이 작성하시고 e에 커서를 올리시면 e에 대한 타입이 나옵니다.

## 참고할만한 사이트

- [CRA Typescript로 시작](https://create-react-app.dev/docs/adding-typescript/)
- [타입스크립트 핸드북](https://joshua1988.github.io/ts/)
- [리액트 컴포넌트 - 벨로퍼트](https://react.vlpt.us/using-typescript/02-ts-react-basic.html) : React.FC에 관한 내용 참고 권장드립니다.
