const TABLE_SET_VALUES = "TABLE_SET_VALUES";
export const TABLE_SET_VALUES_FIRST = "TABLE_SET_VALUES_FIRST";
export const TABLE_SET_VALUES_POLL = "TABLE_SET_VALUES_POLL";

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

export const setValuesAC = (id, rates) => ({
  type: TABLE_SET_VALUES,
  id,
  rates,
});

export const setValuesFirstAC = (address, id) => {
  return {
    type: TABLE_SET_VALUES_FIRST,
    address,
    id,
  };
};

export const setValuesPollAC = (address, id) => {
  return {
    type: TABLE_SET_VALUES_POLL,
    address,
    id,
  };
};

export default tableReducer;
