import React from "react";
import ReactDOM from "react-dom";
import {GlobalStyle} from "./utils";
import {PrimaryButton, SecondaryButton, TertiaryButton} from "./components/atoms/button/button.style";

const App = () => (
    <>
        <GlobalStyle />
        <PrimaryButton modifiers={["small"]}>Hello world</PrimaryButton>
        <SecondaryButton modifiers={["large", "warning"]}>Hello world</SecondaryButton>
        <TertiaryButton>Hello world</TertiaryButton>
    </>
);

ReactDOM.render(<App />, document.querySelector("#root"));
