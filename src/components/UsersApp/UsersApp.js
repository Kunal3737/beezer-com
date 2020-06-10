import React, { Component } from 'react';
import usersAppAction from "../../actions/usersAppAction";
import { connect } from "react-redux";
import styles from '../UsersApp/UsersApp.module.css';

class UsersApp extends Component {
    componentDidMount() {
        this.props.usersAppAction(this.props.match.params.accountId);
    }
    
    render() {
        return (
            <div>
                {this.props.usersAppData.apps ? 
                (this.props.usersAppData.apps && Object.entries(this.props.usersAppData.apps).map((items) => (
                    // console.log(items)
                    <div key={items[0]}>
                    <h1><u>
                    Hi {this.props.location.state},Welcome to {items[0]}</u></h1>
                    <h1 className={styles.appTitle}>App Title : {items[1].title}
                    </h1>
                    </div>
                ))): <h1>{this.props.usersAppError}</h1>}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    usersAppData: state.usersAppData,
    usersAppError: state.usersAppError
  });
  
  const mapDispatchToProps = (dispatch) => ({
    usersAppAction: (usersAccountId) => dispatch(usersAppAction(usersAccountId)),
  });
  
  export default connect(mapStateToProps, mapDispatchToProps)(UsersApp);
  