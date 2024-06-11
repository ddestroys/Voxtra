import styled from "styled-components";

export const LogoWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
`

export const LogoImage = styled.div`
    
`

export const LogoTitle = styled.div`
    font-size: ${({theme})=>theme.typography.text.size.l}px;
    line-height: ${({theme})=>theme.typography.text.lineHeight.l}px;
    font-weight: ${({theme})=>theme.typography.text.weight.l};
    
    color: ${({theme})=>theme.colors.primary.normal}
`