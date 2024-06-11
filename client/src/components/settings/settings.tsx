import {ProfileLayout} from "../layouts/profileLayout";
import {
    Radio,
    RadioGroup, RadioInput,
    SettingsContent,
    SettingsContentRow, SettingsContentRowTitle,
    SettingsHeader, SettingsHeaderButton,
    SettingsHeaderTitle,
    SettingsWrapper
} from "./settings.styled";
import {Icon} from "../../ui-kit/Icon";
import {ProfileHeaderButton} from "../profile/profile.styled";
import {Select} from "../../ui-kit/select";
import {getLanguage, getRegion, getSoundQuality} from "./settings.utils";
import {useNavigate} from "react-router-dom";

export const Settings = () => {
    const soundQualityOptions = getSoundQuality()
    const languageOptions = getLanguage()
    const regionOptions = getRegion()

    const navigate = useNavigate()

    return <ProfileLayout>
        <SettingsWrapper>
            <SettingsHeader>
                <SettingsHeaderTitle>
                    Настройки
                </SettingsHeaderTitle>
                <SettingsHeaderButton onClick={()=>navigate('/profile')}>
                    <Icon iconName='person'/>
                    Аккаунт
                </SettingsHeaderButton>
            </SettingsHeader>
            <SettingsContent>
                <SettingsContentRow>
                    <SettingsContentRowTitle>
                        Качество звука
                    </SettingsContentRowTitle>
                    <Select options={soundQualityOptions} defaultValue={soundQualityOptions[1]}/>
                </SettingsContentRow>
                <SettingsContentRow>
                    <SettingsContentRowTitle>
                        Язык
                    </SettingsContentRowTitle>
                    <Select options={languageOptions} defaultValue={languageOptions[0]}/>
                </SettingsContentRow>
                <SettingsContentRow>
                    <SettingsContentRowTitle>
                        Регион
                    </SettingsContentRowTitle>
                    <Select options={regionOptions} defaultValue={regionOptions[0]}/>
                </SettingsContentRow>
                <SettingsContentRow>
                    <SettingsContentRowTitle>
                        Тема
                    </SettingsContentRowTitle>
                    <RadioGroup defaultValue='dark'>
                            <RadioInput  type='radio' value='light' name='theme'>Светлая</RadioInput>
                        <RadioInput type='radio' value='dark' name='theme'>Темная</RadioInput>
                    </RadioGroup>
                </SettingsContentRow>
            </SettingsContent>
        </SettingsWrapper>
    </ProfileLayout>
}