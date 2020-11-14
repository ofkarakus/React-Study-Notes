import {
  CardContainer,
  Poster,
  TitleContainer,
  Title,
  Point,
} from "./Card.style";

const Card = ({ item }) => {
  const imgBaseUrl = "https://image.tmdb.org/t/p/w600_and_h900_bestv2";

  return (
    <CardContainer>
      <Poster src={`${imgBaseUrl}${item.poster_path}`} />
      <TitleContainer>
        <Title>{item.title}</Title>
        <Point>{item.vote_average}</Point>
      </TitleContainer>
    </CardContainer>
  );
};

export default Card;
