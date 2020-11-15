import { useState, useEffect } from "react";
import CardList from "./components/Main/CardList/CardList";
import SearchBar from "./components/Header/SearchBar/SearchBar";
import Pagination from "./components/Footer/Pagination/Pagination";
import axios from "axios";

function App() {
  const [movieList, setMovieList] = useState([]);
  const discoverBaseUrl = "https://api.themoviedb.org/3/discover/movie";
  const imgBaseUrl = "https://image.tmdb.org/t/p/w600_and_h900_bestv2";
  const apiKey = "f27d3b03d7a2f1f56b22c93722529da1";

  const fetchData = async () => {
    const {
      data: { results },
    } = await axios.get(discoverBaseUrl, {
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

  const [searchResults, setSearchResults] = useState(null);
  const [totalPages, setTotalPages] = useState(null);
  const [query, setQuery] = useState("");

  const searchMovies = async () => {
    const {
      data: { results },
      data: { total_pages },
    } = await axios.get("https://api.themoviedb.org/3/search/movie", {
      params: {
        api_key: apiKey,
        query: query,
      },
    });
    setSearchResults(results);
    setTotalPages(total_pages);
  };

  useEffect(() => {
    searchMovies();
  }, [query]);

  return (
    <div>
      <header>
        <SearchBar
          onSendQuery={(query) => {
            setQuery(query);
          }}
        ></SearchBar>
      </header>
      <main>
        <CardList
          imgBaseUrl={imgBaseUrl}
          movieList={movieList}
          searchResults={searchResults}
        />
      </main>
      <footer>
        <Pagination totalPages={totalPages} />
      </footer>
    </div>
  );
}

export default App;
