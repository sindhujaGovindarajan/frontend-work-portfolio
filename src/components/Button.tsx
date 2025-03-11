import React from "react";
import styled from "styled-components";

interface ButtonProps {
  label: string;
  onClick: () => void;
  children?: React.ReactNode;
}

const StyledButton = styled.button`
  /* Add your button styles here */
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  color: ${(props) => props.theme.secondary.blue};
  background-color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    margin-right: 5px;
    font-size: 1.2em;
  }
`;

const Button: React.FC<ButtonProps> = ({ label, onClick, children }) => {
  return (
    <StyledButton onClick={onClick}>
      {children} {label}
    </StyledButton>
  );
};

export default Button;
