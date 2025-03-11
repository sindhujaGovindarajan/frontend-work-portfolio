import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

interface DropdownProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: { value: string; label: string }[];
}
const DropdownContainer = styled.div`
  position: relative;
  width: 200px; // Adjust width as needed
`;

const DropdownButton = styled.button`
  width: 100%;
  padding: 10px 15px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #f9f9f9;
  text-align: left;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &::after {
    content: "▼";
    font-size: 0.8em;
  }
`;

const DropdownList = styled.ul<{ isOpen: boolean }>`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  list-style: none;
  padding: 0;
  margin: 0;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: white;
  display: ${(props) => (props.isOpen ? "block" : "none")};
  z-index: 100;
`;

const DropdownItem = styled.li`
  padding: 10px 15px;
  cursor: pointer;

  &:hover {
    background-color: #f0f0f0;
  }
`;

const Dropdown: React.FC<DropdownProps> = ({
  label,
  value,
  onChange,
  options,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleOpen = () => setIsOpen(!isOpen);

  const handleOptionClick = (optionValue: string) => {
    onChange(optionValue);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <DropdownContainer ref={dropdownRef}>
      <DropdownButton onClick={toggleOpen}>
        {options.find((option) => option.value === value)?.label || label}
      </DropdownButton>
      <DropdownList isOpen={isOpen}>
        {options.map((option) => (
          <DropdownItem
            key={option.value}
            onClick={() => handleOptionClick(option.value)}
          >
            {option.label}
          </DropdownItem>
        ))}
      </DropdownList>
    </DropdownContainer>
  );
};

export default Dropdown;
