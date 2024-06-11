import styled from "styled-components";

export const LoginContentTitle = styled.div`
    font-size: ${({theme})=>theme.typography.heading.size.semiM}px;
    line-height: ${({theme})=>theme.typography.heading.lineHeight.semiM}px;
    font-weight: ${({theme})=>theme.typography.heading.weight.extraL};
    
    margin-top: 32px;
    margin-bottom: 48px;
`

export const LoginForm = styled.form`
    display: flex;
    width: 100%;
    flex-direction: column;
    gap: 16px;
`

export const LoginRedirect = styled.div`
    font-size: ${({theme})=>theme.typography.text.size.s}px;
    line-height: ${({theme})=>theme.typography.text.lineHeight.s}px;
    font-weight: ${({theme})=>theme.typography.text.weight.l};
    color: ${({theme})=>theme.colors.neutrals.grey};
    display: flex;
    gap: 4px;
    margin-top: 32px;
`

export const LoginRedirectButton = styled.div`
    color: ${({theme})=>theme.colors.primary.light};
    text-decoration: underline;
    cursor: pointer;
`

export const EnterButtonWrapper = styled.div`
    display: flex;
    width: 100%;
    justify-content: flex-end;
    margin-top: auto;
`