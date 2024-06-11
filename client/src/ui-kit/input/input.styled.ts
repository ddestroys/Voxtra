import styled from "styled-components";

export const InputWrapper = styled.div<{$isFocused?: boolean, $isEmpty?:boolean, $isError?: boolean, $isValid?: boolean}>`
    display: flex;
    align-items: center;
    gap: 25px;
    padding: 14px 24px;
    background: ${({theme})=>theme.colors.neutrals.darkGrey};
    border-radius: 40px;
    transition: all ${({theme})=>theme.animations.duration.short}s;
    border: 2px solid ${({theme, $isFocused, $isEmpty, $isError, $isValid})=>{
        if($isValid) {
            return theme.colors.green.dark
        }
        if($isError) {
            return theme.colors.red.dark
        }
        if($isFocused && !$isEmpty) {
            return theme.colors.neutrals.lightGrey
        }
        if($isFocused) {
            return theme.colors.neutrals.grey
        }
        return theme.colors.neutrals.darkGrey
    }};
`

export const InputPrefixIcon = styled.div`
    display: flex;
`

export const StyledInput = styled.input`
    border: 0;
    background: transparent;
    color: ${({theme})=>theme.colors.neutrals.white};
    outline: none;
    width: 100%;

    &, ::placeholder {
        font-size: ${({theme})=>theme.typography.text.size.s}px;
        line-height: ${({theme})=>theme.typography.text.lineHeight.s}px;
        font-weight: ${({theme})=>theme.typography.text.weight.s};
    }
`