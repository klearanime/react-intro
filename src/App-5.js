import React, { Component } from "react";

export default class App extends Component {
  state = {
    isTrue: false,
    name: "",
  };

  toggleButton = () => {
    // this.setState({
    //   isTrue: !this.state.isTrue,
    // });

    this.setState((prevState) => {
      //prevState = previousState
      return {
        isTrue: !prevState.isTrue,
        name: !prevState.isTrue ? "Mighty Hamster" : "Not Mighty Hamster",
      };
    });
  };

  render() {
    // let tempVar = "I am a false tempVar";
    // if (this.state.isTrue) {
    //   tempVar = "I am true tempVar";
    // }

    // return <div>{tempVar}</div>;

    return (
      <div style={{ background: this.state.isTrue ? "red" : "orange" }}>
        {/* {this.state.isTrue ? "I am a true tempvar" : "I am a false tempvar"} */}
        {/* {this.state.isTrue ? this.state.name : "I am a false tempvar"} */}
        <div>The toggle value is: {this.state.isTrue.toString()}</div>
        <div>
          <button onClick={this.toggleButton}>Toggle Me</button>
        </div>
        <div>
          {/* {this.state.isTrue ? (
            <span>{this.state.name}</span>
          ) : (
            <span>{this.state.name}</span>
          )} */}
          {this.state.name}
        </div>
      </div>
    );
  }
}
