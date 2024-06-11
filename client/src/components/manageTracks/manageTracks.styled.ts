import styled from "styled-components";

export const ManageTracksWrapper = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    gap: 80px;
    border-radius: 20px;
    background: ${({theme})=>theme.colors.neutrals.lightBlack};
    padding: 24px 32px;
`

export const ManageTracksHeader = styled.div`
    display: flex;
    gap: 12px;
    align-items: flex-start;
`

export const ManageTracksHeaderButton = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;
    background: ${({theme})=>theme.colors.neutrals.darkGrey};
    border-radius: 40px;
    padding: 8px 24px;

    font-size: ${({theme})=>theme.typography.text.size.s}px;
    line-height: ${({theme})=>theme.typography.text.lineHeight.s}px;
    font-weight: ${({theme})=>theme.typography.text.weight.l};
    color: ${({theme})=>theme.colors.neutrals.lightGrey};
    cursor: pointer;

    >svg {
        width: 24px;
        height: 24px;
        color: ${({theme})=>theme.colors.neutrals.lightGrey};
    }
`

export const ManageTracksContent = styled.div`
    display: flex;
    flex-direction: column;
`