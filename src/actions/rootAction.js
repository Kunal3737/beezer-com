const rootAction = () => (dispatch) => {
  dispatch({
    type: "SIMPLE_ACTION",
    payload: "result_of_simple_action",
  });
};

export default rootAction;