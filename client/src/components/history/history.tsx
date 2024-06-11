import {ProfileLayout} from "../layouts/profileLayout";
import {
    HistoryContent,
    HistoryHeader,
    HistoryHeaderButton,
    HistoryHeaderButtons,
    HistoryHeaderTitle,
    HistoryTrack, HistoryTrackActions, HistoryTrackAlbum, HistoryTrackAuthor,
    HistoryTrackCount, HistoryTrackData,
    HistoryTrackDataImage,
    HistoryTrackSecondaryWrapper, HistoryTrackTitle,
    HistoryTrackWrapper,
    HistoryWrapper,
} from "./history.styled";
import {Icon} from "../../ui-kit/Icon";
import {useStore} from "../../store/useStore";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {intervalToDuration} from "date-fns";

export const History = () => {
    const {user, player, track} = useStore()
    const {setTracks} = track;
    const {getHistory} = user

    const navigate = useNavigate()

    const [history, setHistory] = useState([])

    const getUserHistory =async () =>{
        const {data} = await getHistory()
        setHistory(data?.[0]?.tracks || [])
    }

    const removeTrack =async (trackId: number) =>{
        await user.removeTrackFromHistory(trackId)
        await getUserHistory()
    }

    const removeHistory = async () => {
        await user.removeHistory()
        await getUserHistory()
    }

    useEffect(() => {
        getUserHistory()
    }, []);

    const playTrack = (track) => {
        console.log(track)
        player.setActive(track)
        setTracks(history)
    }

    return <ProfileLayout>
        <HistoryWrapper>
            <HistoryHeader>
                <HistoryHeaderTitle>История</HistoryHeaderTitle>
                <HistoryHeaderButtons>
                    <HistoryHeaderButton onClick={removeHistory}>
                        <Icon iconName='trash'/>
                    </HistoryHeaderButton>
                    <HistoryHeaderButton onClick={()=>navigate('/profile')}>
                        <Icon iconName='home'/>
                        На главную
                    </HistoryHeaderButton>
                </HistoryHeaderButtons>
            </HistoryHeader>
            <HistoryContent>
                {history.map(({name, id,picture, album, author,liked, duration,...track}, index)=>{
                    const {seconds, minutes, hours} = intervalToDuration({start: 0, end: duration * 1000})

                    const formattedDuration = `${hours ? `${hours} :` : ''}${minutes ? `${minutes>=10 ? `${minutes}` : `0${minutes}`} : ` : ''}${seconds ? `${seconds>=10 ? seconds : `0${seconds}`}` : ''}`

                    return<HistoryTrack>
                    <HistoryTrackCount>
                        {index + 1}
                    </HistoryTrackCount>
                    <HistoryTrackSecondaryWrapper>
                        <HistoryTrackWrapper onClick={()=>playTrack({name, id,picture, album, author,liked, duration,...track})}>
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
                        <HistoryTrackAlbum>
                            {album?.name}
                        </HistoryTrackAlbum>
                        <HistoryTrackActions className='track_actions' onClick={()=>removeTrack(id)}>
                            <Icon iconName={liked ? 'filled_heart' : 'heart'} />
                            <HistoryTrackAlbum>
                                {formattedDuration}
                            </HistoryTrackAlbum>
                            <Icon iconName='trash' />
                        </HistoryTrackActions>
                    </HistoryTrackSecondaryWrapper>
                </HistoryTrack>})}
            </HistoryContent>
        </HistoryWrapper>
    </ProfileLayout>
}