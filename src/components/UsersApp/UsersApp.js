import React, { Component } from "react";
import usersAppAction from "../../actions/usersAppAction";
import { connect } from "react-redux";
import styles from "../UsersApp/UsersApp.module.css";
// var Rating = require('react-rating');
import Rating from "react-rating";
import appRatingAction from '../../actions/appRatingAction';
class UsersApp extends Component {
  componentDidMount() {
    this.props.usersAppAction(this.props.match.params.accountId);
  }

  ratingHandler = (e, accountsKey) => {
      console.log(this.props.match.params.accountId);
      this.props.appRatingAction(this.props.match.params.accountId, accountsKey, e);
    //   https://beezer-com.firebaseio.com/accounts/${this.props.match.params.accountId}/apps/${accountsKey}.json
  }

  render() {
    return (
      <div>
        {this.props.usersAppData.apps ? (
          this.props.usersAppData.apps &&
          Object.entries(this.props.usersAppData.apps).map((items) => (
            <div key={items[0]}>
              <h1>
                <u>
                  Hi {this.props.location.state},Welcome to {items[0]}
                </u>
              </h1>
              <h1 className={styles.appTitle}>App Title : {items[1].title}</h1>
              <div>
                <Rating
                  initialRating={0}
                  onClick={(e, accountsKey) => {
                    this.ratingHandler(e, items[0])
                  }}
                />
              </div>
            </div>
          ))
        ) : (
          <h1>{this.props.usersAppError}</h1>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  usersAppData: state.usersAppData,
  usersAppError: state.usersAppError,
});

const mapDispatchToProps = (dispatch) => ({
  usersAppAction: (usersAccountId) => dispatch(usersAppAction(usersAccountId)),
  appRatingAction: (accountId, accountsKey, ratingValue) => dispatch(appRatingAction(accountId, accountsKey, ratingValue))
});

export default connect(mapStateToProps, mapDispatchToProps)(UsersApp);
