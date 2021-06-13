import React from "react";
import styled from "styled-components";
import { typeScale } from "../../../utils";

export const InputLabel = styled.label`
  color: ${props => props.theme.textFieldLabelColor};
  font-size: ${typeScale.helperText};
  margin: 0.5px 0;
`;

export const H1 = styled.h1`
  color: ${props => props.theme.primaryColor};
  font-size: ${typeScale.header1};
`;

export const H2 = styled.h2`
  color: ${props => props.theme.primaryColor};
  font-size: ${typeScale.header2};
`;

export const H3 = styled.h3`
  color: ${props => props.theme.primaryColor};
  font-size: ${typeScale.header3};
`;

export const H4 = styled.h4`
  color: ${props => props.theme.primaryColor};
  font-size: ${typeScale.header4};
`;

export const H5 = styled.h5`
  color: ${props => props.theme.textFieldLabelColor};
  font-size: ${typeScale.header5};
`;

export const P = styled.p`
  color: ${props => props.theme.textColor};
  font-size: ${typeScale.paragraph};
`;

export const HelperText = styled.label`
  color: ${props => props.theme.textColor};
  font-size: ${typeScale.helperText};
`;

export const CopyrightText = styled.label`
  color: ${props => props.theme.textColor};
  font-size: ${typeScale.copyrightText};
`;
