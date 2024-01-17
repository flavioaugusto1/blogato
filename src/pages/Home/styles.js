import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: grid;
  grid-template-rows: max-content 1fr max-content;

  .wrap {
    padding: 1.2rem 3.6rem;
    width: min(112rem, 100%);
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
`;
export const Main = styled.main``;
export const Footer = styled.footer``;
