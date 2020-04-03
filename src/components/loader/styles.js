import styled, { keyframes } from 'styled-components';

const Rotate = keyframes`
        0% {
        transform: rotate(0);
    }

    100% {
        transform: rotate(360deg);
    }
`;

export default styled.div`
  margin-top: 56px;
  svg {
    animation: ${Rotate} linear 1.3s infinite;
  }
`;
