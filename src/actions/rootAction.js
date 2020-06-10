const axios = require("axios");
// import axios from 'axios';

const rootAction = () => (dispatch) => {
    axios
      .get(`https://beezer-com.firebaseio.com/users.json`)
      .then((response) => {
        dispatch({
          type: "USERS_LIST",
          payload: response.data,
        });
      })
      .catch((error) => {
        console.log(error.message);
        dispatch({
          type: "USERS_LIST_ERROR",
          payload: error.message,
        });
      });
};

export default rootAction;

// https://beezer-com.firebaseio.com/accounts.json