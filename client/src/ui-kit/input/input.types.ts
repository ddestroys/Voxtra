import {InputHTMLAttributes} from "react";
import {Icons} from "../Icon";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    prefixIcon?: Icons
    errorMsg?: string;
    borderOnValid?: boolean;
}