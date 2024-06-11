import { StateManagerProps } from 'react-select/dist/declarations/src/useStateManager';

export interface SelectProps extends StateManagerProps {

}

export interface SelectOption {
    label: string;
    value: string | number;
}