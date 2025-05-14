import * as SC from './styles'

export const Filter = ({ children, ...rest }) => {
    return (
        <SC.FilterWrapper>
            <SC.FilterInput {...rest}>{children}</SC.FilterInput>
        </SC.FilterWrapper>
    )
}