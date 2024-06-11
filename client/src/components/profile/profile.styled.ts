import styled from "styled-components";
import {string} from "yup";
import {Input} from "../../ui-kit/input";

export const ProfileMainWrapper = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    gap: 20px;
`

export const ProfileHeader = styled.div`
    display: flex;
    justify-content: space-between;
    min-height: 377px;
    border-radius: 20px;
    background: ${({theme})=>theme.colors.neutrals.lightBlack};
    padding: 24px 32px;
`

export const ProfileHeaderPrimary = styled.div`
    display: flex;
    gap: 16px;
    align-items: flex-end;
`

export const ProfileHeaderImage = styled.div<{ $src: string }>`
    width: 240px;
    height: 240px;
    border-radius: 50%;
    background: ${({theme})=>theme.colors.neutrals.lightGrey};
    background-image: ${({$src})=>$src && `url(${$src})`};
    background-position: center;
    background-size: 240px;
    
    //display: flex;
    //align-items: center;
    //justify-content: center;
    //
    //:hover {
    //    
    //}
`

export const ProfileHeaderData = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`

export const ProfileHeaderTitle = styled.div`
    font-size: ${({theme})=>theme.typography.heading.size.l}px;
    line-height: ${({theme})=>theme.typography.heading.lineHeight.l}px;
    font-weight: ${({theme})=>theme.typography.heading.weight.extraL};
    color: ${({theme})=>theme.colors.neutrals.white};
`

export const ProfileHeaderAuthor = styled.div`
    font-size: ${({theme})=>theme.typography.text.size.m}px;
    line-height: ${({theme})=>theme.typography.text.lineHeight.m}px;
    font-weight: ${({theme})=>theme.typography.text.weight.m};
    color: ${({theme})=>theme.colors.neutrals.lightGrey};
`

export const ProfileHeaderSecondary = styled.div`
    display: flex;
    gap: 16px;
    align-items: flex-start;
    position: relative;
`

export const ProfileHeaderButton = styled.div`
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

export const ProfileHeaderActions = styled.div`
    display: flex;
    align-items: center;
    gap: 50px;
    position: absolute;
    bottom: -94px;
    right: 80px;
`

export const PlayButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 120px;
    width: 120px;
    border-radius: 50%;
    background: ${({theme})=>theme.colors.primary.dark};
`

export const ProfileDataWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 32px;
    border-radius: 20px;
    background: ${({theme})=>theme.colors.neutrals.lightBlack};
    padding: 24px 32px;
    flex-grow: 1;
`

export const PersonalData = styled.div`
    display: flex;
    flex-direction: column;
    gap: 32px;
`

export const ProfileDataTitle = styled.div`
    font-size: ${({theme})=>theme.typography.heading.size.semiM}px;
    line-height: ${({theme})=>theme.typography.heading.lineHeight.semiM}px;
    font-weight: ${({theme})=>theme.typography.heading.weight.extraL};
    color: ${({theme})=>theme.colors.neutrals.white};
`

export const ProfileDataRows = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
`

export const ProfileDataRow = styled.div`
    display: flex;
    padding: 24px 12px;
    align-items: center;
    justify-content: space-between;
    border-radius: 5px;
    background: ${({theme})=>theme.colors.neutrals.darkGrey};
`

export const ProfileDataRowSubscription = styled.div`
    display: flex;
    padding: 10px 12px;
    align-items: center;
    justify-content: space-between;
    border-radius: 5px;
    background: ${({theme})=>theme.colors.neutrals.darkGrey};
`

export const ProfileDataRowSubscriptionBlock = styled.div`
    display: flex;
    align-items: center;
    gap: 12px
`

export const SubscriptionData = styled.div`
    display: flex;
    flex-direction: column;
    gap: 32px;
`

export const EditModeInput = styled(Input)`
    border: 0;
    padding: 0;
`