import styled from "styled-components";

export const Button = styled.button`
    padding: 10px 20px;
    background-color: #0077b6;
    color: white;
    border: none;
    border-radius: 12px;
    font-size: 16px;
    font-weight: 500;
    cursor: pointer;
    transition: background-color 0.2s ease;
    max-width: 200px;
    width: 100%;
    align-self: center;

    &:hover {
        background-color: #023e8a;
    }

    &:active {
        transform: scale(0.98);
    }

    &:disabled {
        opacity: 0.5;
        cursor: default;
        &:hover {
            background-color: #0077b6;
    }
    }
`