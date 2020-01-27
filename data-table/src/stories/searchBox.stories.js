import React from "react";
import SearchBox from "../components/searchBox";
export const SearchBar = () => {
  return (
    <SearchBox searchCallback={e => console.log(e.target.value)}></SearchBox>
  );
};

export default {
  title: "SearchBox",
  component: SearchBar
};
