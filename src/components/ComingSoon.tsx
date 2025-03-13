import React from "react";
import styled from "styled-components";

interface ComingSoonProps {
  message: string;
}

const ComingSoonContainer = styled.div`
  /* Desktop positioning (default) */
  position: absolute;
  background-color: ${(props) => props.theme.secondary.main};
  color: ${(props) => props.theme.primary.main};
  padding: 5px 10px;
  border-radius: 4px;
  font-size: 0.9rem;
  z-index: 1000;
  top: 10px;
  left: 10px;

  /* Responsive positioning for different screen sizes */
  @media (max-width: 768px) {
    position: fixed; /* Change to fixed positioning on smaller screens */
    top: auto; /* Reset top positioning */
    bottom: 10px;
    left: 10px;
    font-size: 0.85rem;
  }

  @media (max-width: 576px) {
    position: fixed; /* Ensure fixed positioning */
    left: 50%;
    transform: translateX(-50%);
    bottom: 10px;
    white-space: nowrap;
    font-size: 0.8rem;
  }
`;

const ComingSoon: React.FC<ComingSoonProps> = ({ message }) => {
  return <ComingSoonContainer>{message}</ComingSoonContainer>;
};

export default ComingSoon;
