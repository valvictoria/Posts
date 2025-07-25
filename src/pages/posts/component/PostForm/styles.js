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

export const Textarea = styled.textarea`
    width: 100%;
    padding: 12px;
    border: 1px solid #ddd;
    border-radius: 8px;  
    outline: none;
    resize: none;  
    font-size: 16px;
    min-height: 120px; 
    transition: border-color 0.3s ease, box-shadow 0.3s ease;

    &:focus {
        border-color: #007bff;
        box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.2);
    }
`