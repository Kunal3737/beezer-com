const axios = require("axios");
// import axios from 'axios';

const appRatingAction = (accountId, accountsKey, ratingValue) => (dispatch) => {
    axios
      .put(`https://beezer-com.firebaseio.com/accounts/${accountId}/apps/${accountsKey}/rating.json`, {
          rating: ratingValue
      })
      .then((response) => {
        // console.log(response.data);
        dispatch({
          type: "APPS_RATING",
          payload: response.data
        });
      })
      .catch((error) => {
        console.log(error);
        dispatch({
            type: "APPS_RATING_ERROR",
            payload: error.message
          });
  
      });
};

export default appRatingAction;
