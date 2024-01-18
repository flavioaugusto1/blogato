import styled from "styled-components";

export const Container = styled.article`
  display: flex;
  align-items: center;
  gap: 1.6rem;

  h2 {
    font-size: 1.8rem;
    line-height: 2.8rem;
  }

  p {
    font-size: 1.4rem;
    line-height: 2.2rem;
  }

  animation-name: appears;
  animation-duration: 2s;
  animation-fill-mode: backwards;

  @keyframes appears {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;
