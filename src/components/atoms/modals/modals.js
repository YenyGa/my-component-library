import styled from "styled-components";
import React from "react";
import {Illustrations} from "../../../assets/illustrations";
import {Close} from "../../../assets/icons";
import {animated, useSpring} from "react-spring";
import {SignInForm} from "../../organisms/forms/signInForm";

export const ModalWrapper = styled.div`
  width: 800px;
  height: 500px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background-color: ${props => props.theme.formElementBackground};
  color: ${props => props.theme.textOnFormElementBackground};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  border-radius: 2px;
  background: ${props => props.theme.formElementBackground};
`;

const CloseModalButton = styled.button`
  cursor: pointer;
  background: none;
  border: none;
  position: absolute;
  top: 40px;
  right: 40px;
  width: 24px;
  height: 24px;
  padding: 0;
`;

const ColumnModalWrapper = styled(ModalWrapper)`
  flex-direction: row;
  justify-content: space-around;
`;

const getAnimation = showModal => {
    return {
        opacity: showModal ? 1 : 0,
        transform: showModal ? `translateY(0)` : `translateY(-200%)`
    };
};

export const SignInModal = ({ showModal, setShowModal, onSignUp }) => {
    const signInEvent = () => console.log('signedIn');
    return (
        <animated.div style={useSpring(getAnimation(showModal))}>
            <ColumnModalWrapper>
                <SignInForm title='Sign In' signIn={signInEvent} signUp={onSignUp}/>
                <img style={{width: "42%"}} src={Illustrations.SignIn} alt="Sign in to your account" />
                <CloseModalButton onClick={() => setShowModal(false)}>
                    <Close />
                </CloseModalButton>
            </ColumnModalWrapper>
        </animated.div>
    );
};
