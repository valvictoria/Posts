import styled from "styled-components";

export const Post = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
    justify-content: space-between;
    align-items: baseline;
    max-width: 300px;
    flex: 1 1;
    background-color: #f8f9fa;
    border-radius: 12px;
    padding: 15px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
    transition: transform 0.2s ease, box-shadow 0.2s ease;

    &:hover {
        transform: translateY(-4px);
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
  }
`

export const Image = styled.img`
    max-width: 300px;
    border-radius: 8px;
`

export const Title = styled.div`
    font-size: 24px;
    font-weight: bold;
`