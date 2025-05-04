import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Menu = styled.div`
    display: flex;
    gap: 15px;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    max-width: 550px;
    margin: 20px auto;
    padding: 10px;
    background: #f8f9fa;
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
`

export const MenuItem = styled(NavLink)`
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





