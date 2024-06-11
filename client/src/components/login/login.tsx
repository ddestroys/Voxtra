import {
    EnterButtonWrapper,
    LoginContentTitle,
    LoginForm,
    LoginRedirect, LoginRedirectButton,
} from "./login.styled";
import {Logo} from "../../ui-kit/logo";
import {Input} from "../../ui-kit/input";
import {Button} from "../../ui-kit/button";
import {AuthLayout} from "../layouts/authLayout";
import {useStore} from "../../store/useStore";
import {yupResolver} from '@hookform/resolvers/yup';
import {useForm, Controller} from "react-hook-form";
import {getLoginSchema} from "./login.utils";
import {LoginFormData} from "./login.types";
import {redirect, useNavigate} from "react-router-dom";

export const Login = () => {
    const {auth} = useStore();
    const navigate = useNavigate();

    const {
        control,
        register,
        handleSubmit,
        formState: {errors},
    } = useForm<LoginFormData>({
        resolver: yupResolver(getLoginSchema())
    })

    const login = ({email,password}: LoginFormData) => {
        console.log(email,password);
        auth.login(email,password)
    }

    const moveToRegistration = () => {
        console.log(1)
        navigate('/registration')
    }

    return <AuthLayout>
        <Logo/>
        <LoginContentTitle>
            Вход в аккаунт
        </LoginContentTitle>
        <LoginForm>
            <Controller control={control} render={({field: {onChange, value}}) => <Input errorMsg={errors.email?.message} placeholder='Почта' prefixIcon='mail' onChange={onChange} value={value} />}
                        name='email'/>
            <Controller control={control} render={({field: {onChange, value}}) => <Input errorMsg={errors.password?.message} placeholder='Пароль' prefixIcon='eye_closed' onChange={onChange} value={value}/>}
                        name='password' />
        </LoginForm>
        <LoginRedirect>
            Еще нет аккаунта? <LoginRedirectButton onClick={moveToRegistration}>Зарегистрируйтесь</LoginRedirectButton>
        </LoginRedirect>
        <EnterButtonWrapper>
            <Button buttonType='primary' onClick={handleSubmit(login)}>
                Войти
            </Button>
        </EnterButtonWrapper>
    </AuthLayout>

}