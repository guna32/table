import React from "react";
import styled from "styled-components";
import Idea from "../../assets/idea";

const Wrapper = styled.div`
  background: #e20074;
  color: #fff;
  letter-spacing: 0.2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 1rem;
`;
const IconWrap = styled.div`
  width: 50%;
  margin: 5rem 0;
`;

const CanvasLabs = () => {
  return (
    <Wrapper>
      <h1>CANVAS</h1>
      <IconWrap>
        <Idea></Idea>
      </IconWrap>
    </Wrapper>
  );
};
export default CanvasLabs;
