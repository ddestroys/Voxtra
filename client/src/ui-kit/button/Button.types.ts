import {ButtonHTMLAttributes} from "react";

export type ButtonType = 'primary' | 'secondary';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    buttonType: ButtonType
}