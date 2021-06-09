import React from "react";
import {EmailInput, PasswordInput} from "../../molecules/textFields/textFields";
import {PrimaryButton, SecondaryButton} from "../../atoms/button/buttons";
import styled from "styled-components";
import {typeScale} from "../../../utils";

const Title = styled.h3`
  font-size: ${typeScale.header3};
`;

export const SignInForm = ({title = 'form', signIn, signUp}) => (
  <form>
    <Title>{title}</Title>
    <EmailInput label="Email" placeholder="yeny.garcia@gmail.com" />
    <PasswordInput label="Password" />
    <SecondaryButton style={{ margin: "16px 16px 0 0" }} onClick={signUp}>
        Sign Up
    </SecondaryButton>
    <PrimaryButton onClick={signIn}>
        Sign In
    </PrimaryButton>
  </form>
);