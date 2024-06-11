import {MainLayout} from "../layouts/mainLayout";
import {
    SelectWrapper,
    StyledModal,
    TrackHeader,
    TrackHeaderTitle,
    TrackText,
    TrackTextIcon,
    TrackTextWrapper,
    TrackWrapper, TranslateSelectRow, TranslateTitleRow
} from "./track.styled";
import {Button} from "../../ui-kit/button";
import {Icon} from "../../ui-kit/Icon";
import {useEffect, useState} from "react";
import {Select} from "../../ui-kit/select";
import axios from "axios";
import {useParams} from "react-router-dom";

const languages = [{
    label: 'Русский',
    value: 'ru'
},
    {
        label: 'English',
        value: 'en'
    },
    {
    label: 'Белорусский',
    value: 'be'
},

]

export const Track = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const {id} = useParams()

    const [targetLanguage, setTargetLanguage] = useState('ru')
    const [initLanguage, setInitLanguage] = useState('en')
    const [track, setTrack] = useState(null)
    const [translation, setTranslation] = useState(null)

    const getTrack = async () => {
       const {data} = await axios.get(`http://localhost:5000/track/${id}`)
        setTrack(data)
        console.log(data)
    }

    const translate = async () => {
        if(!track) {
            return
        }
        const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=${initLanguage}&tl=${targetLanguage}&dt=t&q=${encodeURI(track.text)}`/*+ 'en' + "&tl=" + 'ru' + "&dt=t&q=" + encodeURI(data.text);*/
        const {data: translation} = await axios.get(url)

        setTranslation(translation[0].map((item)=>item[0]).join(''))

        console.log(translation[0].map((item)=>item[0]).join(''))
    }

    useEffect(() => {
        getTrack()
    }, []);

    return <MainLayout>
        <TrackWrapper>
            <TrackHeader>
                <TrackHeaderTitle>
                    Название песни
                </TrackHeaderTitle>
                <Button buttonType='primary' onClick={()=>setIsModalOpen(true)}><Icon iconName='language'/> Перевести</Button>
            </TrackHeader>
            <TrackTextWrapper>
                <TrackText>
                    {track?.text}
                </TrackText>
                {translation && <TrackText $translated>
                    {translation}
                    <TrackTextIcon onClick={()=>setTranslation(null)}>
                        <Icon iconName='cross' />
                    </TrackTextIcon>
                </TrackText>}
            </TrackTextWrapper>
            <StyledModal footer={null} closeIcon={null} open={isModalOpen} onCancel={()=>setIsModalOpen(false)}>
                <TranslateTitleRow>
                    Перевести
                    <Button buttonType='primary' onClick={translate}><Icon iconName='tick' /></Button>
                </TranslateTitleRow>
                <TranslateSelectRow>
                    <SelectWrapper>
                        С
                        <Select options={languages} onChange={(newValue)=>setInitLanguage(newValue.value)} defaultValue={languages[1]}/>
                    </SelectWrapper>
                    <Icon iconName='cycle' />
                    <SelectWrapper>
                        На
                        <Select options={languages} onChange={(newValue)=>setTargetLanguage(newValue.value)} defaultValue={languages[0]}/>
                    </SelectWrapper>
                </TranslateSelectRow>
            </StyledModal>
        </TrackWrapper>
    </MainLayout>
}