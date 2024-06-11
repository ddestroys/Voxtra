import {FC, useState} from "react";
import {CreatePlaylistProps} from "./createPlaylist.types";
import {
    CreatePlaylistAdd,
    CreatePlaylistButtons,
    CreatePlaylistContent,
    CreatePlaylistItem,
    CreatePlaylistItemAuthor,
    CreatePlaylistItemData,
    CreatePlaylistItemImage, CreatePlaylistItemRemove,
    CreatePlaylistItemTitle,
    CreatePlaylistTitle,
    CreatePlaylistWrapper,
    StyledModal
} from "./createPlaylist.styled";
import {Input} from "../../../ui-kit/input";
import {Button} from "../../../ui-kit/button";
import {Icon} from "../../../ui-kit/Icon";
import {AddTrack} from "../addTrack";
import {useStore} from "../../../store/useStore";

export const CreatePlaylist:FC<CreatePlaylistProps> = ({onCancel, isModalOpen}) => {
    const {user} = useStore()
    const [addTrackOpen, setAddTrackOpen] = useState(false);

    const [name, setName] = useState('')

    const [addedTracks, setAddedTracks] = useState([])

    const createPlaylist = () => {
        user.createUserPlaylist({name, tracks: addedTracks.map(({id})=>id)})
    }

    const onAddTrack = (track) => {
        setAddedTracks(prevState => [...prevState, track])
    }

    const onRemoveTrack = (filteredId: number) => {
        setAddedTracks(prevState => prevState.filter(({id})=>id!==filteredId))
    }

    return <StyledModal footer={null} closeIcon={null} open={isModalOpen} onCancel={onCancel}>
        <CreatePlaylistWrapper>
            <CreatePlaylistTitle>
                Новый плейлист
            </CreatePlaylistTitle>
            <CreatePlaylistContent>
                <Input prefixIcon='pen' placeholder='Название' onChange={(e)=>setName(e.target.value)} value={name}/>
                {addedTracks.map(({name, picture, author, id})=><CreatePlaylistItem>
                    <CreatePlaylistItemImage $src={`${picture}`}>

                    </CreatePlaylistItemImage>
                    <CreatePlaylistItemData>
                        <CreatePlaylistItemTitle>
                            {name}
                        </CreatePlaylistItemTitle>
                        <CreatePlaylistItemAuthor>
                            {author}
                        </CreatePlaylistItemAuthor>
                    </CreatePlaylistItemData>
                    <CreatePlaylistItemRemove onClick={()=>onRemoveTrack(id)}>
                        <Icon iconName='minus' />
                    </CreatePlaylistItemRemove>
                </CreatePlaylistItem>)}
                <CreatePlaylistAdd>
                    Добавить трек
                    <div onClick={()=>setAddTrackOpen(true)}><Icon iconName={'plus'} /></div>
                </CreatePlaylistAdd>
            </CreatePlaylistContent>
            <CreatePlaylistButtons>
                <Button buttonType='primary' onClick={createPlaylist}>
                    Создать
                </Button>
            </CreatePlaylistButtons>
            <AddTrack addedTracks={addedTracks} onAddTrack={onAddTrack} name={name || 'Новый плейлист'} isModalOpen={addTrackOpen} onCancel={()=>setAddTrackOpen(false)}/>
        </CreatePlaylistWrapper>
    </StyledModal>
}