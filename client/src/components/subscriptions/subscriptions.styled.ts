import styled from "styled-components";

export const SubscriptionsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    gap: 42px;
    border-radius: 20px;
    background: ${({theme})=>theme.colors.neutrals.lightBlack};
    padding: 24px 32px;
`

export const SubscriptionsHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
`

export const SubscriptionsHeaderTitle = styled.div`
    font-size: ${({theme})=>theme.typography.heading.size.m}px;
    line-height: ${({theme})=>theme.typography.heading.lineHeight.m}px;
    font-weight: ${({theme})=>theme.typography.heading.weight.extraL};
    color: ${({theme})=>theme.colors.neutrals.white};
    
    margin-top: 56px;
`

export const SubscriptionsHeaderButton = styled.div`
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

export const SubscriptionsContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
`

export const SubscriptionsContentRow = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const SubscriptionsContentBlock = styled.div`
    display: flex;
    gap: 12px;
    align-items: center;
`

export const SubscriptionsContentRowTitle = styled.div`
    font-size: ${({theme})=>theme.typography.text.size.m}px;
    line-height: ${({theme})=>theme.typography.text.lineHeight.m}px;
    font-weight: ${({theme})=>theme.typography.text.weight.m};
    color: ${({theme})=>theme.colors.neutrals.lightGrey};
`

export const SubscriptionsDescriptionWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
`

export const SubscriptionsDescriptionTitle = styled.div`
    font-size: ${({theme})=>theme.typography.heading.size.m}px;
    line-height: ${({theme})=>theme.typography.heading.lineHeight.m}px;
    font-weight: ${({theme})=>theme.typography.heading.weight.extraL};
    color: ${({theme})=>theme.colors.neutrals.white};
`

export const SubscriptionsDescription = styled.div`
    display: flex;
    flex-direction: column;
    //gap: 24px;
`

export const SubscriptionsDescriptionRow = styled.div`
    display: flex;
    justify-content: space-between;
`

export const SubscriptionsDescriptionRowName = styled.div`
    display: flex;
    max-width: 200px;
    min-width: 200px;
    font-size: ${({theme})=>theme.typography.text.size.m}px;
    line-height: ${({theme})=>theme.typography.text.lineHeight.m}px;
    font-weight: ${({theme})=>theme.typography.text.weight.m};
    color: ${({theme})=>theme.colors.neutrals.lightGrey};
`

export const SubscriptionsDescriptionRowColumn = styled.div`
    display: flex;
    justify-content: center;
    width: 250px;
    padding: 12px;
    background: ${({theme})=>theme.colors.neutrals.darkGrey};
    font-size: ${({theme})=>theme.typography.text.size.m}px;
    line-height: ${({theme})=>theme.typography.text.lineHeight.m}px;
    font-weight: ${({theme})=>theme.typography.text.weight.m};
    color: ${({theme})=>theme.colors.neutrals.lightGrey};
    
   
`