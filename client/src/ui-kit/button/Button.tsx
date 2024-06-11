import {StyledButton} from "./Button.styled";
import {FC} from "react";
import {ButtonProps} from "./Button.types";

export const Button:FC<ButtonProps> = ({buttonType,...props}) => {
    return <StyledButton $buttonType={buttonType} {...props}/>
}