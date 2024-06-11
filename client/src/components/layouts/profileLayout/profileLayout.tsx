import {FC, useEffect} from "react";
import {ProfileLayoutProps} from "./profileLayout.types";
import {useLocation, useNavigate} from "react-router-dom";
import {Logo} from "../../../ui-kit/logo";
import {Icon} from "../../../ui-kit/Icon";
import {getActionsBar} from "./profileLayout.utils";
import {
    ProfileLayoutSidebar,
    ProfileLayoutWrapper,
    ProfileSidebarActions,
    ProfileSidebarActionsContent, ProfileSidebarActionsItem
} from "./profileLayout.styled";
import {useStore} from "../../../store/useStore";
import {observer} from "mobx-react-lite";

export const ProfileLayout:FC<ProfileLayoutProps> = ({children}) => {
    const {auth, user} = useStore()
    const {pathname} = useLocation()

    const navigate = useNavigate();

    const actions = getActionsBar(user.user.role === 'admin')

    return <ProfileLayoutWrapper>
        <ProfileLayoutSidebar>
            <ProfileSidebarActions>
                <Logo/>
                <ProfileSidebarActionsContent>
                    {actions.map(({link, label, icon}) => <ProfileSidebarActionsItem onClick={()=>navigate(link)} $active={pathname === link}>
                        <Icon iconName={icon}/>
                        {label}
                    </ProfileSidebarActionsItem>)
                    }
                </ProfileSidebarActionsContent>
            </ProfileSidebarActions>
        </ProfileLayoutSidebar>
        <>{children}</>
    </ProfileLayoutWrapper>
}