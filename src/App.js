import React, { Component } from "react";
import "./App.css";
import rootAction from "./actions/rootAction";
import { connect } from "react-redux";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  simpleAction = (event) => {
    this.props.rootAction();
  };

  render() {
    // console.log(this.props.result);
    return (
      <div className="App">
        <p>{this.props.result}</p>
        <button onClick={this.simpleAction}>Test redux action</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  result: state.result,
});

const mapDispatchToProps = (dispatch) => ({
  rootAction: () => dispatch(rootAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
