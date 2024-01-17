import { Container, Header, Main, Footer } from "./styles";
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";

import Logo from "../../assets/logo.svg";

import { Article } from "../../components/Article";

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
      <Main>
        <img src="https://source.unsplash.com/random/?astronaut+cat" alt="" />
        <section className="wrap">
          <header>
            <h1>Seriam os gatos astronautas?</h1>
            <div className="assessment">
              <button>
                <AiOutlineLike className="button-icons" />
              </button>
              <button>
                <AiOutlineDislike className="button-icons" />
              </button>
            </div>
          </header>
          <div className="description">
            <p>
              Os gatos são animais fascinantes e cercados de mistérios. De
              temperamento independente e misterioso, esses felinos são
              conhecidos por sua agilidade, elegância e um comportamento muitas
              vezes imprevisível. Contudo, recentemente, uma teoria tem ganhado
              espaço na internet e entre teóricos de conspiração: seriam os
              gatos astronautas? A teoria sugere que os gatos não são animais
              terrestres, mas sim seres extraterrestres enviados para realizar
              uma missão específica em nosso planeta. Há relatos históricos que
              apontam para o fato de que os gatos eram considerados seres
              sagrados em diferentes culturas e até mesmo associados a figuras
              divinas. Isso poderia indicar que os gatos têm uma origem muito
              mais mística do que se pensava anteriormente. Além disso, há
              teóricos que acreditam que os felinos possuem habilidades
              telepáticas e são capazes de se comunicar com outras espécies
              alienígenas. Essa crença baseia-se em relatos de pessoas que
              afirmam terem visto gatos reagindo a estímulos que não são
              perceptíveis aos seres humanos, ou até mesmo se comportando de
              maneira incomum durante eventos astronômicos, como uma aurora
              boreal. Esses e outros indícios foram interpretados como sinais de
              que os gatos seriam seres interplanetários.
            </p>
          </div>
        </section>
        <section className="wrap articles">
          <h1>Artigos relacionados</h1>
          <Article
            image="https://source.unsplash.com/random/?sleepy+cat"
            title={"Sábado preguiçoso"}
            description={
              "Descubra atividades interessantes para fazer com seu pet durante os finais de semana."
            }
          />

          <Article
            image="https://source.unsplash.com/random/?many+cat"
            title={"Balaio de gatos"}
            description={
              "Como evitar confusões entre seus gatíneos e acostumá-los desde filhotes."
            }
          />

          <Article
            image="https://source.unsplash.com/random/?kitty"
            title={"Cartela de cores"}
            description={
              "Seu gato é inverno intenso? Verão profundo? Descubra as cores que mais combinam com seu bichano."
            }
          />

          <Article
            image="https://source.unsplash.com/random/?cat+snow"
            title={"Os gatos sentem frio?"}
            description={
              "Preparem-se para a frente fria que vem para o país da melhor maneira possível."
            }
          />

          <Article
            image="https://source.unsplash.com/random/?cat"
            title={"Conheça o Moacir"}
            description={
              "Moacir é o gatinho da semana do nosso blog. Venha conhecer sua história de superação."
            }
          />
        </section>
      </Main>
      <Footer className="wrap">
        <p>&copy; 2023 - fladev</p>
      </Footer>
    </Container>
  );
}
