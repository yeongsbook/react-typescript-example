import { styled, css } from "styled-components";

export enum StyleType {
  FORM_SUBMIT = "FORM_SUBMIT",
  FORM_RESET = "FORM_RESET",
}

interface ButtonProps {
  type?: "button" | "submit" | "reset";
  children: React.ReactNode;
  styleType: StyleType;
  disabled?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const Button = ({
  // type이 undefined면 button으로 할당합니다.
  type = "button",
  children,
  styleType,
  disabled,
  onClick,
}: ButtonProps) => {
  return (
    <StyledButton
      type={type}
      $styleType={styleType}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </StyledButton>
  );
};

const formStyles = css`
  width: 100%;
  margin-top: 20px;
  padding: 10px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  font-size: 16px;
  line-height: 20px;
`;

const StyledButton = styled.button<{ $styleType: StyleType }>`
  ${(props) => {
    switch (props.$styleType) {
      case StyleType.FORM_SUBMIT:
        return css`
          ${formStyles}
          background: #00ac00;
          font-weight: 700;
          color: #fff;
        `;
      case StyleType.FORM_RESET:
        return css`
          ${formStyles}
          background: #666;
          color: #fff;
        `;
      default:
        return ``;
    }
  }}
`;

export default Button;
