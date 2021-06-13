import styled from "styled-components";
import React from "react";
import {Illustrations} from "../../../assets/illustrations";
import {SignInForm} from "../../organisms/forms/signInForm";
import {Modal} from "../../atoms/modals/modals";

export const Wrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export const SignInModal = ({ showModal, setShowModal, onSignUp }) => {
    const signInEvent = () => console.log('signedIn');
    return (
        <Modal showModal={showModal} setShowModal={setShowModal}>
            <Wrapper>
                <SignInForm title='Sign In' signIn={signInEvent} signUp={onSignUp}/>
                <img style={{width: "42%"}} src={Illustrations.SignIn} alt="Sign in to your account" />
            </Wrapper>
        </Modal>
    );
};
