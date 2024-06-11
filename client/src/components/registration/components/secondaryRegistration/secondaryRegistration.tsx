import {Controller, useFieldArray, useFormContext} from "react-hook-form";
import { RegistrationFormData} from "../../registration.types";
import {
    RegistrationContentTitle,
    RegistrationForm,
    RegistrationRedirect,
    RegistrationRedirectButton
} from "../../registration.styled";
import {Button} from "../../../../ui-kit/button";
import {FC} from "react";
import {SecondaryRegistrationProps} from "./secondaryRegistration.types";
import {Select} from "../../../../ui-kit/select";
import {Icon} from "../../../../ui-kit/Icon";
import {SelectWrapper, StyledIcon, EnterButtonWrapper} from "./secondaryRegistration.styled";
import {useStore} from "../../../../store/useStore";
import {genresToSelect} from "../../registration.utils";

export const SecondaryRegistration:FC<SecondaryRegistrationProps> = ({onSecondaryRegister, goBack}) => {
    const {auth,genres: genresStore} = useStore();
    const genres = genresToSelect(genresStore.genres);

    const {
        control,
        handleSubmit,
        formState: {errors},
    } = useFormContext<RegistrationFormData>()

    const {fields, append, remove} = useFieldArray({
        control,
        name: 'favouriteGenres'
    })

    const registration = (formData: RegistrationFormData) => {
        onSecondaryRegister(formData)
    }

    const addGenre = () => {
        append({value: genres[0]})
    }

    const removeGenre = (index: number) => {
        remove(index)
    }

    return <>
        <RegistrationContentTitle>
            Можете добавить любимые жанры
        </RegistrationContentTitle>
        <RegistrationForm>
            {fields.map((field, index)=><SelectWrapper key={field.id}>
                <Controller render={({field:{onChange, value}})=>  <Select menuPosition={'fixed'} options={genres} onChange={onChange} value={value}/>
                } name={`favouriteGenres.${index}.value`} control={control} />
                {fields.length >1 && <StyledIcon onClick={()=>removeGenre(index)}><Icon iconName={"trash"} /></StyledIcon>}
            </SelectWrapper>)}
            <StyledIcon onClick={addGenre}>
                <Icon iconName='plus' />
            </StyledIcon>
        </RegistrationForm>
        <EnterButtonWrapper>
            <Button buttonType='secondary' onClick={goBack}>
                Назад
            </Button>
            <Button buttonType='primary' onClick={handleSubmit(registration)}>
                Зарегестрироваться
            </Button>
        </EnterButtonWrapper>
    </>
}