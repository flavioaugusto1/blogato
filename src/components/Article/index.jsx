import { Container } from "./styles";

export function Article({ image, title, description, ...rest }) {
  return (
    <Container {...rest}>
      <img src={image} alt="" />
      <div className="details">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </Container>
  );
}
