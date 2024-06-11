import {useLocation, useNavigate} from "react-router-dom";
import {useStore} from "../../../store/useStore";
import {useEffect} from "react";

export const RouterLayout = ({children}) => {
    const {pathname} = useLocation();
    const {auth,loading, init} = useStore();
    const {loggedIn} = auth;

    const navigate = useNavigate();

    useEffect(() => {
        if(!loggedIn && (pathname !== '/login' && pathname !== '/registration')) {
            navigate('/login')
        }
    }, [loggedIn, pathname]);

    return <>{children}</>
}