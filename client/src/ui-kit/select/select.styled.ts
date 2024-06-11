import styled from "styled-components";

export const ReactSelectWrapper = styled.div`
    .react-select-container {
        
        
        .react-select__control {
        background: ${({theme})=>theme.colors.neutrals.darkGrey};
        border-radius: 40px;
        border: 2px solid ${({theme})=>theme.colors.neutrals.darkGrey};

        .react-select__value-container {
            //padding: 0;

            .react-select__input-container {
                margin: 0;
                padding: 0;
                
                .react-select__input {
                    font-size: ${({theme})=>theme.typography.text.size.s}px;
                    line-height: ${({theme})=>theme.typography.text.lineHeight.s}px;
                    font-weight: ${({theme})=>theme.typography.text.weight.s};
                    color: ${({theme})=>theme.colors.neutrals.white} !important;
                }
            }

            .react-select__placeholder,  .react-select__single-value {
                font-size: ${({theme})=>theme.typography.text.size.s}px;
                line-height: ${({theme})=>theme.typography.text.lineHeight.s}px;
                font-weight: ${({theme})=>theme.typography.text.weight.s};
                color: ${({theme})=>theme.colors.neutrals.white};
            }

            
        }
            &.react-select__control--is-focused {
                border-color: ${({theme})=>theme.colors.neutrals.darkGrey};
                box-shadow: none;
            }
    }
    } 
`