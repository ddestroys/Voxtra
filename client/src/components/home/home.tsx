import {MainLayout} from "../layouts/mainLayout";
import {
    AlbumsMusicItem, AlbumsMusicItemAuthor, AlbumsMusicItemData, AlbumsMusicItemImage, AlbumsMusicItemTitle,
    HomeAccountButton,
    HomeAlbums,
    HomeAlbumsItem,
    HomeAlbumsItemData,
    HomeAlbumsItemDataText, HomeAlbumsItemDescription,
    HomeAlbumsItemImage,
    HomeAlbumsItemTitle, HomeAlbumsWrapper,
    HomeHeader,
    HomeHeaderGenre,
    HomeHeaderGenres,
    HomeHeaderSearch,
    HomeMix,
    HomeMixItem,
    HomeMixItemData,
    HomeMixItemDescription,
    HomeMixItemImage,
    HomeMixItemTitle, HomeMixWrapper, HomeSectionTitle, HomeSuggestionGenres, HomeSuggestions, HomeSuggestionsWrapper,
    HomeWrapper
} from "./home.styled";
import {Input} from "../../ui-kit/input";
import {Icon} from "../../ui-kit/Icon";
import {useStore} from "../../store/useStore";
import {observer} from "mobx-react-lite";
import {useNavigate} from "react-router-dom";
import {useState} from "react";
import {
    PlaylistTrack,
    PlaylistTrackActions,
    PlaylistTrackAdditionalMenu,
    PlaylistTrackAdditionalMenuItem,
    PlaylistTrackAlbum,
    PlaylistTrackAuthor,
    PlaylistTrackCount,
    PlaylistTrackData,
    PlaylistTrackDataImage,
    PlaylistTracksContent,
    PlaylistTrackSecondaryWrapper,
    PlaylistTracksHeader, PlaylistTracksWrapper,
    PlaylistTrackTitle,
    PlaylistTrackWrapper,
    StyledPopover
} from "../playlist/playlist.styled";
import {intervalToDuration} from "date-fns";
import {AddTrackToPlaylist} from "../modals/addTrackToPlaylist";
import Mix1 from './mocks/Mix1.png'
import Mix2 from './mocks/Mix2.png'
import Mix3 from './mocks/Mix3.png'
import Mix4 from './mocks/Mix4.png'
import Mix5 from './mocks/Mix5.png'
import Mix6 from './mocks/Mix6.png'
import A from './mocks/A1.jpg'
import B from './mocks/A2.jpg'
import C from './mocks/A3.jpg'

