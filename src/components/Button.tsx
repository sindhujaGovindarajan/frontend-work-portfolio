import React from "react";
import styled from "styled-components";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  onClick: () => void;
  children?: React.ReactNode;
}

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  padding: 8px 12px;
  margin: 5px;
  border-radius: 20px;
  border: none;
  text-decoration: none;
  color: white;
  font-size: 0.9rem;
  background-color: ${(props) => props.theme.secondary.lightBlue};
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${(props) => props.theme.secondary.blue};
  }

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
