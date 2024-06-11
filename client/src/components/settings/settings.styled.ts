import styled from "styled-components";
import {Radio as AntdRadio} from "antd";

export const SettingsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    gap: 42px;
    border-radius: 20px;
    background: ${({theme})=>theme.colors.neutrals.lightBlack};
    padding: 24px 32px;
`

export const SettingsHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
`

export const SettingsHeaderTitle = styled.div`
    font-size: ${({theme})=>theme.typography.heading.size.m}px;
    line-height: ${({theme})=>theme.typography.heading.lineHeight.m}px;
    font-weight: ${({theme})=>theme.typography.heading.weight.extraL};
    color: ${({theme})=>theme.colors.neutrals.white};
    
    margin-top: 56px;
`

export const SettingsHeaderButton = styled.div`
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

export const SettingsContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
`

export const SettingsContentRow = styled.div`
    display: flex;
    justify-content: space-between;
    
    >:last-child {
        min-width: 300px;
    }
`

export const SettingsContentRowTitle = styled.div`
    font-size: ${({theme})=>theme.typography.text.size.m}px;
    line-height: ${({theme})=>theme.typography.text.lineHeight.m}px;
    font-weight: ${({theme})=>theme.typography.text.weight.m};
    color: ${({theme})=>theme.colors.neutrals.lightGrey};
`

export const RadioGroup = styled(AntdRadio.Group)`
    display: flex;
    justify-content: flex-end;
    gap: 12px;
`

export const Radio = styled(AntdRadio)`
    display: flex;
    align-items: center;
    gap: 8px;
`

export const RadioInput = styled(AntdRadio)`
    font-size: ${({theme})=>theme.typography.text.size.m}px;
    line-height: ${({theme})=>theme.typography.text.lineHeight.m}px;
    font-weight: ${({theme})=>theme.typography.text.weight.m};
    color: ${({theme})=>theme.colors.neutrals.lightGrey};
        .ant-radio-checked .ant-radio-inner {
            border-color: ${({theme})=>theme.colors.neutrals.lightGrey};
            background-color: ${({theme})=>theme.colors.primary.normal};
            
            &::after {
                background-color: ${({theme})=>theme.colors.primary.normal};
            }
        }
        .ant-radio-inner {


            width: 28px;
            height: 28px;
            border: 2px solid ${({theme})=>theme.colors.neutrals.lightGrey};
            background: transparent;
        }
`