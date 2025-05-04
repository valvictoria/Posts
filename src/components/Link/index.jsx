import * as SC from './styles'

export const Link = ({ simple = true, children, ...props }) => {
    return (
        simple 
        ? <SC.SimpleLink {...props}>{children}</SC.SimpleLink> 
        : <SC.Navigationlink {...props}>{children}</SC.Navigationlink>
    )
}