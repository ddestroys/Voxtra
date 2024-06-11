import styled from "styled-components";

export const ProfileLayoutWrapper = styled.div`
    display: flex;
    height: 100%;
    padding: 30px 24px;
    gap: 18px;
`

export const ProfileLayoutSidebar = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    min-width: 312px;
    max-width: 312px;
`

export const ProfileSidebarActions = styled.div`
    display: flex;
    flex-direction: column;
    gap: 40px;
    background: ${({theme})=>theme.colors.neutrals.lightBlack};
    padding: 24px 32px;
    border-radius: 20px;
    flex-grow: 1;
`

export const ProfileSidebarActionsContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 32px;
`

export const ProfileSidebarActionsItem = styled.div<{$active?: boolean}>`
    display: flex;
    gap: 24px;
    align-items: center;
    cursor: pointer;
    
    font-size: ${({theme})=>theme.typography.text.size.m}px;
    line-height: ${({theme})=>theme.typography.text.lineHeight.m}px;
    font-weight: ${({theme})=>theme.typography.text.weight.l};

    color: ${({theme,$active})=>$active ? theme.colors.neutrals.white : theme.colors.neutrals.grey};
    
    >svg {
        color: ${({theme,$active})=>$active ? theme.colors.neutrals.white : theme.colors.neutrals.grey};
    }
`

export const ProfileLayoutContent = styled.div`
    display: flex;
    flex-grow: 1;
    border-radius: 20px;
    background: ${({theme})=>theme.colors.neutrals.lightBlack};
    padding: 24px 32px;
`