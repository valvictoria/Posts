import styled from "styled-components";

export const FilterWrapper = styled.div`
    display: flex;
    gap: 15px;
    max-width: 330px;
    width: 100%;
`

export const FilterInput = styled.input`
    width: 100%;
    padding: 10px 8px;
    border: 1px solid #ddd;
    border-radius: 5px;  
    outline: none;
    font-size: 14px;

    &:focus {
        border-color: #007bff; 
        box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.2); 
    }
`