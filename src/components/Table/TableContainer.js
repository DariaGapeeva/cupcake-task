import React, { useEffect } from "react";
import Table from "./Table";
import { useDispatch, useSelector } from "react-redux";
import {
  setValuesFirstThunk,
  setValuesThunk,
} from "./../../redux/tableReducer";

const TableContainer = (props) => {
  useEffect(() => {
    dispatch(setValuesFirstThunk("first", 1));
    dispatch(setValuesFirstThunk("second", 2));
    dispatch(setValuesFirstThunk("third", 3));
  }, []);

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

      let result;

      if (Math.min(...array) === Math.max(...array)) {
        result = array.map((item) => null);
      } else {
        result = array.map((item, index) =>
          item === Math.min(...array) ? index + 1 : null
        );
      }

      return result;
    });
    return value;
  });

  return <Table markets={markets} minValue={minValue} titles={titles} />;
};

export default TableContainer;
