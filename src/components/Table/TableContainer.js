import React, { useEffect } from "react";
import Table from "./Table";
import { useDispatch, useSelector } from "react-redux";
import { setValuesThunk } from "./../../redux/tableReducer";

const TableContainer = (props) => {
  useEffect(() => {
    dispatch(setValuesThunk("first/poll", 1));
    dispatch(setValuesThunk("second/poll", 2));
    dispatch(setValuesThunk("third/poll", 3));
  }, []);

  const titles = [
    "RUB/CUPCAKE",
    "USD/CUPCAKE",
    "EUR/CUPCAKE",
    "RUB/USD",
    "RUB/EUR",
    "EUR/USD",
  ];

  const dispatch = useDispatch();

  const markets = useSelector((state) => state.table.markets);

  const minValue = useSelector((state) => {
    let value = titles.map((title) => {
      let array = [];

      for (let item of state.table.markets) {
        array.push(item.rates[title]);
      }
      return Math.min(...array) === Math.max(...array)
        ? null
        : array.indexOf(Math.min(...array)) + 1;
    });
    return value;
  });

  return <Table markets={markets} minValue={minValue} titles={titles} />;
};

export default TableContainer;
