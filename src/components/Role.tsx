import React from "react";
import styled from "styled-components";

interface RoleProps {
  title: string;
}

const RoleText = styled.h1`
  margin: 0;
  margin-bottom: clamp(12px, 2vw, 24px);
  padding: 0;
  color: ${(props) => props.theme.primary.main};
  font-size: clamp(1.8rem, 3.5vw, 3.2rem);
  font-weight: 600;
  letter-spacing: 1px;
  text-align: center;
  line-height: 1.2;

  @media (max-width: 768px) {
    margin-bottom: clamp(8px, 1.5vw, 16px);
  }

  @media (max-width: 480px) {
    margin-bottom: clamp(6px, 1vw, 12px);
  }
`;

const Role: React.FC<RoleProps> = ({ title }) => {
  return <RoleText>{title}</RoleText>;
};

export default Role;
