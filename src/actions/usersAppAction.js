const axios = require("axios");
// import axios from 'axios';

const usersAppAction = (usersAccountId) => (dispatch) => {
    axios
      .get(`https://beezer-com.firebaseio.com/accounts/${usersAccountId}.json`)
      .then((response) => {
        // console.log(response.data);
        dispatch({
          type: "USERS_APP_LIST",
          payload: response.data
        });
      })
      .catch((error) => {
        console.log(error);
        dispatch({
            type: "USERS_APP_ERROR",
            payload: error.message
          });
  
      });
};

export default usersAppAction;
