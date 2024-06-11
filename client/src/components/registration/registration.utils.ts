import * as yup from 'yup';
import {TrackGenre} from "../../store/entities/genres";

export const getRegistrationSchema = () =>
    yup.object({
        email: yup
            .string()
            .email('Укажите правильную почту')
            .required('Это поле обязательное'),
        username: yup
            .string()
            .required('Это поле обязательное'),
        password: yup.string().required('Это поле обязательное'),
        repeatPassword: yup
            .string()
            .required('Это поле обязательное')
            .oneOf([yup.ref('password')], 'Пароль должен совпадать'),
        favouriteGenres: yup.array()
    });

export const genresToSelect = (genres: TrackGenre[]) => genres.map(({name,id})=>({value: id,label: name}))