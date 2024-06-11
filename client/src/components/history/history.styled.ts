import styled from "styled-components";

export const HistoryWrapper = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    gap: 42px;
    border-radius: 20px;
    background: ${({theme})=>theme.colors.neutrals.lightBlack};
    padding: 24px 32px;
`

export const HistoryHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
`

export const HistoryHeaderTitle = styled.div`
    font-size: ${({theme})=>theme.typography.heading.size.m}px;
    line-height: ${({theme})=>theme.typography.heading.lineHeight.m}px;
    font-weight: ${({theme})=>theme.typography.heading.weight.extraL};
    color: ${({theme})=>theme.colors.neutrals.white};
    
    margin-top: 56px;
`

export const HistoryHeaderButtons = styled.div`
    display: flex;
    gap: 8px;
`

export const HistoryHeaderButton = styled.div`
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

export const HistoryContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
`

export const HistoryTrack = styled.div`
    display: flex;
    padding: 16px;
    align-items: center;
    
    &:hover {
       // background: ${({theme})=>theme.colors.neutrals.lightGrey};
        .track_actions {
            >:last-child {
                visibility: visible;
            }
        }
    }
`

export const HistoryTrackActions = styled.div`
    display: flex;
    align-items: center;
    gap: 48px;

    >:last-child {
        visibility: hidden;
    }
`

export const HistoryTrackCount = styled.div`
    margin-right: 56px;
`

export const HistoryTrackWrapper = styled.div`
    display: flex;
    gap: 12px;
    min-width: 400px;
    max-width: 400px;
`

export const HistoryTrackSecondaryWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    flex-grow: 1;
    align-items: center;
    
    >:nth-child(2) {
        min-width: 300px;
    }
`

export const HistoryTrackDataImage = styled.div<{$src: string}>`
    width: 52px;
    height: 52px;
    border-radius: 3px;
    background: ${({theme})=>theme.colors.neutrals.lightGrey};
    background-image: ${({$src})=>$src && `url(${$src})`};
    background-position: center;
    background-size: 52px;
`

export const HistoryTrackData = styled.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
`

export const HistoryTrackTitle = styled.div`
    font-size: ${({theme})=>theme.typography.heading.size.extraS}px;
    line-height: ${({theme})=>theme.typography.heading.lineHeight.extraS}px;
    font-weight: ${({theme})=>theme.typography.heading.weight.l};
    color: ${({theme})=>theme.colors.neutrals.white};
`

export const HistoryTrackAuthor = styled.div`
    font-size: ${({theme})=>theme.typography.text.size.s}px;
    line-height: ${({theme})=>theme.typography.text.lineHeight.s}px;
    font-weight: ${({theme})=>theme.typography.text.weight.m};
    color: ${({theme})=>theme.colors.neutrals.lightGrey};
`

export const HistoryTrackAlbum = styled.div`
    font-size: ${({theme})=>theme.typography.text.size.s}px;
    line-height: ${({theme})=>theme.typography.text.lineHeight.s}px;
    font-weight: ${({theme})=>theme.typography.text.weight.m};
    color: ${({theme})=>theme.colors.neutrals.lightGrey};
`