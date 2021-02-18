import React from "react";
import styled from "styled-components";

const TableStyled = styled.table`
  width: 90%;
  border-collapse: collapse;
  margin: 0px 0px 0px 30px;
`;

const TD = styled.th`
  border: 1px solid #000;
  width: 25%;
`;

const Row = (props) => {
  return (
    <TableStyled>
      <tbody>
        <tr>
          <TD>{props.title} </TD>
          <TD></TD>
          <TD></TD>
          <TD></TD>
        </tr>
      </tbody>
    </TableStyled>
  );
};

export default Row;
