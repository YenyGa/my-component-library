import styled from "styled-components";
import {defaultTheme, typeScale} from "../../../utils";
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
    background-color: ${defaultTheme.status.warningColor};
    border-color: ${defaultTheme.status.warningColorHover};
    color: ${defaultTheme.textColorInverted};
    
    &:hover, &:active {
      background-color: ${defaultTheme.status.warningColorHover};
    }
    &:focus {
      background-color: ${defaultTheme.status.warningColorHover};
      outline: 3px solid ${defaultTheme.status.warningColorHover};
      outline-offset: 2px;
    }
  `,
};

export const BaseButton = styled.button`
  padding: 13px 30px;
  font-size: ${typeScale.paragraph};
  border: 1px solid ${defaultTheme.primaryBorderColor};
  border-radius: 26px;
  min-width: 100px;
  cursor: pointer;
  font-family: ${defaultTheme.primaryFont};
  transition: background-color 0.2s linear, color 0.2s linear;
  
  &:hover {
    background-color: ${defaultTheme.primaryHoverColor};
    color: ${defaultTheme.textColorOnPrimary};
  }
  
  &:active {
    background-color: ${defaultTheme.primaryActiveColor};
    color: ${defaultTheme.textColorOnPrimary};
  }
  
  &:focus {
    background-color: ${defaultTheme.primaryHoverColor};
    color: ${defaultTheme.textColorOnPrimary};
    outline-offset: 2px;
  }
  
  &:disabled {
    background-color: ${defaultTheme.disabledColor};
    border: none;
    color: ${defaultTheme.disabledTextColor};
    cursor: not-allowed;
  }
  
  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;

export const PrimaryButton = styled(BaseButton)`
  background-color: ${defaultTheme.primaryColor};
  color: ${defaultTheme.textColorOnPrimary};
  
  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;

export const SecondaryButton = styled(BaseButton)`
  background-color: transparent;
  color: ${defaultTheme.textColorOnSecondary};
  
  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;

export const TertiaryButton = styled(BaseButton)`
  background-color: transparent;
  border: none;
  color: ${defaultTheme.textColorOnSecondary};
    
  &:hover {
    color: ${defaultTheme.textColorOnTertiary};
    background-color: transparent;
  }
  &:active {
    color: ${defaultTheme.textColorOnTertiary};
    background-color: transparent;
  }
  &:focus {
    color: ${defaultTheme.textColorOnTertiary};
    background-color: transparent;
    outline-offset: 2px;
  }
  &:disabled {
    background-color: transparent;
    border: ${defaultTheme.textColorOnPrimary};
    color: ${defaultTheme.disabledTextColor};
    cursor: not-allowed;
  }
  
  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;
