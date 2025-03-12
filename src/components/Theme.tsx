import React, { useState } from "react";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
import Switch from "./Switch"; // Import the generic Switch component

interface ThemeProps {
  children: React.ReactNode;
}

const ThemeContainer = styled.div`
  // display: flex;
  display: none;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`;

const ThemeSpan = styled.span`
  font-size: 0.9rem;
  margin-left: 10px;
`;

// Define themes
const lightTheme = {
  background: "#fff",
  color: "#333",
  cardBackground: "#fff",
  cardColor: "#333",
  chipBackground: "",
  chipHover: "",
  primary: {
    main: "#31D93C",
    light: "#31D93C55",
    lighter: "#31D93C88",
    lightest: "#31D93C99",
  },
  secondary: { main: "#5831D9", bitLight: "#5831D999", light: "#5831D933" },
};
lightTheme.chipBackground = lightTheme.primary.light;
lightTheme.chipHover = lightTheme.primary.lighter;

const darkTheme = {
  background: "#333",
  color: "#fff",
  cardBackground: "#444",
  cardColor: "#eee",
  chipBackground: "#555",
  chipHover: "#666",
};

// Global style for theme
const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.background};
    color: ${(props) => props.theme.color};
    transition: background-color 0.3s ease, color 0.3s ease;
  }
`;

const Theme: React.FC<ThemeProps> = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyle />
      {children}
      <ThemeContainer>
        <Switch checked={theme === "dark"} onChange={toggleTheme} />
        <ThemeSpan>{theme === "light" ? "Light" : "Dark"}</ThemeSpan>
      </ThemeContainer>
    </ThemeProvider>
  );
};

export default Theme;
