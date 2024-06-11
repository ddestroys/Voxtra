import {
    AddTrackToPlaylistAdd,
    AddTrackToPlaylistContent,
    AddTrackToPlaylistItem, AddTrackToPlaylistItemAuthor,
    AddTrackToPlaylistItemData,
    AddTrackToPlaylistItemImage,
    AddTrackToPlaylistItemTitle,
    AddTrackToPlaylistTitle,
    AddTrackToPlaylistWrapper,
    StyledModal
} from "./addTrackToPlaylist.styled";
import {Icon} from "../../../ui-kit/Icon";
import {MainSidebarMusicHeader} from "../../layouts/mainLayout/mainLayout.styled";
import {CreatePlaylist} from "../createPlaylist";
import {FC, useEffect, useState} from "react";
import {AddTrackToPlaylistProps} from "./addTrackToPlaylist.types";
import {useStore} from "../../../store/useStore";
import {useParams} from "react-router-dom";

export const AddTrackToPlaylist:FC<AddTrackToPlaylistProps> = ({isModalOpen, onCancel, trackId}) => {
    const {user} = useStore()
    const { id } = useParams()

    const [playlists, setPlaylists] = useState(null)

    const getPlaylist = async () => {
        const {data} = await user.getPlaylists()
        setPlaylists(data)
    }

    const addTrack = async (playlist: string) => {
        await user.addTrackToPlaylist(playlist, trackId)
        await getPlaylist()
    }

    useEffect(() => {
        getPlaylist()
    }, [isModalOpen]);

    const [isCreatePlaylistOpen, setIsCreatePlaylistOpen] = useState(false)

    console.log(playlists)

    return <StyledModal footer={null} closeIcon={null} open={isModalOpen} onCancel={onCancel}>
        <AddTrackToPlaylistWrapper>
            <AddTrackToPlaylistTitle>
                Добавить в плейлист
            </AddTrackToPlaylistTitle>
            {playlists &&<AddTrackToPlaylistContent>
                {playlists.map(({name, id})=><AddTrackToPlaylistItem onClick={()=>addTrack(id)}>
                    <AddTrackToPlaylistItemImage>

                    </AddTrackToPlaylistItemImage>
                    <AddTrackToPlaylistItemData>
                        <AddTrackToPlaylistItemTitle>
                            {name}
                        </AddTrackToPlaylistItemTitle>
                        <AddTrackToPlaylistItemAuthor>
                            author
                        </AddTrackToPlaylistItemAuthor>
                    </AddTrackToPlaylistItemData>
                </AddTrackToPlaylistItem>)}
                <AddTrackToPlaylistAdd>
                    Новый плейлист
                    <div onClick={()=>setIsCreatePlaylistOpen(true)}><Icon iconName={'plus'} /></div>
                </AddTrackToPlaylistAdd>
                <CreatePlaylist onCancel={()=>setIsCreatePlaylistOpen(false)} isModalOpen={isCreatePlaylistOpen}/>
            </AddTrackToPlaylistContent>}
        </AddTrackToPlaylistWrapper>
    </StyledModal>
}