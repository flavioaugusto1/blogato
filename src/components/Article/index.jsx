import { Container } from "./styles";

export function Article({ image, title, description }) {
  return (
    <Container>
      <img src={image} alt="" />
      <div className="details">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </Container>
  );
}
