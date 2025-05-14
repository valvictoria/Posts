import styled from "styled-components";

export const SortContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    justify-content: flex-end;
    max-width: 330px;
    width: 100%;
`

export const SortLabel = styled.span`
    font-size: 14px;
    color: #666;
`

export const SortSelect = styled.select`
    font-size: 14px;
    color: gray;
    padding: 8px 12px;
    border: 1px solid #ddd;
    border-radius: 4px;
    background-color: white;
    cursor: pointer;
    outline: none;
    transition: border-color 0.2s;
    max-width: 225px;
    width: 100%;

    &:focus {
        border-color: #007bff;
    }
`