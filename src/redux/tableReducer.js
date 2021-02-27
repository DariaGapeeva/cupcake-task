import { api } from "./../API/api";

const TABLE_SET_VALUES = "TABLE_SET_VALUES";

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
};

const tableReducer = (state = initialState, action) => {
  switch (action.type) {
    case TABLE_SET_VALUES: {
      return {
        ...state,
        markets: state.markets.map((item) =>
          item.id === action.id
            ? {
                ...item,
                rates: {
                  ...item.rates,
                  "RUB/CUPCAKE": action.rates["RUB/CUPCAKE"],
                  "USD/CUPCAKE": action.rates["USD/CUPCAKE"],
                  "EUR/CUPCAKE": action.rates["EUR/CUPCAKE"],
                  "RUB/USD": action.rates["RUB/USD"],
                  "RUB/EUR": action.rates["RUB/EUR"],
                  "EUR/USD": action.rates["EUR/USD"],
                },
                timestamp: action.timestamp,
              }
            : item
        ),
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
