import {Logo} from "../../ui-kit/logo";
import {AuthLayout} from "../layouts/authLayout";
import {useStore} from "../../store/useStore";
import {yupResolver} from '@hookform/resolvers/yup';
import {useForm, FormProvider} from "react-hook-form";
import {genresToSelect, getRegistrationSchema} from "./registration.utils";
import {RegistrationFormData} from "./registration.types";
import {PrimaryRegistration} from "./components/primaryRegistration";
import {useState} from "react";
import {SecondaryRegistration} from "./components/secondaryRegistration";
import {redirect} from "react-router-dom";

export const Registration = () => {
    const {auth,genres: genresStore} = useStore();
    const genres = genresToSelect(genresStore.genres);

    const methods = useForm<RegistrationFormData>({
        // @ts-ignore
        resolver: yupResolver(getRegistrationSchema()),
        defaultValues: {
            favouriteGenres: [{value: genres[0]}]
        }
    })

    const {trigger} = methods


    const [primaryFilled, setPrimaryFilled] = useState<boolean>(false);

    const onSecondaryRegister = ({favouriteGenres, ...formData}: RegistrationFormData) => {
        if (!primaryFilled) {
            return
        }

        console.log(formData)

        auth.register({favouriteGenres: favouriteGenres.map(({value})=>value.value),...formData})
    }

    const goBack = () => {
        setPrimaryFilled(false)
    }

    const onPrimaryRegister = async () => {
        const filled = await trigger()

        filled && setPrimaryFilled(true)
    }



    return <AuthLayout>
        <FormProvider {...methods}>
            <Logo/>
            {primaryFilled ? <SecondaryRegistration onSecondaryRegister={onSecondaryRegister} goBack={goBack}/> :
                <PrimaryRegistration onPrimaryRegister={onPrimaryRegister}/>}
        </FormProvider>
    </AuthLayout>

}