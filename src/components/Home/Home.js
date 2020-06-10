import React, { Component } from "react";
import styles from "../Home/Home.module.css";
import rootAction from "../../actions/rootAction";
import { connect } from "react-redux";

class Home extends Component {
  componentDidMount() {
    this.props.rootAction();
  }

  simpleAction = (event) => {
    this.props.rootAction();
  };

  appButtonHandler = (accountID, userName) => {
    this.props.history.push(`/${accountID}`, userName);
  };

  render() {
    return (
      <div className={styles.home}>
        <h1><u>List of Users</u></h1>
        {this.props.usersData ?
        <table className={styles.usersTable}>
          <thead>
            <tr>
              <th>Account ID</th>
              <th>Users Name</th>
              <th>Apps</th>
            </tr>
          </thead>
          <tbody>
              {this.props.usersData && Object.entries(this.props.usersData).map((items) => (
                <tr key={items[0]}>
                  <td>{items[1].account}</td>
                  <td>{items[1].name}</td>
                  <td>
                      <button
                      onClick={(accountID, userName) =>
                        this.appButtonHandler(items[1].account, items[1].name)
                      }
                    >
                      Visit my App
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
         : 
         <p>{this.props.usersError}</p>}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  usersData: state.usersData,
  usersError: state.usersError
});

const mapDispatchToProps = (dispatch) => ({
  rootAction: () => dispatch(rootAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
