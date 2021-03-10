import React, { Component } from "react";

import ParentMovie from "./app-4/ParentMovie";

export default class App extends Component {
  render() {
    return (
      <div>
        <ParentMovie />
      </div>
    );
  }
}

// 1. create a state
// 2. create an array called movieListArray
// 3. create a state called movieValue
// 4. create an input to capture user value
// 5. create a submit button to submit user value
// 6. create a child component and pass the movieListArray to the child componenet
// 7. render the movieArrayList in the child component
