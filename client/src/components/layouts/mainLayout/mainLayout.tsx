import {useLocation, useNavigate} from "react-router-dom";
import {getActionsBar} from "../../home/home.utils";

import {Logo} from "../../../ui-kit/logo";
import {Icon} from "../../../ui-kit/Icon";
import {
    MainLayoutContent,
    MainLayoutSidebar,
    MainLayoutWrapper,
    MainSidebarActions,
    MainSidebarActionsContent,
    MainSidebarActionsItem,
    MainSidebarMusic,
    MainSidebarMusicContent,
    MainSidebarMusicHeader,
    MainSidebarMusicItem, MainSidebarMusicItemAuthor, MainSidebarMusicItemData,
    MainSidebarMusicItemImage, MainSidebarMusicItemTitle
} from "./mainLayout.styled";
import {FC, useEffect, useState} from "react";
import {MainLayoutProps} from "./mainLayout.types";
import {AddTrackToPlaylist} from "../../modals/addTrackToPlaylist";
import {useStore} from "../../../store/useStore";
import {CreatePlaylist} from "../../modals/createPlaylist";
import {observer} from "mobx-react-lite";

export const MainLayout:FC<MainLayoutProps> = observer(({children, customContainer}) => {
    const {user, auth} = useStore()
    const {playlists = [], username} = user.user || {}

    const {pathname} = useLocation()

    const navigate = useNavigate();

    const actions = getActionsBar()

    const [isCreatePlaylistOpen, setIsCreatePlaylistOpen] = useState(false)

    return <MainLayoutWrapper>
        <MainLayoutSidebar>
            <MainSidebarActions>
                <Logo/>
                <MainSidebarActionsContent>
                    {actions.map(({link, label, icon}) => <MainSidebarActionsItem onClick={()=>navigate(link)} $active={pathname === link}>
                        <Icon iconName={icon}/>
                        {label}
                    </MainSidebarActionsItem>)
                    }
                </MainSidebarActionsContent>
            </MainSidebarActions>
            <MainSidebarMusic>
                <MainSidebarMusicHeader>
                    Мои плейлисты
                    <div onClick={()=>setIsCreatePlaylistOpen(true)}><Icon iconName={'plus'} /></div>
                </MainSidebarMusicHeader>
                <MainSidebarMusicContent>
                    {playlists.map(({id, name, picture})=><MainSidebarMusicItem onClick={()=>navigate(`/playlist/${id}`)}>
                        <MainSidebarMusicItemImage $src={`http://localhost:5000/${picture}`}>

                        </MainSidebarMusicItemImage>
                        <MainSidebarMusicItemData>
                            <MainSidebarMusicItemTitle>
                                {name}
                            </MainSidebarMusicItemTitle>
                            <MainSidebarMusicItemAuthor>
                                {username}
                            </MainSidebarMusicItemAuthor>
                        </MainSidebarMusicItemData>
                    </MainSidebarMusicItem>)}
                </MainSidebarMusicContent>
                <CreatePlaylist onCancel={()=>setIsCreatePlaylistOpen(false)} isModalOpen={isCreatePlaylistOpen}/>
            </MainSidebarMusic>
        </MainLayoutSidebar>
        {customContainer ? <>{children}</> : <MainLayoutContent>
            {children}
        </MainLayoutContent>}
    </MainLayoutWrapper>
})