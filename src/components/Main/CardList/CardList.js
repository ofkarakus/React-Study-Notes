import Card from "../Card/Card";
import { CardListContainer } from "./CardList.style";

const CardList = (props) => {
  return (
    <CardListContainer>
      {props.searchResults
        ? props.searchResults.map((item) => (
            <Card imgBaseUrl={props.imgBaseUrl} item={item} />
          ))
        : props.movieList.map((item) => (
            <Card imgBaseUrl={props.imgBaseUrl} item={item} />
          ))}
    </CardListContainer>
  );
};

export default CardList;
