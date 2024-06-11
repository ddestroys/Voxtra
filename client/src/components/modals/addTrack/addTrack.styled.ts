import styled from "styled-components";
import {Modal} from "antd";

export const AddTrackWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 28px;
`

export const AddTrackHeader = styled.div`
    font-size: ${({theme})=>theme.typography.heading.size.semiM}px;
    line-height: ${({theme})=>theme.typography.heading.lineHeight.semiM}px;
    font-weight: ${({theme})=>theme.typography.heading.weight.extraL};
    color: ${({theme})=>theme.colors.neutrals.white};
`


export const StyledModal = styled(Modal)`
    width: 800px !important;
    .ant-modal-content {
        padding: 24px;
        background: ${({theme})=>theme.colors.neutrals.darkGrey};
    }
`

export const AddTrackContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 14px;
`

export const AddTrackItem = styled.div`
    display: flex;
    gap: 16px;
    align-items: center;
    cursor: pointer;
`

export const AddTrackItemImage = styled.div<{$src: string}>`
    width: 52px;
    height: 52px;
    border-radius: 3px;
    background: ${({theme})=>theme.colors.neutrals.lightGrey};
    background-image: ${({$src})=>$src && `url(${$src})`};
    background-position: center;
    background-size: 52px;
`

export const AddTrackItemData = styled.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
`

export const AddTrackItemTitle = styled.div`
    font-size: ${({theme})=>theme.typography.heading.size.extraS}px;
    line-height: ${({theme})=>theme.typography.heading.lineHeight.extraS}px;
    font-weight: ${({theme})=>theme.typography.heading.weight.l};
    color: ${({theme})=>theme.colors.neutrals.white};
`

export const AddTrackItemAuthor = styled.div`
    font-size: ${({theme})=>theme.typography.text.size.s}px;
    line-height: ${({theme})=>theme.typography.text.lineHeight.s}px;
    font-weight: ${({theme})=>theme.typography.text.weight.m};
    color: ${({theme})=>theme.colors.neutrals.lightGrey};
`

export const AddTrackItemRemove = styled.div`
    margin-left: auto;
`