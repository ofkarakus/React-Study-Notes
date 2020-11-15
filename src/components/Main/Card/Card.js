import {
  CardContainer,
  Poster,
  TitleContainer,
  Title,
  Point,
} from "./Card.style";

const Card = ({ item, imgBaseUrl }) => {
  return (
    <CardContainer>
      <Poster
        src={
          item.poster_path
            ? `${imgBaseUrl}${item.poster_path}`
            : "https://play-lh.googleusercontent.com/8Wo6Eg3iUaLAz_tFaxGxW9QP3crthfIxXMILX84FMbQHgXHY2ewxf_lzYhpveG0iJQ"
        }
      />
      <TitleContainer>
        <Title>{item.title}</Title>
        <Point>{item.vote_average}</Point>
      </TitleContainer>
    </CardContainer>
  );
};

export default Card;
