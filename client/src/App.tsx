import React, {useEffect} from 'react';
import {observer} from "mobx-react-lite";
import {useStore} from "./store/useStore";
import {GlobalStyles} from "./components/globalStyles";
import {ToastContainer} from "react-toastify";
import {AppRouter} from "./router";
import {AppWrapper, ContentWrapper} from "./components/app";
import {ThemeProvider} from "styled-components";
import {appTheme} from "./ui-kit/theme";
import {Player} from "./components/player";
import {useLocation, useNavigate} from "react-router-dom";

const App = observer(() => {
    const {auth,loading, init} = useStore();
    useEffect(() => {
        init()
    }, [])

    if (loading) {
        return <div>LOADING...</div>
    }

    return (
        <ThemeProvider theme={appTheme}>
            <AppWrapper>
                <GlobalStyles/>
                <ToastContainer/>
                <ContentWrapper>
                    <AppRouter/>
                </ContentWrapper>
                <Player />
            </AppWrapper>
        </ThemeProvider>
    );
})

export default App;
