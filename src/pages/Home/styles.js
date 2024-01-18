import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: grid;
  grid-template-rows: max-content 1fr max-content;

  .wrap {
    padding: 1.2rem 3.6rem;
    width: min(144rem, 100%);
    margin: 0 auto;
  }
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2.5rem;

  .logo {
    padding: 0.8rem;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.COLORS.WHITE};
  }

  input {
    flex: 1;
    padding: 1.2rem 1.4rem;

    border-radius: 0.4rem;
    border: none;
    outline: none;

    background-color: ${({ theme }) => theme.COLORS.BLUE_600};
    color: ${({ theme }) => theme.COLORS.WHITE};

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.WHITE};
      font-weight: 600;
    }
  }

  .user-photo {
    width: 4.2em;
    height: 4.2rem;
    border-radius: 50%;
  }

  animation: topDown 1s backwards;

  @keyframes topDown {
    0% {
      transform: translateY(-100%);
    }
  }
`;

export const Main = styled.main`
  background-color: ${({ theme }) => theme.COLORS.WHITE};

  img {
    width: 100%;
    aspect-ratio: 4/3;
    object-fit: cover;
  }

  .content {
    .description {
      display: flex;
      flex-direction: column;
      gap: 3.2rem;

      h1 {
        font-size: 2.4rem;
        line-height: 4rem;
      }

      .assessment {
        display: flex;
        align-items: center;
        gap: 1.2rem;

        button {
          display: flex;
          align-items: center;
          justify-content: center;

          border: none;
          border-radius: 50%;

          background-color: ${({ theme }) => theme.COLORS.BLUE_700};
          color: ${({ theme }) => theme.COLORS.WHITE};
          cursor: pointer;

          .button-icons {
            height: 4rem;
            width: 4rem;
            padding: 1rem;
          }
        }
      }

      p {
        font-size: 1.6rem;
        line-height: 2.5rem;
        text-align: justify;
      }
    }

    .articles {
      display: flex;
      flex-direction: column;
      gap: 1.6rem;

      h1 {
        font-size: 2.4rem;
        line-height: 3.8rem;
      }

      img {
        width: 15.1rem;
        height: 10.4rem;
        aspect-ratio: 16/9;
        object-fit: cover;

        border-radius: 0.5rem;
      }
    }

    @media (min-width: 1024px) {
      display: grid;
      grid-template-columns: 2fr 1fr;
      gap: 3.4rem;

      padding: 1.2rem 3.6rem;
      width: min(144rem, 100%);
      margin: 3.2rem auto 0;

      img {
        height: 40rem;
        border-radius: 0.5rem;
      }

      .description {
        margin: 0;

        header {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .wrap {
          padding: 0;
        }
      }

      .articles {
        padding: 0;
      }
    }
  }

  @media (min-width: 1024px) {
    overflow-y: auto;
  }
`;

export const Footer = styled.footer`
  font-size: 1.6rem;
  font-weight: 600;
  text-align: center;

  padding: 1.6rem;

  color: ${({ theme }) => theme.COLORS.WHITE};

  animation: downTop 1s backwards;

  @keyframes downTop {
    0% {
      transform: translateY(100%);
    }
  }
`;
