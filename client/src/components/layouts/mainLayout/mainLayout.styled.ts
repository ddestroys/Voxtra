import styled from "styled-components";

export const MainLayoutWrapper = styled.div`
    display: flex;
    height: 100%;
    padding: 30px 24px;
    gap: 18px;
`

export const MainLayoutSidebar = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    min-width: 312px;
    max-width: 312px;
`

export const MainSidebarActions = styled.div`
    display: flex;
    flex-direction: column;
    gap: 40px;
    background: ${({theme})=>theme.colors.neutrals.lightBlack};
    padding: 24px 32px;
    border-radius: 20px;
`

export const MainSidebarActionsContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 32px;
`

export const MainSidebarActionsItem = styled.div<{$active?: boolean}>`
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

export const MainSidebarMusic = styled.div`
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    gap: 24px;
    background: ${({theme})=>theme.colors.neutrals.lightBlack};
    padding: 24px 32px;
    border-radius: 20px;
`

export const MainSidebarMusicHeader = styled.div`
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

export const MainSidebarMusicContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 14px;
`

export const MainSidebarMusicItem = styled.div`
    display: flex;
    gap: 16px;
    align-items: center;
    cursor: pointer;
`

export const MainSidebarMusicItemImage = styled.div<{$src: string}>`
    width: 52px;
    height: 52px;
    border-radius: 3px;
    background: ${({theme})=>theme.colors.neutrals.lightGrey};
    background-image: ${({$src})=>$src && `url(${$src})`};
    background-position: center;
    background-size: 52px;
`

export const MainSidebarMusicItemData = styled.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
`

export const MainSidebarMusicItemTitle = styled.div`
    font-size: ${({theme})=>theme.typography.heading.size.extraS}px;
    line-height: ${({theme})=>theme.typography.heading.lineHeight.extraS}px;
    font-weight: ${({theme})=>theme.typography.heading.weight.l};
    color: ${({theme})=>theme.colors.neutrals.white};
`

export const MainSidebarMusicItemAuthor = styled.div`
    font-size: ${({theme})=>theme.typography.text.size.s}px;
    line-height: ${({theme})=>theme.typography.text.lineHeight.s}px;
    font-weight: ${({theme})=>theme.typography.text.weight.m};
    color: ${({theme})=>theme.colors.neutrals.lightGrey};
`

export const MainLayoutContent = styled.div`
    display: flex;
    flex-grow: 1;
    border-radius: 20px;
    background: ${({theme})=>theme.colors.neutrals.lightBlack};
    padding: 24px 32px;
`