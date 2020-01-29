import styled from "styled-components";

export const TableCell = styled.div`
  ${props =>
    props.cellType === "header"
      ? { fontSize: "1.2rem", fontWeight: "600", textTransform: "capitalize" }
      : { fontSize: "1rem", fontWeight: "300" }}
  padding:10px;
  background: ${props => (props.theme ? props.theme : "")};
  text-align: left;
`;
export const Title = styled.div`
  padding: 1rem 0;
  text-align: left;
  font-size: 2rem;
`;

export const TW = styled.div`
  padding: 0 1rem 1rem 1rem;
  border: 1px solid lightgray;
  margin: 0 1rem;
  // overflow: auto;
  // box-shadow: 10px 10px 10px -5px lightgrey;
`;

export const TableHeaderWrap = styled.div`
  display: flex;
  align-items: center;
  background: #5e9cd3;
  color: white;
  justify-content: space-between;
  padding: 10px 10px;
`;
export const TableUtilWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const RTW = styled.div`
  min-height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2em;
  color: gray;
`;
export const RawTableWrap = styled.div`
  width: 100%;
  overflow: auto;
  min-height: 50vh;
`;
