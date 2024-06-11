import styled from "styled-components";
import {Link} from "react-router-dom";

export const HomeWrapper = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    gap: 80px;
`

export const HomeHeader = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
`

export const HomeHeaderSearch = styled.div`
    display: flex;
    justify-content: space-between;
    
    >:first-child {
        min-width: 480px;
    }
`

export const HomeAccountButton = styled.div`
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

export const HomeHeaderGenres = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
`

export const HomeHeaderGenre = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 8px 16px;
    border-radius: 40px;
    border: 2px solid ${({theme})=>theme.colors.neutrals.lightGrey};
    font-size: ${({theme})=>theme.typography.text.size.s}px;
    line-height: ${({theme})=>theme.typography.text.lineHeight.s}px;
    font-weight: ${({theme})=>theme.typography.text.weight.m};
    color: ${({theme})=>theme.colors.neutrals.lightGrey};
    cursor: pointer;
    
    >svg {
        width: 24px;
        height: 24px;
    }
`

export const HomeMixWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 32px;
`

export const HomeMix = styled.div`
    display: flex;
    flex-wrap: nowrap;
    gap: 32px;
`

export const HomeSectionTitle = styled.div`
    font-size: ${({theme})=>theme.typography.heading.size.semiM}px;
    line-height: ${({theme})=>theme.typography.heading.lineHeight.semiM}px;
    font-weight: ${({theme})=>theme.typography.heading.weight.l};
    color: ${({theme})=>theme.colors.neutrals.white};
`

export const HomeMixItem = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
`

export const HomeMixItemImage = styled.img`
    width: 220px;
    height: 220px;
    border-radius: 10px;
    background: ${({theme}) => theme.colors.neutrals.lightGrey};
`

export const HomeMixItemData = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`

export const HomeMixItemTitle = styled.div`
    font-size: ${({theme})=>theme.typography.text.size.m}px;
    line-height: ${({theme})=>theme.typography.text.lineHeight.m}px;
    font-weight: ${({theme})=>theme.typography.text.weight.l};
    color: ${({theme})=>theme.colors.neutrals.white};
`

export const HomeMixItemDescription = styled.div`
    font-size: ${({theme})=>theme.typography.text.size.s}px;
    line-height: ${({theme})=>theme.typography.text.lineHeight.s}px;
    font-weight: ${({theme})=>theme.typography.text.weight.m};
    color: ${({theme})=>theme.colors.neutrals.lightGrey};
    max-width: 220px;
`

export const HomeAlbums = styled.div`
    display: flex;
    flex-wrap: nowrap;
    gap: 32px;
`

export const HomeAlbumsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 32px;
`

export const HomeAlbumsItem = styled.div`
    display: flex;
    gap: 16px;
`

export const HomeAlbumsItemImage = styled.img`
    width: 220px;
    height: 220px;
    border-radius: 10px;
    background: ${({theme})=>theme.colors.neutrals.lightGrey};
`

export const HomeAlbumsItemData = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`

export const HomeAlbumsItemDataText = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`

export const HomeAlbumsItemTitle = styled.div`
    font-size: ${({theme})=>theme.typography.text.size.m}px;
    line-height: ${({theme})=>theme.typography.text.lineHeight.m}px;
    font-weight: ${({theme})=>theme.typography.text.weight.l};
    color: ${({theme})=>theme.colors.neutrals.white};
`

export const HomeAlbumsItemDescription = styled.div`
    font-size: ${({theme})=>theme.typography.text.size.s}px;
    line-height: ${({theme})=>theme.typography.text.lineHeight.s}px;
    font-weight: ${({theme})=>theme.typography.text.weight.m};
    color: ${({theme})=>theme.colors.neutrals.lightGrey};
`

export const AlbumsMusicItem = styled.div`
    display: flex;
    gap: 16px;
    align-items: center;
    cursor: pointer;
`

export const AlbumsMusicItemImage = styled.img`
    width: 52px;
    height: 52px;
    border-radius: 3px;
    background: ${({theme})=>theme.colors.neutrals.lightGrey};
`

export const AlbumsMusicItemData = styled.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
`

export const AlbumsMusicItemTitle = styled.div`
    font-size: ${({theme})=>theme.typography.heading.size.extraS}px;
    line-height: ${({theme})=>theme.typography.heading.lineHeight.extraS}px;
    font-weight: ${({theme})=>theme.typography.heading.weight.l};
    color: ${({theme})=>theme.colors.neutrals.white};
`

export const AlbumsMusicItemAuthor = styled.div`
    font-size: ${({theme})=>theme.typography.text.size.s}px;
    line-height: ${({theme})=>theme.typography.text.lineHeight.s}px;
    font-weight: ${({theme})=>theme.typography.text.weight.m};
    color: ${({theme})=>theme.colors.neutrals.lightGrey};
`

export const HomeSuggestionsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 32px;
`

export const HomeSuggestions = styled.div`
    display: flex;
    flex-wrap: nowrap;
    gap: 32px;
`

export const HomeSuggestionGenres = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    max-width: 240px;
`