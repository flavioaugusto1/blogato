import { Container, Header, Main, Footer } from "./styles";
import Logo from "../../assets/logo.svg";

export function Home() {
  return (
    <Container>
      <Header className="wrap">
        <img
          src={Logo}
          alt="imagem da pata de um gato com um fundo branco"
          className="logo"
        />
        <input type="text" placeholder="Pesquise por artigos" />
        <img
          src="https://github.com/flavioaugusto1.png"
          alt=""
          className="user-photo"
        />
      </Header>
      <Main className="wrap"></Main>
      <Footer className="wrap"></Footer>
    </Container>
  );
}