export const Home = observer(() => {
    const {user, track, player} = useStore()
    const {setTracks, fetchTracks, searchTracks} = track
    const {favourite_genres = [], playlists = []} = user.user || {}
    const [search, setSearch] = useState('')

    const navigate = useNavigate()

    console.log(favourite_genres)

    const removeGenre = (id: number) => {
        user.removeUserGenre(id)
    }

    const searchTrack = (e) => {
        setSearch(e.target.value)
        track.searchTracks(e.target.value)
    }

    const playTrack = (track) => {
        console.log(track)
        player.setActive(track)
        user.addTrackToHistory(track.id)
    }

    const patchTrack = async (fav: boolean, trackId) => {
        console.log(trackId)
        await user.patchTrack({liked: fav}, trackId)
        await fetchTracks()
        track.searchTracks(search)
    }

    const removeTrack = async (track: string) => {
        await user.deleteTrack(track)
        await fetchTracks()
        searchTracks(search)
    }

    const [trackIdOpen, setTrackIdOpen] = useState(0)

    return <MainLayout>
        <HomeWrapper>
            <HomeHeader>
                <HomeHeaderSearch>
                    <Input prefixIcon='search' placeholder='Что хотели бы послушать?' value={search}
                           onChange={searchTrack}/>
                    <HomeAccountButton onClick={() => navigate('/profile')}>
                        <Icon iconName='person'/>
                        Аккаунт
                    </HomeAccountButton>
                </HomeHeaderSearch>
                {!search && <HomeHeaderGenres>
                    {favourite_genres?.map(({id, name}) => <HomeHeaderGenre>
                        {name}
                        <div onClick={() => removeGenre(id)}><Icon iconName='cross'/></div>
                    </HomeHeaderGenre>)}
                </HomeHeaderGenres>}
            </HomeHeader>
            {search && <PlaylistTracksWrapper>
                <PlaylistTracksContent>
                    {track.tracks.map(({name, picture, id,liked,duration,album,author, ...track}, index) =>
                        {
                            const {seconds, minutes, hours} = intervalToDuration({start: 0, end: duration * 1000})

                            const formattedDuration = `${hours ? `${hours} :` : ''}${minutes ? `${minutes>=10 ? `${minutes}` : `0${minutes}`} : ` : ''}${seconds ? `${seconds>=10 ? seconds : `0${seconds}`}` : ''}`

                            return <PlaylistTrack>
                                <PlaylistTrackCount>
                                    {index + 1}
                                </PlaylistTrackCount>
                                <PlaylistTrackSecondaryWrapper>
                                    <PlaylistTrackWrapper onClick={()=>navigate(`/track/${id}`)}>
                                        <div className='track_play' onClick={(e) => {
                                            e.stopPropagation()
                                            playTrack({name, picture, id,liked,duration,album,author, ...track})
                                        }}><Icon iconName='play'/></div>
                                        <PlaylistTrackDataImage $src={`http://localhost:5000/${picture}`}>

                                        </PlaylistTrackDataImage>
                                        <PlaylistTrackData>
                                            <PlaylistTrackTitle>
                                                {name}
                                            </PlaylistTrackTitle>
                                            <PlaylistTrackAuthor>
                                                {author?.username}
                                            </PlaylistTrackAuthor>
                                        </PlaylistTrackData>
                                    </PlaylistTrackWrapper>
                                    <PlaylistTrackAlbum>
                                        {album?.name}
                                    </PlaylistTrackAlbum>
                                    <PlaylistTrackActions className='track_actions'>
                                        <div onClick={()=>patchTrack(!liked, id)}><Icon iconName={liked ? 'filled_heart': 'heart'}/></div>
                                        <PlaylistTrackAlbum>
                                            {formattedDuration}
                                        </PlaylistTrackAlbum>
                                        <StyledPopover
                                            arrow={false}
                                            trigger='click'
                                            content={<PlaylistTrackAdditionalMenu>
                                                <PlaylistTrackAdditionalMenuItem onClick={() => setTrackIdOpen(id)}>
                                                    <Icon iconName='play'/>
                                                    Добавить в плейлист
                                                </PlaylistTrackAdditionalMenuItem>
                                                <PlaylistTrackAdditionalMenuItem>
                                                    <Icon iconName='share'/>
                                                    Поделиться
                                                </PlaylistTrackAdditionalMenuItem>
                                                <PlaylistTrackAdditionalMenuItem onClick={() => removeTrack(id)}>
                                                    <Icon iconName='trash'/>
                                                    Удалить
                                                </PlaylistTrackAdditionalMenuItem>
                                            </PlaylistTrackAdditionalMenu>}
                                        >
                                            <div><Icon iconName='more'/></div>
                                        </StyledPopover>
                                    </PlaylistTrackActions>
                                </PlaylistTrackSecondaryWrapper>
                            </PlaylistTrack>}
                    )}
                </PlaylistTracksContent>
                <AddTrackToPlaylist onCancel={() => setTrackIdOpen(0)} isModalOpen={trackIdOpen} trackId={trackIdOpen}/>
            </PlaylistTracksWrapper>}
            {!search && <HomeMixWrapper>
                <HomeSectionTitle>
                    Микс для вас
                </HomeSectionTitle>
                <HomeMix>
                    <HomeMixItem>
                        <HomeMixItemImage src={Mix1} alt=''/>

                        <HomeMixItemData>
                            <HomeMixItemTitle>
                                Микс поп музыки
                            </HomeMixItemTitle>
                            <HomeMixItemDescription>
                                Michael Jackson,  Taylor Swift,Lady Gaga,  Neil Diamond
                            </HomeMixItemDescription>
                        </HomeMixItemData>
                    </HomeMixItem>
                    <HomeMixItem>
                        <HomeMixItemImage src={Mix2} alt=''/>
                        <HomeMixItemData>
                            <HomeMixItemTitle>
                                Микс джаза
                            </HomeMixItemTitle>
                            <HomeMixItemDescription>
                                Billie Holiday, Miles Davis, John Coltrane
                            </HomeMixItemDescription>
                        </HomeMixItemData>
                    </HomeMixItem>
                    <HomeMixItem>
                        <HomeMixItemImage src={Mix3} alt=''/>
                        <HomeMixItemData>
                            <HomeMixItemTitle>
                                Рандомный микс
                            </HomeMixItemTitle>
                            <HomeMixItemDescription>
                                Nirvana,  Taylor Swift, Eminem, Johnny Cash
                            </HomeMixItemDescription>
                        </HomeMixItemData>
                    </HomeMixItem>
                    <HomeMixItem>
                        <HomeMixItemImage src={Mix4} alt=''/>
                        <HomeMixItemData>
                            <HomeMixItemTitle>
                                Песни 2010х
                            </HomeMixItemTitle>
                            <HomeMixItemDescription>
                                Eminem, Taylor Swift, Adele, Harry Styles
                            </HomeMixItemDescription>
                        </HomeMixItemData>
                    </HomeMixItem>
                    <HomeMixItem>
                        <HomeMixItemImage src={Mix5} alt=''/>
                        <HomeMixItemData>
                            <HomeMixItemTitle>
                                Электронная музыка
                            </HomeMixItemTitle>
                            <HomeMixItemDescription>
                                Daft Punk, Porter Robinson, Flume
                            </HomeMixItemDescription>
                        </HomeMixItemData>
                    </HomeMixItem>
                    <HomeMixItem>
                        <HomeMixItemImage src={Mix6} alt=''/>
                        <HomeMixItemData>
                            <HomeMixItemTitle>
                                Рок
                            </HomeMixItemTitle>
                            <HomeMixItemDescription>
                                Red Hot Chili Peppers, Nirvana, AC/DC, Rolling Stones
                            </HomeMixItemDescription>
                        </HomeMixItemData>
                    </HomeMixItem>
                </HomeMix>
            </HomeMixWrapper>}
            {!search && <HomeAlbumsWrapper>
                <HomeSectionTitle>
                    Новые альбомы
                </HomeSectionTitle>
                <HomeAlbums>
                    <HomeAlbumsItem>
                        <HomeAlbumsItemImage src={A} alt=''/>
                        <HomeAlbumsItemData>
                            <HomeAlbumsItemDataText>
                                <HomeAlbumsItemTitle>
                                    Nevermind
                                </HomeAlbumsItemTitle>
                                <HomeAlbumsItemDescription>
                                    Nirvana
                                </HomeAlbumsItemDescription>
                            </HomeAlbumsItemDataText>
                            <AlbumsMusicItem>
                                <AlbumsMusicItemImage src={A} alt=''/>
                                <AlbumsMusicItemData>
                                    <AlbumsMusicItemTitle>
                                        Smells Like Teen Spirit
                                    </AlbumsMusicItemTitle>
                                    <AlbumsMusicItemAuthor>
                                        Nirvana
                                    </AlbumsMusicItemAuthor>
                                </AlbumsMusicItemData>
                            </AlbumsMusicItem>
                        </HomeAlbumsItemData>
                    </HomeAlbumsItem>
                    <HomeAlbumsItem>
                        <HomeAlbumsItemImage src={B} alt=''/>
                        <HomeAlbumsItemData>
                            <HomeAlbumsItemDataText>
                                <HomeAlbumsItemTitle>
                                    1989
                                </HomeAlbumsItemTitle>
                                <HomeAlbumsItemDescription>
                                    Taylor Swift
                                </HomeAlbumsItemDescription>
                            </HomeAlbumsItemDataText>
                            <AlbumsMusicItem>
                                <AlbumsMusicItemImage src={B} alt=''/>
                                <AlbumsMusicItemData>
                                    <AlbumsMusicItemTitle>
                                        Shake It Off
                                    </AlbumsMusicItemTitle>
                                    <AlbumsMusicItemAuthor>
                                        Taylor Swift
                                    </AlbumsMusicItemAuthor>
                                </AlbumsMusicItemData>
                            </AlbumsMusicItem>
                        </HomeAlbumsItemData>
                    </HomeAlbumsItem>
                    <HomeAlbumsItem>
                        <HomeAlbumsItemImage src={C} alt=''/>
                        <HomeAlbumsItemData>
                            <HomeAlbumsItemDataText>
                                <HomeAlbumsItemTitle>
                                    The Marshall Mathers LP
                                </HomeAlbumsItemTitle>
                                <HomeAlbumsItemDescription>
                                    Eminem
                                </HomeAlbumsItemDescription>
                            </HomeAlbumsItemDataText>
                            <AlbumsMusicItem>
                                <AlbumsMusicItemImage src={C} alt=''/>
                                <AlbumsMusicItemData>
                                    <AlbumsMusicItemTitle>
                                        Stan
                                    </AlbumsMusicItemTitle>
                                    <AlbumsMusicItemAuthor>
                                        Eminem
                                    </AlbumsMusicItemAuthor>
                                </AlbumsMusicItemData>
                            </AlbumsMusicItem>
                        </HomeAlbumsItemData>
                    </HomeAlbumsItem>
                </HomeAlbums>
            </HomeAlbumsWrapper>}
            {!search && false && <HomeSuggestionsWrapper>
                <HomeSectionTitle>
                    Возможно вам понравятся
                </HomeSectionTitle>
                <HomeSuggestions>

                    <HomeAlbumsItem>
                        <HomeAlbumsItemImage>

                        </HomeAlbumsItemImage>
                        <HomeAlbumsItemData>
                            <HomeAlbumsItemDataText>
                                <HomeAlbumsItemTitle>
                                    ttttt
                                </HomeAlbumsItemTitle>
                                <HomeAlbumsItemDescription>
                                    ddddd
                                </HomeAlbumsItemDescription>
                            </HomeAlbumsItemDataText>
                            <HomeSuggestionGenres>
                                <HomeHeaderGenre>
                                    nnn
                                    <Icon iconName='cross'/>
                                </HomeHeaderGenre>
                                <HomeHeaderGenre>
                                    nnn
                                    <Icon iconName='cross'/>
                                </HomeHeaderGenre>
                                <HomeHeaderGenre>
                                    nnn
                                    <Icon iconName='cross'/>
                                </HomeHeaderGenre>
                            </HomeSuggestionGenres>
                        </HomeAlbumsItemData>
                    </HomeAlbumsItem>
                </HomeSuggestions>
            </HomeSuggestionsWrapper>}

        </HomeWrapper>
    </MainLayout>
})