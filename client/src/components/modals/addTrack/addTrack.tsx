import {
    AddTrackContent,
    AddTrackHeader,
    AddTrackItem, AddTrackItemAuthor, AddTrackItemData,
    AddTrackItemImage, AddTrackItemRemove, AddTrackItemTitle,
    AddTrackWrapper,
    StyledModal
} from "./addTrack.styled";
import {Select} from "../../../ui-kit/select";
import {FC, useEffect} from "react";
import {AddTrackProps} from "./addTrack.types";
import {Input} from "../../../ui-kit/input";
import {Icon} from "../../../ui-kit/Icon";
import {useStore} from "../../../store/useStore";
import {observer} from "mobx-react-lite";

export const AddTrack:FC<AddTrackProps> = observer(({isModalOpen, onCancel, name , onAddTrack ,addedTracks}) => {
    const {track} = useStore()
    const {tracks, fetchTracks} = track

    useEffect(() => {
        isModalOpen && fetchTracks()
    }, [isModalOpen]);

    const addTrack = (track) => {
        onAddTrack(track)
    }

    const filteredTracks = tracks.filter(({approved})=>approved).filter(({id})=>!addedTracks.find(({id: addedId})=>id === addedId))

    return <StyledModal footer={null} closeIcon={null} open={isModalOpen} onCancel={onCancel}>
        <AddTrackWrapper>
            <AddTrackHeader>
                {name}
            </AddTrackHeader>
            <Input placeholder='Поиск трека' prefixIcon='search'/>
            <AddTrackContent>
                {filteredTracks.map(({name, picture, author, id})=><AddTrackItem onClick={()=>addTrack({id,name, picture: `http://localhost:5000/${picture}`, author: author?.username, id})}>
                    <AddTrackItemImage $src={`http://localhost:5000/${picture}`}>
                    </AddTrackItemImage>
                    <AddTrackItemData>
                        <AddTrackItemTitle>
                            {name}
                        </AddTrackItemTitle>
                        <AddTrackItemAuthor>
                            {author?.username}
                        </AddTrackItemAuthor>
                    </AddTrackItemData>
                    <AddTrackItemRemove>
                        <Icon iconName='plus' />
                    </AddTrackItemRemove>
                </AddTrackItem>)}
            </AddTrackContent>
    </AddTrackWrapper>
    </StyledModal>
})