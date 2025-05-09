import styled from "styled-components";

export const Input = styled.input`
    width: 100%;
    padding: 12px;
    border: 1px solid #ddd;
    border-radius: 8px;  
    outline: none;
    font-size: 16px;
    transition: border-color 0.3s ease, box-shadow 0.3s ease;

    &:focus {
        border-color: #007bff; 
        box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.2); 
    }
`