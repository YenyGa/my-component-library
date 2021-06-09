import styled from "styled-components";
import React from "react";
import {PrimaryButton} from "../../atoms/button/buttons";
import {Illustrations} from "../../../assets/illustrations";
import {H3, P} from "../../atoms/labels/labels";
import {Modal} from "../../atoms/modals/modals";

export const Wrapper = styled.div`
  justify-content: center;
  align-items: center;
  flex-direction: column;
  display: flex;
`;

const SignUpText = styled(P)`
  max-width: 70%;
  text-align: center;
`;

export const SignUpModal = ({ showModal, setShowModal }) => {
    return (
       <Modal showModal={showModal} setShowModal={setShowModal}>
           <Wrapper>
               <img style={{width: "42%"}} src={Illustrations.SignUp} alt="Sign up for an account!" />
               <H3>Sign Up</H3>
               <SignUpText>
                   Sign up today to get access to all of our content and features!
               </SignUpText>
               <PrimaryButton onClick={() => console.log("You signed up!")}>
                   Sign Up
               </PrimaryButton>
           </Wrapper>
       </Modal>
    );
};
