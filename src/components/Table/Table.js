import React, { useEffect } from "react";
import styled from "styled-components";
import RowTable from "./RowTable/RowTable";

const Container = styled.div`
  margin: 50px auto;
  display: flex;
  width: 800px;
  height: 560px;
  font-size: 24px;
  font-weight: 500;
  @media (max-width: 992.98px) {
    width: 598px;
    font-size: 20px;
  }
  @media (max-width: 768.98px) {
    width: 398px;
    height: 280px;
    font-size: 14px;
  }
`;

const Table = (props) => {
  return (
    <Container>
      <RowTable
        key={0}
        values={props.titles}
        thTitle={"Pair name/market"}
        width={30}
      />

      {props.markets.map((market) => (
        <RowTable
          key={market.id}
          values={Object.values(market.rates)}
          thTitle={market.name}
          minValue={props.minValue}
          width={23.3}
          id={market.id}
        />
      ))}
    </Container>
  );
};

export default Table;
