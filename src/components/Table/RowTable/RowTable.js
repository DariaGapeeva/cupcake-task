import React from "react";
import styled from "styled-components";

const TableStyled = styled.table`
  width: ${(props) => props.width}%;

  border-collapse: collapse;

  background-color: #f2f2f2;
`;

const TR = styled.tr`
  border: 2px solid #979797;
  border-top: 4px solid #979797;
  border-bottom: 4px solid #979797;
`;

const TD = styled.td`
  background: ${(props) => props.backgroundColor};
  color: ${(props) => props.color};
  height: 75px;
  padding-left: 30px;
  width: 100%;

  @media (max-width: 768.98px) {
    height: 40px;
    padding-left: 15px;
  }
`;

const RowTable = (props) => {
  return (
    <TableStyled width={props.width}>
      <thead>
        <TR>
          <TD>{props.thTitle}</TD>
        </TR>
      </thead>
      <tbody>
        {props.values.map((item, index) => (
          <TR key={index}>
            <TD
              backgroundColor={
                props.minValue && props.minValue[index].includes(props.id)
                  ? "#0091FF"
                  : "transparent"
              }
              color={
                props.minValue && props.minValue[index].includes(props.id)
                  ? "#FFF"
                  : "###000"
              }
            >
              {item}
            </TD>
          </TR>
        ))}
      </tbody>
    </TableStyled>
  );
};

export default RowTable;
