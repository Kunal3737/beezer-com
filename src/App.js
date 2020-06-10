import React, { Component } from "react";
import "./App.css";
// import rootAction from "./actions/rootAction";
// import { connect } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './components/Home/Home';
import UsersApp from './components/UsersApp/UsersApp';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  // simpleAction = (event) => {
  //   this.props.rootAction();
  // };
  // {/* <div className="App">
  //       <p>{this.props.result}</p>
  //       <button onClick={this.simpleAction}>Test redux action</button>
  //     </div> */}

  render() {
    // console.log(this.props.result);
    return (
      <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          {/* <Route path="/pro-organiser-application" component={Home} /> */}
          <Route path="/:accountId" component={UsersApp} />
          {/* <Route path="/:id/:boardName" component={Boards} /> */}
          <Route render={() => <h2>404 Page Not Found</h2>} />
        </Switch>
      </div>
    </Router>
    );
  }
}



// const mapStateToProps = (state) => ({
//   result: state.result,
// });

// const mapDispatchToProps = (dispatch) => ({
//   rootAction: () => dispatch(rootAction()),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(App);
export default App;
