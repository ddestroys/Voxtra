import {Modal} from "antd";
import styled from "styled-components";

export const StyledModal = styled(Modal)`
    width: 600px !important;

    .ant-modal-content {
        padding: 24px;
        background: ${({theme}) => theme.colors.neutrals.darkGrey};
    }
`

export const CreatePlaylistWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 50px;
`

export const CreatePlaylistTitle = styled.div`
    font-size: ${({theme})=>theme.typography.heading.size.semiM}px;
    line-height: ${({theme})=>theme.typography.heading.lineHeight.semiM}px;
    font-weight: ${({theme})=>theme.typography.heading.weight.l};
    color: ${({theme})=>theme.colors.neutrals.white};
`

export const CreatePlaylistContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 14px;
`

export const CreatePlaylistButtons = styled.div`
    display: flex;
    justify-content: flex-end;
`

export const CreatePlaylistItem = styled.div`
    display: flex;
    gap: 16px;
    align-items: center;
    cursor: pointer;
`

export const CreatePlaylistItemImage = styled.div<{$src: boolean}>`
    width: 52px;
    height: 52px;
    border-radius: 3px;
    background: ${({theme})=>theme.colors.neutrals.lightGrey};
    background-image: ${({$src})=>$src && `url(${$src})`};
    background-position: center;
    background-size: 52px;
`

export const CreatePlaylistItemData = styled.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
`

export const CreatePlaylistItemRemove = styled.div`
    margin-left: auto;
`

export const CreatePlaylistItemTitle = styled.div`
    font-size: ${({theme})=>theme.typography.heading.size.extraS}px;
    line-height: ${({theme})=>theme.typography.heading.lineHeight.extraS}px;
    font-weight: ${({theme})=>theme.typography.heading.weight.l};
    color: ${({theme})=>theme.colors.neutrals.white};
`

export const CreatePlaylistItemAuthor = styled.div`
    font-size: ${({theme})=>theme.typography.text.size.s}px;
    line-height: ${({theme})=>theme.typography.text.lineHeight.s}px;
    font-weight: ${({theme})=>theme.typography.text.weight.m};
    color: ${({theme})=>theme.colors.neutrals.lightGrey};
`

export const CreatePlaylistAdd = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    font-size: ${({theme})=>theme.typography.text.size.m}px;
    line-height: ${({theme})=>theme.typography.text.lineHeight.m}px;
    font-weight: ${({theme})=>theme.typography.text.weight.l};
    color: ${({theme})=>theme.colors.neutrals.lightGrey};

    >svg {
        color: ${({theme})=>theme.colors.neutrals.lightGrey};
    }
`