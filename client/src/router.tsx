import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import {Login} from "./components/login";
import {Registration} from "./components/registration";
import {Home} from "./components/home";
import {Playlist} from "./components/playlist";
import {Categories} from "./components/categories/categories";
import {Library} from "./components/library";
import {Profile} from "./components/profile";
import {Settings} from "./components/settings";
import {Subscriptions} from "./components/subscriptions";
import {History} from "./components/history";
import {Track} from "./components/track";
import {ManageTracks} from "./components/manageTracks";
import {RouterLayout} from "./components/layouts/routerLayout";

const router = createBrowserRouter([{
    path: '/',
    element: <RouterLayout><Home/></RouterLayout>
}, {path: '/login', element: <RouterLayout><Login/></RouterLayout>}, {path: '/registration', element: <RouterLayout><Registration/></RouterLayout>}, {
    path: '/playlist/:id',
    element: <RouterLayout><Playlist/></RouterLayout>
}, {path: '/categories', element: <RouterLayout><Categories/></RouterLayout>}, {path: '/library', element: <RouterLayout><Library/></RouterLayout>}, {
    path: '/profile',
    element: <RouterLayout><Profile/></RouterLayout>
}, {path: '/profile/settings', element: <RouterLayout><Settings/></RouterLayout>}, {
    path: '/profile/subscriptions',
    element: <RouterLayout><Subscriptions/></RouterLayout>
}, {path: '/profile/history', element: <RouterLayout><History/></RouterLayout>}, {path: '/track/:id', element: <RouterLayout><Track/></RouterLayout>}, {
    path: '/profile/admin',
    element: <RouterLayout><ManageTracks/></RouterLayout>
}])

export const AppRouter = () => <RouterProvider router={router}/>