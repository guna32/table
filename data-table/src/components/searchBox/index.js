import React from "react";
import { SearchContainer } from "./style";

const SearchBox = props => {
  return (
    <SearchContainer>
      <input
        style={{
          height: "35%",
          width: "100%"
        }}
        type="search"
        id="myInput"
        onChange={e => props.searchCallback(e)}
        placeholder="Search for items.."
        title="Type in a name"
      />
    </SearchContainer>
  );
};

export default SearchBox;
