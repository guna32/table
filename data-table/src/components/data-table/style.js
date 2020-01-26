import styled from "styled-components";

export const TableCell = styled.div`
  ${props =>
    props.cellType === "header"
      ? { fontSize: "1.2rem", fontWeight: "600", textTransform: "capitalize" }
      : { fontSize: "1rem", fontWeight: "300" }}
  padding:10px;
`;
export const Title = styled.div`
  padding: 1rem 0;
  text-align: left;
  font-size: 2rem;
`;

export const TW = styled.div`
  padding: 0 1rem;
`;

export const TableHeaderWrap = styled.div`
  display: flex;
  align-items: center;
`;
