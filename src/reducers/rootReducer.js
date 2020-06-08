const initialState = {
  result: null,
};

const rootReducer = (state = { ...initialState }, action) => {
  switch (action.type) {
    case "SIMPLE_ACTION":
      return {
        ...state,
        result: action.payload,
      };
    default:
      return state;
  }
};

export default rootReducer;
