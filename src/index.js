import React, {useState} from "react";
import ReactDOM from "react-dom";
import {darkTheme, defaultTheme, GlobalStyle} from "./utils";
import {ThemeProvider} from "styled-components";
import {SignInModal} from "./components/templates/signInModal/signInModal";
import {SignUpModal} from "./components/templates/signUpModal/signUpModal";

const App = () => {
  const [useDarkTheme, setUseDarkTheme] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showSignUpModal, setShowSignUpModal] = useState(false);
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
      <button
        style={{ margin: "0 16px 24px", padding: "8px", background: "none", cursor: "pointer"}}
        onClick={() => setShowModal(true)}
      >
        Show modal
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
        {showModal &&
            <SignInModal
                showModal={showModal}
                setShowModal={setShowModal}
                onSignUp={() => {
                    setShowModal(false);
                    setShowSignUpModal(true)}
                }
            />
        }
        {showSignUpModal &&
            <SignUpModal
                 showModal={showSignUpModal}
                 setShowModal={setShowSignUpModal}
            />
        }
      </div>
      <GlobalStyle />
    </ThemeProvider>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
