import * as yup from 'yup';

export const getLoginSchema = () =>
    yup.object({
        email: yup
            .string()
            .email('Укажите правильную почту')
            .required('Это поле обязательное'),
        password: yup.string().required('Это поле обязательное')
    });
