import styled from "styled-components";

export const AuthLayoutWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
`

export const AuthWrapper  = styled.div`
    display: flex;
    border-radius: 10px;
    min-height: 720px;
    min-width: 1255px;
    
    background: ${({theme})=>theme.colors.neutrals.lightBlack};
`

export const AuthImageWrapper  = styled.div``

export const AuthContentWrapper  = styled.div`
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    align-items: center;
    padding: 24px 58px 68px 58px;
`