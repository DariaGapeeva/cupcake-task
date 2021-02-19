import { api } from "./../API/api";

const TABLE_SET_VALUES = "TABLE_SET_VALUES";
const TABLE_CHECK_ROW_VALUES = "TABLE_CHECK_ROW_VALUES";

const initialState = {
  markets: [
    {
      id: 1,
      name: "First",
      rates: {
        "RUB/CUPCAKE": 0,
        "USD/CUPCAKE": 0,
        "EUR/CUPCAKE": 0,
        "RUB/USD": 0,
        "RUB/EUR": 0,
        "EUR/USD": 0,
      },
      timestamp: 0,
    },

    {
      id: 2,
      name: "Second",
      rates: {
        "RUB/CUPCAKE": 0,
        "USD/CUPCAKE": 0,
        "EUR/CUPCAKE": 0,
        "RUB/USD": 0,
        "RUB/EUR": 0,
        "EUR/USD": 0,
      },
      timestamp: 0,
    },
    {
      id: 3,
      name: "Third",
      rates: {
        "RUB/CUPCAKE": 0,
        "USD/CUPCAKE": 0,
        "EUR/CUPCAKE": 0,
        "RUB/USD": 0,
        "RUB/EUR": 0,
        "EUR/USD": 0,
      },
      timestamp: 0,
    },
  ],
  maxValue: {
    "RUB/CUPCAKE": null,
    "USD/CUPCAKE": null,
    "EUR/CUPCAKE": null,
    "RUB/USD": null,
    "RUB/EUR": null,
    "EUR/USD": null,
  },
};

const tableReducer = (state = initialState, action) => {
  switch (action.type) {
    case TABLE_SET_VALUES: {
      return {
        ...state,
        markets: state.markets.map((item) =>
          item.id === action.id && action.timestamp > item.timestamp
            ? {
                ...item,
                rates: {
                  ...item.rates,
                  "RUB/CUPCAKE": Math.round(action.rates.RUB * 100) / 100,
                  "USD/CUPCAKE": Math.round(action.rates.USD * 100) / 100,
                  "EUR/CUPCAKE": Math.round(action.rates.EUR * 100) / 100,
                  "RUB/USD":
                    Math.round((action.rates.RUB * 100) / action.rates.USD) /
                    100,
                  "RUB/EUR":
                    Math.round((action.rates.RUB * 100) / action.rates.EUR) /
                    100,
                  "EUR/USD":
                    Math.round((action.rates.EUR * 100) / action.rates.USD) /
                    100,
                },
                timestamp: action.timestamp,
              }
            : item
        ),
      };
    }

    case TABLE_CHECK_ROW_VALUES: {
      const titles = Object.keys(state.maxValue);
      let arrays = titles.map((title) => {
        let array = [];
        for (let item of state.markets) {
          array.push(item.rates[title]);
        }
        return array;
      });

      let newArray = arrays.map((item) => {
        if (Math.min(...item) === Math.max(...item)) return null;
        return item.indexOf(Math.min(...item)) + 1;
      });

      return {
        ...state,
        maxValue: {
          "RUB/CUPCAKE": newArray[0],
          "USD/CUPCAKE": newArray[1],
          "EUR/CUPCAKE": newArray[2],
          "RUB/USD": newArray[3],
          "RUB/EUR": newArray[4],
          "EUR/USD": newArray[5],
        },
      };
    }

    default:
      return state;
  }
};

const setValuesAC = (id, rates, timestamp) => ({
  type: TABLE_SET_VALUES,
  id,
  rates,
  timestamp,
});

export const checkRowValuesAC = () => ({ type: TABLE_CHECK_ROW_VALUES });

export const setValuesThunk = (address, id) => {
  return async (dispatch) => {
    let response = await api.setRates(address);

    if (response.status == 502) {
      await dispatch(setValuesThunk(address, id));
    } else if (response.status != 200) {
      console.log("ошибка");
      await new Promise((resolve) => setTimeout(resolve, 1000));
      await dispatch(setValuesThunk(address, id));
    } else {
      dispatch(setValuesAC(id, response.data.rates, response.data.timestamp));
      await dispatch(setValuesThunk(address, id));
    }
  };
};

export default tableReducer;
