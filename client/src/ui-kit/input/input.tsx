import {InputPrefixIcon, InputWrapper, StyledInput} from "./input.styled";
import {ChangeEvent, FC, useRef, useState} from "react";
import {InputProps} from "./input.types";
import {useClickOutside} from "../../utils/useClickOutside";
import {Icon} from "../Icon";

export const Input: FC<InputProps> = ({prefixIcon, errorMsg, borderOnValid, onChange, value,className, ...props}) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const inputWrapperRef = useRef(null);
    const [inputValue, setInputValue] = useState('')

    const [isFocused, setIsFocused] = useState(false);

    const onInputClick = () => {
        inputRef?.current?.focus()

        setIsFocused(true)
    }

    const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value)
        onChange && onChange(e)
    }

    useClickOutside(inputWrapperRef, () => setIsFocused(false))

    return <InputWrapper className={className} ref={inputWrapperRef} onClick={onInputClick} $isFocused={isFocused} $isEmpty={!inputValue}
                         $isError={!!errorMsg} $isValid={borderOnValid && !isFocused && !!inputValue}>
        {prefixIcon && <InputPrefixIcon>
            <Icon iconName={prefixIcon}/>
        </InputPrefixIcon>}
        <StyledInput {...props} ref={inputRef} onChange={onInputChange} value={value || inputValue}/>
    </InputWrapper>
}