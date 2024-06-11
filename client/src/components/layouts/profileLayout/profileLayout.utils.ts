import {GetActionBar} from "../../home";

export const getActionsBar = (isAdmin?:boolean) : GetActionBar[] => isAdmin ?[
    {
        icon: 'person',
        label: 'Профиль',
        link: '/profile'
    },
    {
        icon: 'categories',
        label: 'Настройки',
        link: '/profile/settings'
    },
    {
        icon: 'library',
        label: 'Подписки',
        link: '/profile/subscriptions'
    },

    {
        icon: 'history',
        label: 'История прослушивания',
        link: '/profile/history'
    },
    {
        icon: 'settings',
        label: 'Панель админа',
        link: '/profile/admin'
    },
] : [
    {
        icon: 'person',
        label: 'Профиль',
        link: '/profile'
    },
    {
        icon: 'categories',
        label: 'Настройки',
        link: '/profile/settings'
    },
    {
        icon: 'library',
        label: 'Подписки',
        link: '/profile/subscriptions'
    },

    {
        icon: 'history',
        label: 'История прослушивания',
        link: '/profile/history'
    },
]