import {FC} from "react";
import {IconProps} from "./Icon.types";
import {ReactComponent as SearchSVG} from '../../assets/icons/Search.svg'
import {ReactComponent as MailSVG} from '../../assets/icons/Mail.svg'
import {ReactComponent as EyeClosedSVG} from '../../assets/icons/Eye_closed.svg'
import {ReactComponent as EyeOpenedSVG} from '../../assets/icons/Eye_opend.svg'
import {ReactComponent as PersonSVG} from '../../assets/icons/Person.svg'
import {ReactComponent as PlusSVG} from '../../assets/icons/Plus.svg'
import {ReactComponent as TrashSVG} from '../../assets/icons/Trash.svg'
import {ReactComponent as HomeSVG} from '../../assets/icons/Home.svg'
import {ReactComponent as CategoriesSVG} from '../../assets/icons/Categories.svg'
import {ReactComponent as LibrarySVG} from '../../assets/icons/Library.svg'
import {ReactComponent as CrossSVG} from '../../assets/icons/Cross.svg'
import {ReactComponent as ShuffleSVG} from '../../assets/icons/Shuffle.svg'
import {ReactComponent as PlaySVG} from '../../assets/icons/Play.svg'
import {ReactComponent as FilledHeartSVG} from '../../assets/icons/Filled_heart.svg'
import {ReactComponent as HeartSVG} from '../../assets/icons/Heart.svg'
import {ReactComponent as MoreSVG} from '../../assets/icons/More.svg'
import {ReactComponent as FilledPinSVG} from '../../assets/icons/Filled_pin.svg'
import {ReactComponent as PinSVG} from '../../assets/icons/Pin.svg'
import {ReactComponent as PenSVG} from '../../assets/icons/Pen.svg'
import {ReactComponent as ShareSVG} from '../../assets/icons/Share.svg'
import {ReactComponent as LanguageSVG} from '../../assets/icons/Language.svg'
import {ReactComponent as TickSVG} from '../../assets/icons/Tick.svg'
import {ReactComponent as CycleSVG} from '../../assets/icons/Cycle.svg'
import {ReactComponent as HistorySVG} from '../../assets/icons/History.svg'
import {ReactComponent as MinusSVG} from '../../assets/icons/Minus.svg'
import {ReactComponent as NextSVG} from '../../assets/icons/Next.svg'
import {ReactComponent as BackSVG} from '../../assets/icons/Back.svg'
import {ReactComponent as RepeatSVG} from '../../assets/icons/Repeat.svg'
import {ReactComponent as BigTSVG} from '../../assets/icons/BigT.svg'
import {ReactComponent as PauseSVG} from '../../assets/icons/Pause.svg'
import {ReactComponent as SettingsSVG} from '../../assets/icons/Settings.svg'

export const Icon:FC<IconProps> = ({iconName}) => {
    switch (iconName) {
        case 'mail':
            return <MailSVG />
        case 'search':
            return <SearchSVG />
        case "eye_closed":
            return <EyeClosedSVG />
        case "eye_opened":
            return <EyeOpenedSVG />
        case "person":
            return <PersonSVG />
        case "plus":
            return <PlusSVG />
        case "trash":
            return <TrashSVG />
        case "home":
            return <HomeSVG />
        case "categories":
            return <CategoriesSVG />
        case "library":
            return <LibrarySVG />
        case "cross":
            return <CrossSVG />
        case 'shuffle':
            return <ShuffleSVG />
        case 'play':
            return <PlaySVG />
        case 'filled_heart':
            return <FilledHeartSVG />
        case 'heart':
            return <HeartSVG />
        case 'more':
            return <MoreSVG />
        case 'filled_pin':
            return <FilledPinSVG />
        case 'pin':
            return <PinSVG />
        case 'pen':
            return <PenSVG />
        case 'share':
            return <ShareSVG />
        case 'language':
            return <LanguageSVG />
        case 'tick':
            return <TickSVG />
        case 'cycle':
            return <CycleSVG />
        case 'history':
            return <HistorySVG />
        case 'minus':
            return <MinusSVG />
        case 'next':
            return <NextSVG />
        case 'back':
            return <BackSVG />
        case 'repeat':
            return <RepeatSVG />
        case 'big_t':
            return <BigTSVG />
        case 'pause':
            return <PauseSVG />
        case 'settings':
            return <SettingsSVG />
        default:
            return null
    }
}