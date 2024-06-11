import {RegistrationFormData} from "../../registration.types";

export interface SecondaryRegistrationProps {
    onSecondaryRegister: (formData: RegistrationFormData) => void;
    goBack: () => void;
}