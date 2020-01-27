import React, { useState } from "react";
import { action } from "@storybook/addon-actions";
import SearchBox from "../components/searchBox";

export default {
  title: "SearchBox",
  component: SearchBox
};

export const searchBox = () => {
  const [input, setInput] = useState("");
  return (
    <>
      <SearchBox searchCallback={e => setInput(e.target.value)}></SearchBox>
      <p>
        you are searching for <h1>{input}</h1>
      </p>
    </>
  );
};
