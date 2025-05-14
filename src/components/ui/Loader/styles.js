import styled from "styled-components";

export const Loader = styled.div`
  width: 48px;
  height: 48px;
  margin: 20px auto;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 3px solid #3D405B;
  border-radius: 50%;
  box-sizing: border-box;
  animation: animloader 2s linear infinite;
  z-index: 1000;

&::after {
  content: '';  
  box-sizing: border-box;
  width: 6px;
  height: 24px;
  background: #3D405B;
  transform: rotate(-45deg);
  position: absolute;
  bottom: -20px;
  left: 46px;
}

@keyframes animloader {
    0% {
      transform: translate(-10px, -10px) translate(-50%, -50%);
    }
    25% {
      transform: translate(-10px, 10px) translate(-50%, -50%);
    }
    50% {
      transform: translate(10px, 10px) translate(-50%, -50%);
    }
    75% {
      transform: translate(10px, -10px) translate(-50%, -50%);
    }
    100% {
      transform: translate(-10px, -10px) translate(-50%, -50%);
    }
}
`