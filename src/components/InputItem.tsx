// 컴포넌트에서 ref를 할당받기 위해 forwardRef와 Ref를 사용합니다. 아래 코드를 참고해주세요.
import { forwardRef, Ref } from "react";
import { styled } from "styled-components";

interface InputItemProps {
  type: string;
  title: string;
  name: string;
  id?: string;
  autoFocus?: boolean;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputItem = (
  // id가 undefined면 name으로 할당합니다.
  { type, title, name, id = name, autoFocus, value, onChange }: InputItemProps,
  ref: Ref<HTMLInputElement>
) => {
  return (
    <StyledDiv>
      <StyledLabel htmlFor={id}>{title}</StyledLabel>
      <StyledInput
        ref={ref}
        type={type}
        id={id}
        name={name}
        autoFocus={autoFocus}
        value={value}
        onChange={onChange}
      />
    </StyledDiv>
  );
};

const StyledDiv = styled.div`
  margin-top: 10px;
`;

const StyledLabel = styled.label`
  font-size: 20px;
  font-weight: 700;
`;

const StyledInput = styled.input`
  display: block;
  box-sizing: border-box;
  width: 100%;
  margin-top: 5px;
  padding: 5px;
  font-size: 16px;
  line-height: 20px;
`;

export default forwardRef(InputItem);
