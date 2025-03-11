import React from "react";
import styled from "styled-components";

interface SwitchProps {
  checked: boolean;
  onChange: () => void;
}

const SwitchContainer = styled.label`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
`;

const SwitchInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;

  &:checked + ${SwitchContainer}::before {
    background-color: #2196f3;
  }

  &:checked + ${SwitchContainer}::after {
    left: 30px;
  }
`;

const SwitchSlider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  border-radius: 34px;
  transition: background-color 0.4s;

  &::before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    border-radius: 50%;
    transition: background-color 0.4s, left 0.4s;
  }
`;

const Switch: React.FC<SwitchProps> = ({ checked, onChange }) => {
  return (
    <SwitchContainer>
      <SwitchInput
        type="checkbox"
        checked={checked}
        onChange={onChange}
      />
      <SwitchSlider />
    </SwitchContainer>
  );
};

export default Switch;
