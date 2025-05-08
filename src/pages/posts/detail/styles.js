import styled from "styled-components";

export const Image = styled.img`
    max-width: 200px;
    float: left;
    margin-right: 15px;
`

export const Text = styled.div`
    font-size: 15px;
`

export const LinkWrapper = styled.div`
    display: flex;
    gap: 16px;
    margin-top: 24px;
    justify-content: center;
    align-items: center;
`

export const DeleteButton = styled.button`
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

    &:hover {
        background-color: #EEB9AA;
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

export const NoButton = styled.button`
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

    &:hover {
        background-color: #cfe1b9;
    }
`

export const ModalWrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgb(108, 117, 125, 0.3);
`

export const Modal = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 1px solid #daddd8;
    padding: 10px 20px;
    border-radius: 12px;
    background-color: #fdfdff;
    display: flex;
    flex-direction: column;
    gap: 15px;
`

export const ModalText = styled.div`
    color: #495057;
    font-weight: bold;
    font-size: 20px;
    text-align: center;
`

export const ModalContent = styled.div`
    display: flex;
    gap: 15px;
    align-items: center;
    justify-content: center;
`

