import {
    EnterButtonWrapper,
    RegistrationContentTitle,
    RegistrationForm,
    RegistrationRedirect,
    RegistrationRedirectButton
} from "../../registration.styled";
import {Controller, useFormContext} from "react-hook-form";
import {Input} from "../../../../ui-kit/input";
import {Button} from "../../../../ui-kit/button";
import {PrimaryRegistrationProps} from "./primaryRegistration.types";
import {FC} from "react";
import {RegistrationFormData} from "../../registration.types";
import {redirect, useNavigate} from "react-router-dom";

export const PrimaryRegistration:FC<PrimaryRegistrationProps> = ({onPrimaryRegister}) => {
    const {
        control,
        handleSubmit,
        formState: {errors},
    } = useFormContext<RegistrationFormData>()

    const navigate = useNavigate();

    const registration = () => {
        onPrimaryRegister()
    }

    const moveToLogin = () => {
        navigate('/login')
    }

    return <>
        <RegistrationContentTitle>
            Регистрация
        </RegistrationContentTitle>
        <RegistrationForm>
            <Controller control={control} render={({field: {onChange, value}}) => <Input errorMsg={errors.email?.message} placeholder='Почта' prefixIcon='mail' onChange={onChange} value={value} />}
                        name='email'/>
            <Controller control={control} render={({field: {onChange, value}}) => <Input errorMsg={errors.username?.message} placeholder='Имя пользователя' prefixIcon='person' onChange={onChange} value={value}/>}
                        name='username' />
            <Controller control={control} render={({field: {onChange, value}}) => <Input errorMsg={errors.password?.message} placeholder='Пароль' prefixIcon='eye_closed' onChange={onChange} value={value}/>}
                        name='password' />
            <Controller control={control} render={({field: {onChange, value}}) => <Input errorMsg={errors.repeatPassword?.message} placeholder='Повторите пароль' prefixIcon='eye_closed' onChange={onChange} value={value}/>}
                        name='repeatPassword' />
        </RegistrationForm>
        <RegistrationRedirect>
            Уже есть аккаунт? <RegistrationRedirectButton onClick={moveToLogin}>Войти</RegistrationRedirectButton>
        </RegistrationRedirect>
        <EnterButtonWrapper>
            <Button buttonType='primary' onClick={handleSubmit(registration)}>
                Далее
            </Button>
        </EnterButtonWrapper>
    </>
}