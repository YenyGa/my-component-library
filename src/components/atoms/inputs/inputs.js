import React from "react";
import styled from "styled-components";
import { primaryFont } from "../../../utils";

export const Input = styled.input`
  height: 3.25rem;
  background-color: ${props => props.theme.textFieldBackground};
  border: none;
  padding-left: 0.5rem;
  font-family: ${primaryFont};
  border-radius: 0.125rem;
`;
