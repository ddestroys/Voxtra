import ReactSelect from 'react-select'
import {FC} from "react";
import {SelectProps} from "./select.types";
import {ReactSelectWrapper} from "./select.styled";

export const Select:FC<SelectProps> = ({components, ...props}) => {
    return <ReactSelectWrapper><ReactSelect className='react-select-container'
                                            classNamePrefix='react-select' components={{IndicatorSeparator: () => null,...components}} {...props}/></ReactSelectWrapper>
}