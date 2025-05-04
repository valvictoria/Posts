import styled from "styled-components"
import { Link, NavLink } from "react-router-dom"

export const SimpleLink = styled(Link)`
    color: #3D405B;
    text-decoration: none;

    &:hover {
        color: #81B29A;
    }
`
export const Navigationlink = styled(NavLink)`
color: #495057;
padding: 8px 16px;
border-radius: 8px;
transition: all 0.3s ease;
text-decoration: none;

&.active {
    color: #0077b6;
}

&:hover {
    background-color: #e9ecef;
    border-radius: 10px;
}
`