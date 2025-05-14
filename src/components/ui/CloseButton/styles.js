import styled from "styled-components";

export const CloseButton = styled.button`
    padding: 8px 12px;
    background-color: #edf6f9;
    color: #3D405B;
    border: none;
    border-radius: 8px;
    font-size: 16px;
    font-weight: 500;
    cursor: pointer;
    transition: background-color 0.2s ease;
    align-self: center;
    max-width: 150px;
    width: 100%;
    
    &:hover {
        background-color: #cfe1b9;
    }
`