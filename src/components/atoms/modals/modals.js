import styled from "styled-components";
import React from "react";
import {Close} from "../../../assets/icons";
import {animated, useSpring} from "react-spring";

export const ModalWrapper = styled.div`
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background-color: ${props => props.theme.formElementBackground};
  color: ${props => props.theme.textOnFormElementBackground};
  display: flex;
  position: relative;
  border-radius: 2px;
  width: fit-content;
`;

export const ChildrenWrapper = styled.div`
  padding: 2rem;
`;

const CloseModalButton = styled.button`
  cursor: pointer;
  background: none;
  border: none;
  position: absolute;
  top: 1rem;
  right: 1rem;
  padding: 0;
`;

const getAnimation = showModal => {
    return {
        opacity: showModal ? 1 : 0,
        transform: showModal ? `translateY(0)` : `translateY(-200%)`
    };
};

export const Modal = ({ showModal, setShowModal, children }) => {
    return (
        <animated.div style={useSpring(getAnimation(showModal))}>
            <ModalWrapper>
                <ChildrenWrapper>
                    {children}
                </ChildrenWrapper>
                <CloseModalButton onClick={() => setShowModal(false)}>
                    <Close />
                </CloseModalButton>
            </ModalWrapper>
        </animated.div>
    );
};
