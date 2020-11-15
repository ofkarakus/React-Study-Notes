import { useState } from "react";
import { StyledSearchDiv, StyledInput, StyledButton } from "./SearchBar.style";

const SearchBar = (props) => {

  const [query, setQuery] = useState("");

  return (
    <StyledSearchDiv>
      <StyledInput
        placeholder="Search"
        onChange={({ target: { value } }) => {
          setQuery(value);
        }}
      />
      <StyledButton
        onClick={() => {
          props.onSendQuery(query)
        }}
      >
        Search
      </StyledButton>
    </StyledSearchDiv>
  );
};

export default SearchBar
