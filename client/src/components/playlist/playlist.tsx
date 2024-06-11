import {MainLayout} from "../layouts/mainLayout";
import {
    PlayButton,
    PlaylistHeader,
    PlaylistHeaderActions,
    PlaylistHeaderAuthor,
    PlaylistHeaderButton,
    PlaylistHeaderData,
    PlaylistHeaderImage,
    PlaylistHeaderPrimary,
    PlaylistHeaderSecondary,
    PlaylistHeaderTitle,
    PlaylistMainWrapper,
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
    PlaylistTracksHeader,
    PlaylistTracksWrapper,
    PlaylistTrackTitle,
    PlaylistTrackWrapper, StyledPopover
} from "./playlist.styled";
import {Icon} from "../../ui-kit/Icon";
import {Input} from "../../ui-kit/input";
import {Popover,DatePicker} from "antd";
import {useStore} from "../../store/useStore";
import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useRef, useState} from "react";
import {observer} from "mobx-react-lite";
import {AddTrackToPlaylist} from "../modals/addTrackToPlaylist";
import {format, formatDuration, intervalToDuration} from 'date-fns'
import {ManageTracksHeader, ManageTracksHeaderButton} from "../manageTracks/manageTracks.styled";
import {AddTrack} from "../modals/addTrack";

export const Playlist = observer(() => {
    const {user, player, track} = useStore()
    const {setTracks} = track
    const { id } = useParams()
    const [playlist, setPlaylist] = useState(null)
    const [favouriteTracks, setFavouriteTracks] = useState(null)
    const [addedTracks, setAddedTracks] = useState([])
    const [addTrackOpen, setAddTrackOpen] = useState(false);

    const getPlaylist = async () => {
        const {data} = await user.getPlaylist(id)
        console.log(data)
        if(data.favourite) {
            const {data} = await track.fetchTracks()
            setFavouriteTracks(data.filter(({liked})=>liked))
        }
        setAddedTracks(data.user_playlist_tracks)
        setPlaylist(data)
    }

    const removeTrack = async (track: string) => {
        await user.removeTrackFromPlaylist(id, track)
        await getPlaylist()
    }

    const patchTrack = async (fav: boolean, trackId) => {
        console.log(trackId)
        await user.patchTrack({liked: fav}, trackId)
        await getPlaylist()
    }

    useEffect(() => {
        getPlaylist()
        setFavouriteTracks(null)
    }, [id]);
    console.log(playlist)
    console.log(favouriteTracks)

    const navigate = useNavigate()

    const [isAddTrackToPlaylistOpen, setIsAddTrackToPlaylistOpen] = useState(false)
    const [trackIdOpen, setTrackIdOpen] = useState(0)

    const inputFile = useRef(null)

    const onButtonClick = async () => {
        // `current` points to the mounted file input element
        const a = await inputFile.current.click();
        console.log(a)
    };

    const uploadFile = async (e) =>{
        const selected = e.target.files[0]

        const formData = new FormData();

        // Update the formData object
        formData.append(
            "picture",
            selected,
            selected.name
        );

        // Details of the uploaded file
        console.log(selected);

        await user.patchPlaylist(formData, id)
        getPlaylist()
    }

    const currentTracks = favouriteTracks ? favouriteTracks : playlist?.user_playlist_tracks

    const playTrack = (track) => {
        console.log(track)
        player.setActive(track)
        user.addTrackToHistory(track.id)
        setTracks(currentTracks)
    }



    const onAddTrack =async (track) => {
        await user.addTrackToPlaylist(id, track.id)
        await getPlaylist()
    }

    const deletePlaylist = async () => {
        await user.deleteUserPlaylist(id)
        navigate('/')
    }

    return <MainLayout customContainer>
        {playlist && <PlaylistMainWrapper>
            <input type='file' id='file' ref={inputFile} style={{display: 'none'}} onChange={uploadFile}/>
            <PlaylistHeader>
                <PlaylistHeaderPrimary>
                    <PlaylistHeaderImage $src={`http://localhost:5000/${playlist.picture}`} onClick={onButtonClick}>

                    </PlaylistHeaderImage>
                    <PlaylistHeaderData>
                        <PlaylistHeaderAuthor>
                            {user.user?.username}
                        </PlaylistHeaderAuthor>
                        <PlaylistHeaderTitle>
                            {playlist.name}
                        </PlaylistHeaderTitle>
                    </PlaylistHeaderData>
                </PlaylistHeaderPrimary>
                <PlaylistHeaderSecondary>
                    <PlaylistHeaderButton onClick={() => navigate('/profile')}>
                        <Icon iconName='person'/>
                        Аккаунт
                    </PlaylistHeaderButton>
                    <PlaylistHeaderActions>
                        <Icon iconName='shuffle'/>
                        <PlayButton onClick={()=>playTrack(currentTracks[0])}>
                            <Icon iconName='play'/>
                        </PlayButton>
                    </PlaylistHeaderActions>
                </PlaylistHeaderSecondary>
            </PlaylistHeader>
            <PlaylistTracksWrapper>
                <AddTrack addedTracks={addedTracks} onAddTrack={onAddTrack} name={playlist.name} isModalOpen={addTrackOpen} onCancel={()=>setAddTrackOpen(false)}/>
                {/*<PlaylistTracksHeader>
                    <Input prefixIcon='search' placeholder='Поиск'/>
                </PlaylistTracksHeader>*/}
                <ManageTracksHeader>
                    <ManageTracksHeaderButton onClick={()=>setAddTrackOpen(true)}>
                        <Icon iconName='plus' />
                        Добавить трек
                    </ManageTracksHeaderButton>
                    <ManageTracksHeaderButton>
                        <Icon iconName='pen' />
                        Редактировать
                    </ManageTracksHeaderButton>
                    <ManageTracksHeaderButton onClick={deletePlaylist}>
                        <Icon iconName='trash' />
                        Удалить плейлист
                    </ManageTracksHeaderButton>
                </ManageTracksHeader>
                <PlaylistTracksContent>
                    {currentTracks.map(({name, picture, id,liked,duration,album,author, ...track}, index) =>
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
            </PlaylistTracksWrapper>
        </PlaylistMainWrapper>}
    </MainLayout>
})