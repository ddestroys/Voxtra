import styled from "styled-components";
import {ButtonType} from "./Button.types";

export const StyledButton = styled.button<{$buttonType: ButtonType}>`
    padding: 16px 24px;
    border-radius: 40px;
    border: 2px solid ${({theme})=> theme.colors.primary.dark};
    background: ${({theme, $buttonType})=> {
        if($buttonType === 'primary') {
            return theme.colors.primary.dark
        } else {
            return 'transparent';
        }
    }};
    color: ${({theme})=> theme.colors.neutrals.white};
    font-size: ${({theme})=>theme.typography.text.size.s}px;
    line-height: ${({theme})=>theme.typography.text.lineHeight.s}px;
    font-weight: ${({theme})=>theme.typography.text.weight.s};
    cursor: pointer;
`