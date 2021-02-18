import React from "react";
import styled from "styled-components";
import Row from "./Row/Row";

const TableStyled = styled.table`
  width: 90%;
  border-collapse: collapse;
  margin: 0px 0px 0px 30px;
`;
const TH = styled.th`
  border: 1px solid #000;
  width: 25%;
`;

const Table = (props) => {
  const titles = [
    "RUB/CUPCAKE",
    "USD/CUPCAKE",
    "EUR/CUPCAKE",
    "RUB/USD",
    "RUB/EUR",
    "EUR/USD",
  ];
  return (
    <div>
      <TableStyled>
        <thead>
          <tr>
            <TH>Pair name/market</TH>
            <TH>First</TH>
            <TH>Second</TH>
            <TH>Third</TH>
          </tr>
        </thead>
      </TableStyled>

      {titles.map((title, index) => (
        <Row key={index} title={title} />
      ))}
    </div>
  );
};

export default Table;
