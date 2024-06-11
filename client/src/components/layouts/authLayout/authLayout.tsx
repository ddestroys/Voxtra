import {FC, useEffect} from "react";
import {AuthLayoutProps} from "./authLayout.types";
import {AuthContentWrapper, AuthImageWrapper, AuthLayoutWrapper, AuthWrapper} from "./authLayout.styled";
import {ReactComponent as AuthImageSVG} from '../../../assets/images/Auth_image.svg'
import {useStore} from "../../../store/useStore";
import {genresToSelect} from "../../registration/registration.utils";
import {useNavigate} from "react-router-dom";
import {observer} from "mobx-react-lite";

export const AuthLayout:FC<AuthLayoutProps> = observer(({children}) => {
    const {auth} = useStore();
    const {loggedIn} = auth;

    const navigate = useNavigate();

    useEffect(() => {
        if(loggedIn) {
            navigate('/')
        }
    }, [loggedIn]);

    return <AuthLayoutWrapper>
        <AuthWrapper>
            <AuthImageWrapper>
                <AuthImageSVG />
            </AuthImageWrapper>
            <AuthContentWrapper>
                {children}
            </AuthContentWrapper>
        </AuthWrapper>
    </AuthLayoutWrapper>
})