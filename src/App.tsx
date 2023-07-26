import { useState, useRef } from "react";
import { styled } from "styled-components";
import InputItem from "./components/InputItem";
import Button, { StyleType } from "./components/Button";

interface User {
  email: string;
  password: string;
  nickname: string;
}

const App = () => {
  const [userList, setUserList] = useState<User[]>([]);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [nickname, setNickname] = useState<string>("");
  // useRef로 Element에 접근하는 경우에는 타입에 맞게 제네릭으로 지정해주세요.
  const emailRef = useRef<HTMLInputElement>(null);
  const submitDisabled = !email || !password || !nickname;

  const handleReset = () => {
    setEmail("");
    setPassword("");
    setNickname("");

    const emailCurrent = emailRef.current;
    if (!emailCurrent) return;
    emailCurrent.focus();
  };

  // e 타입 쉽게 알아내는 방법은
  // <form onSubmit={e=>{}}>...</form> 와 같이 작성하시고
  // e에 커서를 올리시면 e에 대한 타입이 나옵니다.
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newUser = { email, password, nickname };
    setUserList([...userList, newUser]);
    handleReset();
  };

  return (
    <StyledMain>
      <StyledMainTitle>타입스크립트 기초</StyledMainTitle>
      <StyledForm onSubmit={handleSubmit}>
        <InputItem
          ref={emailRef}
          type="email"
          title="이메일"
          name="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          autoFocus
        />
        <InputItem
          type="password"
          title="비밀번호"
          name="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <InputItem
          type="text"
          title="닉네임"
          name="nickname"
          value={nickname}
          onChange={(e) => {
            setNickname(e.target.value);
          }}
        />
        <Button
          type="button"
          styleType={StyleType.FORM_RESET}
          onClick={handleReset}
        >
          초기화
        </Button>
        <Button
          type="submit"
          styleType={StyleType.FORM_SUBMIT}
          disabled={submitDisabled}
        >
          회원가입
        </Button>
      </StyledForm>
    </StyledMain>
  );
};

const StyledMainTitle = styled.h1`
  font-size: 30px;
  line-height: 42px;
  text-align: center;
`;

const StyledMain = styled.main`
  box-sizing: border-box;
  width: 600px;
  padding: 20px;
  margin: 0 auto;
`;

const StyledForm = styled.form`
  margin-top: 30px;
`;

export default App;
