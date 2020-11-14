import { useState, useEffect } from "react";
import CardList from "./components/CardList/CardList";
import axios from "axios";
import "./App.style.scss";

function App() {
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState(null);

  console.log(searchResults);

  const searchMovies = async () => {
    const {
      data: { results },
    } = await axios.get("https://api.themoviedb.org/3/search/movie", {
      params: {
        api_key: "f27d3b03d7a2f1f56b22c93722529da1",
        query: search,
      },
    });
    setSearchResults(results);
  };

  return (
    <div id="container">
      <header>
        <input
          id="searchBar"
          placeholder="Search"
          onChange={({ target: { value } }) => {
            setSearch(value);
          }}
        ></input>
        <button
          id="searchBtn"
          onClick={() => {
            searchMovies();
          }}
        >
          Search
        </button>
      </header>

      <main>
        <CardList searchResults={searchResults} />
      </main>

      <footer></footer>
    </div>
  );
}

export default App;
