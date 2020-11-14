import { useState, useEffect } from "react";
import Card from "../Card/Card";
import axios from "axios";
import { CardListContainer } from "./CardList.style";

const CardList = (props) => {
  const [movieList, setMovieList] = useState([]);
  const baseUrl = "https://api.themoviedb.org/3/discover/movie";
  const apiKey = "f27d3b03d7a2f1f56b22c93722529da1";

  const fetchData = async () => {
    const {
      data: { results },
    } = await axios.get(baseUrl, {
      params: {
        api_key: apiKey,
        language: "en-US",
        sort_by: "popularity.desc",
        include_adult: false,
        with_genres: 36,
      },
    });
    setMovieList(results);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <CardListContainer>
      {props.searchResults
        ? props.searchResults.map((item) => <Card item={item} />)
        : movieList.map((item) => <Card item={item} />)}
    </CardListContainer>
  );
};

export default CardList;
