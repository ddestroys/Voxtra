import {Icon} from "../../ui-kit/Icon";
import {Input} from "../../ui-kit/input";
import {MainLayout} from "../layouts/mainLayout";
import {
    ProfileHeader,
    ProfileHeaderActions,
    ProfileHeaderAuthor,
    ProfileHeaderButton,
    ProfileHeaderData,
    ProfileHeaderImage,
    ProfileHeaderPrimary,
    ProfileHeaderSecondary,
    ProfileHeaderTitle,
    ProfileMainWrapper,
    PlayButton,
    ProfileTracksWrapper,
    ProfileDataWrapper,
    ProfileDataTitle,
    PersonalData,
    ProfileDataRow,
    ProfileDataRows,
    SubscriptionData,
    ProfileDataRowSubscription,
    ProfileDataRowSubscriptionBlock,
    EditModeInput
} from "./profile.styled";
import {Button} from "../../ui-kit/button";
import {ProfileLayout} from "../layouts/profileLayout/profileLayout";
import {useStore} from "../../store/useStore";
import {format} from "date-fns";
import {useRef, useState} from "react";
import {Controller, useForm} from "react-hook-form";
import {LoginFormData} from "../login";
import {yupResolver} from "@hookform/resolvers/yup";
import {getLoginSchema} from "../login/login.utils";
import {DatePicker} from "antd";
import dayjs from "dayjs";
import {observer} from "mobx-react-lite";
import {useNavigate} from "react-router-dom";

export const Profile = observer(() => {
    const {user, auth} = useStore()
    const inputFile = useRef(null)
    const [editMode, setEditMode] = useState(false)

    const {birth_date, email, sex, subscription_type, createdAt, username, avatar} = user.user;

    const navigate = useNavigate()

    const {
        control,
        register,
        handleSubmit,
        formState: {errors},
        getValues
    } = useForm({
        defaultValues: {
            email,
            sex: sex || '',
            birth_date: birth_date ? new Date(birth_date) : new Date(),
            username
        }
    })

    const onButtonClick = async () => {
      // `current` points to the mounted file input element
      const a = await inputFile.current.click();
      console.log(a)
    };

    const uploadFile = (e) =>{
        const selected = e.target.files[0]

        const formData = new FormData();

        // Update the formData object
        formData.append(
            "picture",
            selected,
            selected.name
        );

        // Details of the uploaded file
        console.log(selected);

        user.patchUser(formData)
    }

    const editProfile = () => {
        setEditMode(prevState => {
            if(prevState) {
                user.patchUser(getValues())
            }
            return !prevState
        })
    }

    return <ProfileLayout>
        <input type='file' id='file' ref={inputFile} style={{display: 'none'}} onChange={uploadFile}/>
        <ProfileMainWrapper>
            <ProfileHeader>
                <ProfileHeaderPrimary>
                    <ProfileHeaderImage $src={`http://localhost:5000/${avatar}`} onClick={onButtonClick}>
                        {/*<Icon iconName='pen' />*/}
                    </ProfileHeaderImage>
                    <ProfileHeaderData>
                        <ProfileHeaderAuthor>
                            {format(new Date(createdAt), 'do MMMM, Yo')}
                        </ProfileHeaderAuthor>
                        <ProfileHeaderTitle>
                            {editMode ? <Controller control={control} render={({field: {onChange, value}}) => <EditModeInput placeholder='Имя пользователя' onChange={onChange} value={value} />}
                                                    name='username'/> : username}
                        </ProfileHeaderTitle>
                    </ProfileHeaderData>
                </ProfileHeaderPrimary>
                <ProfileHeaderSecondary>
                    <ProfileHeaderButton onClick={()=>navigate('/')}>
                        <Icon iconName='home'/>
                        На главную
                    </ProfileHeaderButton>
                    <ProfileHeaderActions>
                        <PlayButton onClick={editProfile}>
                            <Icon iconName={editMode ? 'tick' : 'pen'}/>
                        </PlayButton>
                    </ProfileHeaderActions>
                </ProfileHeaderSecondary>
            </ProfileHeader>
            <ProfileDataWrapper>
                <PersonalData>
                    <ProfileDataTitle>
                        Личные данные
                    </ProfileDataTitle>
                    <ProfileDataRows>
                        <ProfileDataRow>
                            <div>Почта</div>
                            <div>{editMode ? <Controller control={control} render={({field: {onChange, value}}) => <EditModeInput placeholder='Почта' onChange={onChange} value={value} />}
                                                         name='email'/> : email}</div>
                        </ProfileDataRow>
                        <ProfileDataRow>
                            <div>День рождения</div>
                            <div>{editMode ? <Controller control={control} render={({field: {onChange, value}}) => <DatePicker placeholder='Дата рождения' onChange={onChange} value={dayjs(value)} />}
                                                         name='birth_date'/> : format(new Date(birth_date), 'do MMMM, Yo') || 'Не указано'}</div>
                        </ProfileDataRow>
                        <ProfileDataRow>
                            <div>Пол</div>
                            <div>{editMode ? <Controller control={control} render={({field: {onChange, value}}) => <EditModeInput placeholder='Пол' onChange={onChange} value={value} />}
                                                         name='sex'/> : sex || 'Не указано'}</div>
                        </ProfileDataRow>
                        <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                            <ProfileHeaderButton onClick={()=>auth.logout()}>
                            <Icon iconName='home'/>
                            Log out
                        </ProfileHeaderButton></div>
                    </ProfileDataRows>
                </PersonalData>
                <SubscriptionData>
                    <ProfileDataTitle>
                        Личные данные
                    </ProfileDataTitle>
                    <ProfileDataRows>
                        <ProfileDataRowSubscription>
                            <div>Моя подписка</div>
                            <ProfileDataRowSubscriptionBlock>
                                {subscription_type === 'free' ? 'Бесплатная' : 'Платная'}
                                <Button buttonType='secondary'>Сменить план подписки</Button>
                            </ProfileDataRowSubscriptionBlock>
                        </ProfileDataRowSubscription>
                    </ProfileDataRows>
                </SubscriptionData>
            </ProfileDataWrapper>
        </ProfileMainWrapper>
    </ProfileLayout>
})