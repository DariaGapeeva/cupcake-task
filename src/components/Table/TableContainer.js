import React, { useEffect } from "react";
import Table from "./Table";
import { useDispatch, useSelector } from "react-redux";
import { setValuesFirstAC, setValuesPollAC } from "./../../redux/tableReducer";

const TableContainer = () => {
  useEffect(() => {
    dispatch(setValuesFirstAC("first", 1));
    dispatch(setValuesFirstAC("second", 2));
    dispatch(setValuesFirstAC("third", 3));
  }, []);

  useEffect(() => {
    dispatch(setValuesPollAC("first/poll", 1));
    dispatch(setValuesPollAC("second/poll", 2));
    dispatch(setValuesPollAC("third/poll", 3));
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
