import styled from "styled-components";
import {Modal} from "antd";

export const TrackWrapper = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    gap: 80px;
`

export const TrackHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    
    >button {
        display: flex;
        gap: 4px;
        align-items: center;
        >svg {
            width: 20px;
            height: 20px;
        }
    }
`

export const TrackHeaderTitle = styled.div`
    font-size: ${({theme})=>theme.typography.heading.size.m}px;
    line-height: ${({theme})=>theme.typography.heading.lineHeight.m}px;
    font-weight: ${({theme})=>theme.typography.heading.weight.extraL};
    color: ${({theme})=>theme.colors.neutrals.white};
`

export const TrackText = styled.div<{$translated?: boolean}>`
    position: relative;
    width: 100%;
    font-size: ${({theme})=>theme.typography.heading.size.semiM}px;
    line-height: ${({theme})=>theme.typography.heading.lineHeight.semiM}px;
    font-weight: ${({theme})=>theme.typography.heading.weight.extraL};
    color: ${({theme})=>theme.colors.neutrals.lightGrey};
    border-radius: 10px;
    height: 100%;
    padding: 24px 48px;
    ${({$translated, theme})=>$translated && `background: ${theme.colors.neutrals.darkGrey}`};
`

export const TrackTextWrapper = styled.div`
    display: flex;
    gap: 52px;
    justify-content: space-between;
    height: 100%;
    padding: 0 220px;
`

export const TrackTextIcon = styled.div`
    position: absolute;
    top: 24px;
    right: 24px;
`

export const StyledModal = styled(Modal)`
    width: 740px !important;
    .ant-modal-content {
        padding: 24px;
        background: ${({theme})=>theme.colors.neutrals.darkGrey};
    }
`

export const TranslateTitleRow = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: ${({theme})=>theme.typography.text.size.m}px;
    line-height: ${({theme})=>theme.typography.text.lineHeight.m}px;
    font-weight: ${({theme})=>theme.typography.text.weight.m};
    color: ${({theme})=>theme.colors.neutrals.white};
    margin-bottom: 16px;

    >button {
        display: flex;
        gap: 4px;
        align-items: center;
        >svg {
            width: 20px;
            height: 20px;
        }
    }
`

export const TranslateSelectRow = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const SelectWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    font-size: ${({theme})=>theme.typography.text.size.m}px;
    line-height: ${({theme})=>theme.typography.text.lineHeight.m}px;
    font-weight: ${({theme})=>theme.typography.text.weight.m};
    color: ${({theme})=>theme.colors.neutrals.grey};
    min-width: 280px;
    
    .react-select__control {
        border-color: ${({theme})=>theme.colors.neutrals.grey} !important;
    }
`