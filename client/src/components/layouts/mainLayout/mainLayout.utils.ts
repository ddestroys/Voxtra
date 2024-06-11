import {GetActionBar} from "./mainLayout.types";

export const getActionsBar = () : GetActionBar[] => [
    {
        icon: 'home',
        label: 'Главная',
        link: '/'
    },
    {
        icon: 'categories',
        label: 'Категории',
        link: '/categories'
    },
    {
        icon: 'library',
        label: 'Библиотека',
        link: '/library'
    },
]