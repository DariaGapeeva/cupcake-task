// import { usersApi } from "../API/api";

// const SET_USERS = 'SET_USERS';

const initialState = {
  rates: {
    RUB: 0,
    USD: 0,
    EUR: 0,
  },
};

const tableReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default tableReducer;
