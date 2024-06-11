import styled from "styled-components";
import {Popover, PopoverProps} from "antd";

export const MainLayoutContent = styled.div`
    display: flex;
    flex-grow: 1;
    //border-radius: 20px;
    //background: ${({theme})=>theme.colors.neutrals.lightBlack};
    //padding: 24px 32px;
`

export const PlaylistMainWrapper = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    gap: 20px;
`

export const PlaylistHeader = styled.div`
    display: flex;
    justify-content: space-between;
    min-height: 377px;
    border-radius: 20px;
    background: ${({theme})=>theme.colors.neutrals.lightBlack};
    padding: 24px 32px;
`

export const PlaylistHeaderPrimary = styled.div`
    display: flex;
    gap: 16px;
    align-items: flex-end;
`

export const PlaylistHeaderImage = styled.div<{$src: string}>`
    width: 240px;
    height: 240px;
    border-radius: 10px;
    background: ${({theme})=>theme.colors.neutrals.lightGrey};
    background-image: ${({$src})=>$src && `url(${$src})`};
    background-position: center;
    background-size: 240px;
`

export const PlaylistHeaderData = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`

export const PlaylistHeaderTitle = styled.div`
    font-size: ${({theme})=>theme.typography.heading.size.l}px;
    line-height: ${({theme})=>theme.typography.heading.lineHeight.l}px;
    font-weight: ${({theme})=>theme.typography.heading.weight.extraL};
    color: ${({theme})=>theme.colors.neutrals.white};
`

export const PlaylistHeaderAuthor = styled.div`
    font-size: ${({theme})=>theme.typography.text.size.m}px;
    line-height: ${({theme})=>theme.typography.text.lineHeight.m}px;
    font-weight: ${({theme})=>theme.typography.text.weight.m};
    color: ${({theme})=>theme.colors.neutrals.lightGrey};
`

export const PlaylistHeaderSecondary = styled.div`
    display: flex;
    gap: 16px;
    align-items: flex-start;
    position: relative;
`

export const PlaylistHeaderButton = styled.div`
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

export const PlaylistHeaderActions = styled.div`
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

export const PlaylistTracksWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 48px;
    border-radius: 20px;
    background: ${({theme})=>theme.colors.neutrals.lightBlack};
    padding: 24px 32px;
    flex-grow: 1;
`

export const PlaylistTracksHeader = styled.div`
    width: 400px;
`

export const PlaylistTracksContent = styled.div`
    display: flex;
    flex-direction: column;
`

export const PlaylistTrack = styled.div`
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
        
        .track_play {
            visibility: visible;
        }
    }
`

export const PlaylistTrackCount = styled.div`
    margin-right: 56px;
`

export const PlaylistTrackWrapper = styled.div`
    display: flex;
    gap: 12px;
    min-width: 400px;
    max-width: 400px;
`

export const PlaylistTrackSecondaryWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    flex-grow: 1;
    align-items: center;
    
    .track_play {
        display: flex;
        align-items: center;
        visibility: hidden;
    }
`

export const PlaylistTrackDataImage = styled.div<{$src: string}>`
    width: 52px;
    height: 52px;
    border-radius: 3px;
    background: ${({theme})=>theme.colors.neutrals.lightGrey};
    background-image: ${({$src})=>$src && `url(${$src})`};
    background-position: center;
    background-size: 52px;
`

export const PlaylistTrackData = styled.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
`

export const PlaylistTrackTitle = styled.div`
    font-size: ${({theme})=>theme.typography.heading.size.extraS}px;
    line-height: ${({theme})=>theme.typography.heading.lineHeight.extraS}px;
    font-weight: ${({theme})=>theme.typography.heading.weight.l};
    color: ${({theme})=>theme.colors.neutrals.white};
`

export const PlaylistTrackAuthor = styled.div`
    font-size: ${({theme})=>theme.typography.text.size.s}px;
    line-height: ${({theme})=>theme.typography.text.lineHeight.s}px;
    font-weight: ${({theme})=>theme.typography.text.weight.m};
    color: ${({theme})=>theme.colors.neutrals.lightGrey};
`

export const PlaylistTrackAlbum = styled.div`
    font-size: ${({theme})=>theme.typography.text.size.s}px;
    line-height: ${({theme})=>theme.typography.text.lineHeight.s}px;
    font-weight: ${({theme})=>theme.typography.text.weight.m};
    color: ${({theme})=>theme.colors.neutrals.lightGrey};
`

export const PlaylistTrackActions = styled.div`
    display: flex;
    align-items: center;
    gap: 48px;

    >:last-child {
        visibility: hidden;
    }
`

export const PlaylistTrackAdditionalMenu = styled.div`
    display: flex;
    flex-direction: column;
    background: ${({theme})=>theme.colors.neutrals.darkGrey};
    padding: 24px;
    gap: 12px;
`

export const PlaylistTrackAdditionalMenuItem = styled.div`
    display: flex;
    gap: 12px;
    cursor: pointer;
    font-size: ${({theme})=>theme.typography.text.size.m}px;
    line-height: ${({theme})=>theme.typography.text.lineHeight.m}px;
    font-weight: ${({theme})=>theme.typography.text.weight.m};
    color: ${({theme})=>theme.colors.neutrals.lightGrey};
`

export const StyledPopover = styled(
    ({ className, ...props }: PopoverProps) => (
        <Popover overlayClassName={className} {...props} />
))`
    .ant-popover-content .ant-popover-inner {
        padding: 0;
        background: ${({theme})=>theme.colors.neutrals.darkGrey};
        .ant-popover-inner-content {
            >div {border-radius: 10px;overflow: hidden;}
        }
    }
`