import styled from "styled-components";
import {Modal} from "antd";

export const StyledModal = styled(Modal)`
    width: 400px !important;

    .ant-modal-content {
        padding: 24px;
        background: ${({theme}) => theme.colors.neutrals.darkGrey};
    }
`

export const AddTrackToPlaylistWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 34px;
`

export const AddTrackToPlaylistTitle = styled.div`
    font-size: ${({theme})=>theme.typography.text.size.m}px;
    line-height: ${({theme})=>theme.typography.text.lineHeight.m}px;
    font-weight: ${({theme})=>theme.typography.text.weight.m};
    color: ${({theme})=>theme.colors.neutrals.white};
`

export const AddTrackToPlaylistContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 14px;
`

export const AddTrackToPlaylistItem = styled.div`
    display: flex;
    gap: 16px;
    align-items: center;
    cursor: pointer;
`

export const AddTrackToPlaylistItemImage = styled.div`
    width: 52px;
    height: 52px;
    border-radius: 3px;
    background: ${({theme})=>theme.colors.neutrals.lightGrey};
`

export const AddTrackToPlaylistItemData = styled.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
`

export const AddTrackToPlaylistItemTitle = styled.div`
    font-size: ${({theme})=>theme.typography.heading.size.extraS}px;
    line-height: ${({theme})=>theme.typography.heading.lineHeight.extraS}px;
    font-weight: ${({theme})=>theme.typography.heading.weight.l};
    color: ${({theme})=>theme.colors.neutrals.white};
`

export const AddTrackToPlaylistItemAuthor = styled.div`
    font-size: ${({theme})=>theme.typography.text.size.s}px;
    line-height: ${({theme})=>theme.typography.text.lineHeight.s}px;
    font-weight: ${({theme})=>theme.typography.text.weight.m};
    color: ${({theme})=>theme.colors.neutrals.lightGrey};
`

export const AddTrackToPlaylistAdd = styled.div`
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