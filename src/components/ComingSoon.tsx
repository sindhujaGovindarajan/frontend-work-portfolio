import React from "react";
import styled from "styled-components";

const ComingSoonContainer = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  background-color: ${(props) => props.theme.secondary.main};
  color: ${(props) => props.theme.primary.main};
  padding: 5px 10px;
  border-radius: 4px;
  font-size: 0.9rem;
  z-index: 100;
`;

interface ComingSoonProps {
  message: string;
}

const ComingSoon: React.FC<ComingSoonProps> = ({ message }) => {
  return <ComingSoonContainer>{message}</ComingSoonContainer>;
};

export default ComingSoon;
