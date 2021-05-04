import React, {useState} from "react";
import ReactDOM from "react-dom";
import {darkTheme, defaultTheme, GlobalStyle} from "./utils";
import {PrimaryButton, SecondaryButton, TertiaryButton} from "./components/atoms/button/button.style";
import { ThemeProvider } from "styled-components";

const App = () => {
  const [useDarkTheme, setUseDarkTheme] = useState(false);
  return (
    <ThemeProvider theme={useDarkTheme ? darkTheme : defaultTheme}>
      <button
        style={{
          margin: "0 16px 24px",
          padding: "8px",
          background: "none",
          cursor: "pointer",
          border: "2px solid #000",
          marginTop: "60px"
        }}
        onClick={() => setUseDarkTheme(true)}
      >
        Dark theme
      </button>
      <button
        style={{
          margin: "0 16px 24px",
          padding: "8px",
          background: "none",
          cursor: "pointer",
          border: "2px solid #000",
          marginTop: "60px"
        }}
        onClick={() => setUseDarkTheme(false)}
      >
        Default theme
      </button>
      <div
        style={{
            background: useDarkTheme
                ? defaultTheme.primaryColor
                : darkTheme.primaryColor,
            width: "100vw",
            height: "90vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around"
        }}
      >
        <PrimaryButton>Hello world</PrimaryButton>
        <SecondaryButton>Hello world</SecondaryButton>
        <TertiaryButton>Hello world</TertiaryButton>
      </div>
      <GlobalStyle />
    </ThemeProvider>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
