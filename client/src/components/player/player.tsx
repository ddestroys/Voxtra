import {
    PlayButton,
    PlayerDataBlock,
    PlayerItem, PlayerItemAuthor,
    PlayerItemData,
    PlayerItemImage,
    PlayerItemTitle, PlayerPrimaryControls, PlayerRunningRow, PlayerSecondaryControls,
    PlayerWrapper
} from "./player.styled";
import {Icon} from "../../ui-kit/Icon";
import {useStore} from "../../store/useStore";
import {useEffect} from "react";
import {observer} from "mobx-react-lite";
import {useNavigate} from "react-router-dom";

export const Player = observer(() => {
    const {player, track} = useStore()

    useEffect(() => {
        console.log(player.audio)
        if (!player.audio) {
            player.audio = new Audio()
        } else {
            setAudio()
            handlePlay()
        }
    }, [player.active])

    useEffect(()=>{
        /*console.log(player.currentTime)
        console.log(player.duration, player.currentTime)
        if(player.active && player.duration === player.currentTime) {
            handlePlay()
        }*/
    },[player.currentTime])

    const setAudio = () => {
        if (player.active) {
            player.audio.src = 'http://localhost:5000/' + player.active.audio
            player.audio.volume = player.volume / 100
            player.audio.id = player.active.audio
            player.audio.onloadedmetadata = () => {
                player.setDuration(Math.ceil(player.audio.duration))
            }
            player.audio.ontimeupdate = () => {
                if(Math.ceil(player.audio.currentTime) && player.duration && Math.ceil(player.audio.currentTime) === player.duration) {
                    console.log(123)
                    player.pauseTrack();
                }
                player.setCurrentTime(Math.ceil(player.audio.currentTime))
            }
        }
    }

    const handlePlay = () => {
        console.log(player.pause, player)

        if (player.pause) {
            player.playTrack()
            player.audio.play()
        } else {
            player.pauseTrack()
            player.audio.pause()
        }
    }

    const changeCurrentTime = (e) => {
        player.audio.currentTime = Number(e.target.value)
        player.setCurrentTime(Number(e.target.value))
    }

    const next = () => {
        const item = track.tracks.findIndex((item)=>player.audio.id===item.audio)
        if(track.tracks.length-1===item) {
            player.setActive(track.tracks[0])
        } else {
            player.setActive(track.tracks[item+1])
        }
    }

    const prev = () => {
        const item = track.tracks.findIndex((item)=>player.audio.id===item.audio)
        if(item===0) {
            player.setActive(track.tracks[track.tracks.length-1])
        } else {
            player.setActive(track.tracks[item-1])
        }
    }

    console.log(player.active)


    if (!player.active) {
        return null
    }

    return <PlayerWrapper className='player'>
        <PlayerRunningRow
            type="range"
            min={0}
            max={player.duration}
            value={player.currentTime}
            onChange={changeCurrentTime}
        />
        <PlayerDataBlock>
            <PlayerItem>
                <PlayerItemImage $src={`http://localhost:5000/${player.active.picture}`}>

                </PlayerItemImage>
                <PlayerItemData>
                    <PlayerItemTitle>
                        {player.active.name}
                    </PlayerItemTitle>
                    <PlayerItemAuthor>
                        {player.active.author?.username}
                    </PlayerItemAuthor>
                </PlayerItemData>
            </PlayerItem>
            <Icon iconName={player.active.liked ? 'filled_heart':'heart'} />
        </PlayerDataBlock>
        <PlayerPrimaryControls>
            <div onClick={prev}><Icon iconName='back' /></div>
            <PlayButton onClick={handlePlay}>
                <Icon iconName={player.pause ? 'play' : 'pause'} />
            </PlayButton>
            <div onClick={next}><Icon iconName='next' /></div>
        </PlayerPrimaryControls>
        <PlayerSecondaryControls>
            <Icon iconName='repeat' />
            <Icon iconName='shuffle' />
            <div onClick={()=>window.location.replace(`http://localhost:3000/track/${player.active.id}`)}><Icon iconName='big_t' /></div>
        </PlayerSecondaryControls>
    </PlayerWrapper>
})