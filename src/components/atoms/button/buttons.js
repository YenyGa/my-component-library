import styled from "styled-components";
import { typeScale } from "../../../utils";
import { applyStyleModifiers } from "styled-components-modifiers";

const BUTTON_MODIFIERS = {
    small: () => `
    font-size: ${typeScale.helperText};
    padding: 8px;
  `,
    large: () => `
    font-size: ${typeScale.header5};
    padding: 16px 24px;
  `,
    warning: () => `
    background-color: ${props => props.theme.status.warningColor};
    border-color: ${props => props.theme.status.warningColorHover};
    color: ${props => props.theme.textColorInverted};
    
    &:hover, &:active {
      background-color: ${props => props.theme.status.warningColorHover};
    }
    &:focus {
      background-color: ${props => props.theme.status.warningColorHover};
      outline: 3px solid ${props => props.theme.status.warningColorHover};
      outline-offset: 2px;
    }
  `,
};

export const BaseButton = styled.button`
  padding: 13px 30px;
  font-size: ${typeScale.paragraph};
  border: 1px solid ${props => props.theme.primaryBorderColor};
  border-radius: 26px;
  min-width: 100px;
  cursor: pointer;
  font-family: ${props => props.theme.primaryFont};
  transition: background-color 0.2s linear, color 0.2s linear;
  
  &:hover {
    background-color: ${props => props.theme.primaryHoverColor};
    color: ${props => props.theme.textColorOnPrimary};
  }
  
  &:active {
    background-color: ${props => props.theme.primaryActiveColor};
    color: ${props => props.theme.textColorOnPrimary};
  }
  
  &:focus {
    background-color: ${props => props.theme.primaryHoverColor};
    color: ${props => props.theme.textColorOnPrimary};
    outline-offset: 2px;
  }
  
  &:disabled {
    background-color: ${props => props.theme.disabledColor};
    border: none;
    color: ${props => props.theme.disabledTextColor};
    cursor: not-allowed;
  }
  
  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;

export const PrimaryButton = styled(BaseButton)`
  background-color: ${props => props.theme.primaryColor};
  color: ${props => props.theme.textColorOnPrimary};
  
  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;

export const SecondaryButton = styled(BaseButton)`
  background-color: transparent;
  color: ${props => props.theme.textColorOnSecondary};
  
  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;

export const TertiaryButton = styled(BaseButton)`
  background-color: transparent;
  border: none;
  color: ${props => props.theme.textColorOnSecondary};
    
  &:hover {
    color: ${props => props.theme.textColorOnTertiary};
    background-color: transparent;
  }
  &:active {
    color: ${props => props.theme.textColorOnTertiary};
    background-color: transparent;
  }
  &:focus {
    color: ${props => props.theme.textColorOnTertiary};
    background-color: transparent;
    outline-offset: 2px;
  }
  &:disabled {
    background-color: transparent;
    border: ${props => props.theme.textColorOnPrimary};
    color: ${props => props.theme.disabledTextColor};
    cursor: not-allowed;
  }
  
  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;
