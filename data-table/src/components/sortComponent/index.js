import React, { useState } from "react";
import styled from "styled-components";
import SortIcon from "../../assets/sortIcon";

const IconWrap = styled.div`
  display: flex;
  transform: ${props => props.orientation};
  transition: 0.2s ease;
`;
const MainWrap = styled.div`
  :hover& {
    transform: scale(1.2);
  }
`;
const SortComponent = props => {
  const [clickCount, setCilckCount] = useState(2);
  return (
    <MainWrap>
      <IconWrap
        title="sort"
        onClick={() => {
          props.onClick();
          setCilckCount((clickCount + 1) % 2);
        }}
        orientation={clickCount === 1 ? "rotate(180deg)" : "rotate(0)"}
      >
        <SortIcon style={{ height: "0.8rem" }} />
      </IconWrap>
    </MainWrap>
  );
};
export default SortComponent;
