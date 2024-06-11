import styled from "styled-components";

export const LibraryWrapper = styled.div`
    display: flex;
    flex-grow: 1;
    flex-direction: column;

    gap: 62px;
`


export const LibraryHeader = styled.div`
    display: flex;
    justify-content: space-between;
    >:first-child {
        min-width: 400px;
    }
`

export const LibraryHeaderButton = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;
    background: ${({theme})=>theme.colors.neutrals.darkGrey};
    border-radius: 40px;
    padding: 16px 24px;

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

export const LibraryContent = styled.div`
    display: flex;
    gap: 60px;
    flex-wrap: wrap;
`

export const LibraryItem = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
`

export const LibraryItemImage = styled.img<{$isAuthor?: boolean}>`
    width: 220px;
    height: 220px;
    border-radius: ${({$isAuthor})=>$isAuthor ? '50%' : '10px'};
    background: ${({theme})=>theme.colors.neutrals.lightGrey};
`

export const LibraryItemData = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`

export const LibraryItemDataPrimary = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    font-size: ${({theme})=>theme.typography.text.size.s}px;
    line-height: ${({theme})=>theme.typography.text.lineHeight.s}px;
    font-weight: ${({theme})=>theme.typography.text.weight.m};
    color: ${({theme})=>theme.colors.neutrals.lightGrey};
    
    >svg {
        width: 24px;
        height: 24px;
    }
`

export const LibraryItemDataSecondary = styled.div`
    font-size: ${({theme})=>theme.typography.text.size.m}px;
    line-height: ${({theme})=>theme.typography.text.lineHeight.m}px;
    font-weight: ${({theme})=>theme.typography.text.weight.l};
    color: ${({theme})=>theme.colors.neutrals.white};
`