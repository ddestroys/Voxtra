import styled from "styled-components";

export const PlayerWrapper = styled.div`
    display: flex;
    position: relative;
    padding: 20px 56px;
    background: ${({theme})=>theme.colors.neutrals.black};
    width: 100%;
    height: 100px;
`

export const PlayerDataBlock = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-width: 300px;
`

export const PlayerItem = styled.div`
    display: flex;
    gap: 16px;
    align-items: center;
    cursor: pointer;
`

export const PlayerItemImage = styled.div<{$src: string}>`
    width: 52px;
    height: 52px;
    border-radius: 3px;
    background: ${({theme})=>theme.colors.neutrals.lightGrey};
    background-image: ${({$src})=>$src && `url(${$src})`};
    background-position: center;
    background-size: 52px;
`

export const PlayerItemData = styled.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
`

export const PlayerItemTitle = styled.div`
    font-size: ${({theme})=>theme.typography.heading.size.extraS}px;
    line-height: ${({theme})=>theme.typography.heading.lineHeight.extraS}px;
    font-weight: ${({theme})=>theme.typography.heading.weight.l};
    color: ${({theme})=>theme.colors.neutrals.white};
`

export const PlayerItemAuthor = styled.div`
    font-size: ${({theme})=>theme.typography.text.size.s}px;
    line-height: ${({theme})=>theme.typography.text.lineHeight.s}px;
    font-weight: ${({theme})=>theme.typography.text.weight.m};
    color: ${({theme})=>theme.colors.neutrals.lightGrey};
`

export const PlayerPrimaryControls = styled.div`
    display: flex;
    justify-content: center;
    gap: 50px;
    align-items: center;
    flex-grow: 1;
`

export const PlayButton = styled.div`
    background: ${({theme})=>theme.colors.primary.dark};
    border-radius: 50%;
    padding: 14px;
`

export const PlayerSecondaryControls = styled.div`
    display: flex;
    justify-content: flex-end;
    gap: 40px;
    align-items: center;
    min-width: 300px;
`

export const PlayerRunningRow = styled.input`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    accent-color: ${({theme})=>theme.colors.yellow.normal};
    height: 4px;
`