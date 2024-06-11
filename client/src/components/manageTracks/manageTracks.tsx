import {MainLayout} from "../layouts/mainLayout";
import {
    ManageTracksContent,
    ManageTracksHeader,
    ManageTracksHeaderButton,
    ManageTracksWrapper
} from "./manageTracks.styled";
import {Icon} from "../../ui-kit/Icon";
import {
    HistoryTrack,
    HistoryTrackActions,
    HistoryTrackAlbum,
    HistoryTrackAuthor,
    HistoryTrackCount, HistoryTrackData,
    HistoryTrackDataImage,
    HistoryTrackSecondaryWrapper, HistoryTrackTitle,
    HistoryTrackWrapper
} from "../history/history.styled";
import {Select} from "../../ui-kit/select";
import {useStore} from "../../store/useStore";
import {genresToSelect} from "../registration/registration.utils";
import {Button} from "../../ui-kit/button";
import {ProfileLayout} from "../layouts/profileLayout";
import {useEffect, useState} from "react";

export const ManageTracks = () => {
    const {auth,genres: genresStore, track, user, player} = useStore();
    const {setTracks: setStoreTracks} = track
    const genres = genresToSelect(genresStore.genres);

    const [tracks, setTracks] = useState([])

    const getPlaylist = async () => {
            const {data} = await track.fetchTracks()
        setTracks(data.filter(({approved})=>!approved))
    }

    console.log(tracks)

    const patchTrack = async (approved: boolean, trackId) => {
        console.log(trackId)
        await user.patchTrack({approved}, trackId)
        await getPlaylist()
    }

    useEffect(() => {
        getPlaylist();
    }, []);

    const getGenres = (genres: []) => {
        return genres.map(({name}) => name).join(', ')
    }

    const playTrack = (track) => {
        console.log(track)
        player.setActive(track)
        setStoreTracks(tracks)
    }

    return <ProfileLayout>
        <ManageTracksWrapper>
            <ManageTracksHeader>
                <ManageTracksHeaderButton>
                    <Icon iconName='pen' />
                    Новые треки
                </ManageTracksHeaderButton>
                <ManageTracksHeaderButton>
                    <Icon iconName='history' />
                    Недавно добавленные
                </ManageTracksHeaderButton>
                <ManageTracksHeaderButton>
                    <Icon iconName='plus' />
                    Загрузить трек
                </ManageTracksHeaderButton>
            </ManageTracksHeader>
            <ManageTracksContent>
                {tracks.map(({name, id, approved, picture, track_genre,author, ...track}, index)=><HistoryTrack>
                    <HistoryTrackCount>
                        {index  + 1}
                    </HistoryTrackCount>
                    <HistoryTrackSecondaryWrapper>
                        <HistoryTrackWrapper onClick={()=>playTrack({name, id, approved, picture, track_genre, ...track})}>
                            <HistoryTrackDataImage $src={`http://localhost:5000/${picture}`}>

                            </HistoryTrackDataImage>
                            <HistoryTrackData>
                                <HistoryTrackTitle>
                                    {name}
                                </HistoryTrackTitle>
                                <HistoryTrackAuthor>
                                    {author?.username}
                                </HistoryTrackAuthor>
                            </HistoryTrackData>
                        </HistoryTrackWrapper>
                        <div>
                            {getGenres(track_genre)}
                        </div>
                       {/*<Select options={genres} placeholder='Выбрать жанр'/>*/}
                        <Button buttonType='secondary' onClick={()=>patchTrack(!approved, id)}>Добавить</Button>
                    </HistoryTrackSecondaryWrapper>
                </HistoryTrack>)}
            </ManageTracksContent>
        </ManageTracksWrapper>
    </ProfileLayout>
}