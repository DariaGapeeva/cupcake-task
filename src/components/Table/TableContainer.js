import React, { useEffect } from "react";
import Table from "./Table";

import { connect } from "react-redux";
import { setValuesThunk, checkRowValuesAC } from "./../../redux/tableReducer";

const TableContainer = (props) => {
  useEffect(() => {
    props.setValues("first/poll", 1);
    props.setValues("second/poll", 2);
    props.setValues("third/poll", 3);
  }, []);

  return (
    <Table
      markets={props.markets}
      setValues={props.setValues}
      maxValue={props.maxValue}
      checkRowValues={props.checkRowValues}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    markets: state.table.markets,
    maxValue: Object.values(state.table.maxValue),
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    setValues: (address, id) => dispatch(setValuesThunk(address, id)),
    checkRowValues: () => dispatch(checkRowValuesAC()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TableContainer);
