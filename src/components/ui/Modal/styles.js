import styled from "styled-components";

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
    padding: 25px 25px;
    border-radius: 12px;
    background-color: #fdfdff;
    display: flex;
    flex-direction: column;
    gap: 30px;
`

export const ModalText = styled.div`
    color: #495057;
    font-weight: bold;
    font-size: 18px;
    text-align: center;
`

export const ModalContent = styled.div`
    display: flex;
    gap: 20px;
    align-items: center;
    justify-content: center;
`