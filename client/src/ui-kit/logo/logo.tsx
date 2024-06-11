import {LogoImage, LogoTitle, LogoWrapper} from "./logo.styled";
import {ReactComponent as LogoSVG} from '../../assets/icons/Logo.svg'

export const Logo = () => {
    return <LogoWrapper>
        <LogoImage>
            <LogoSVG />
        </LogoImage>
        <LogoTitle>
            Voxtra
        </LogoTitle>
    </LogoWrapper>
}