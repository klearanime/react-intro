import React, { Component } from "react";

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      favoriteFoodList: [],
      favoriteFood: "",
    };
  }

  handleOnChange = (event) => {
    this.setState({
      favoriteFood: event.target.value,
    });
  };

  handleOnSubmit = (event) => {
    let newFavoriteFoodListArray = [
      ...this.state.favoriteFoodList,
      {
        id: this.state.favoriteFoodList.length + 1,
        food: this.state.favoriteFood, //this what we captured from the input
      },
    ];

    this.setState({
      favoriteFoodList: newFavoriteFoodListArray,
      favoriteFood: "",
    });
  };

  render() {
    return (
      // <div style={{ textAlign: "center", marginTop: 50 }}>
      <div style={style.divStyle}>
        <input
          type="text"
          name="favoriteFood"
          onChange={this.handleOnChange}
          value={this.state.favoriteFood}
        />
        <br />
        <button
          onClick={this.handleOnSubmit}
          type="submit"
          style={style.buttonStyle}
        >
          Submit
        </button>
        <br />
        {/* {this.state.favoriteFoodList.map((item, index) => {
          return <div key={index}>{item.food}</div>;
        })} */}

        <br />
        <AppChild
          item1={"i am item 1"}
          isTrue={true}
          favoriteFoodList={this.state.favoriteFoodList}
        />
      </div>
    );
  }
}

function AppChild(props) {
  return (
    <div>
      This is from a Child component
      <br />
      Load data from the parent component
      <br />
      {props.favoriteFoodList.map((item, index) => {
        return <div key={index}>{item.food}</div>;
      })}
    </div>
  );
}

const style = {
  divStyle: {
    textAlign: "center",
    marginTop: 50,
  },
  buttonStyle: {
    width: 250,
    backgroundColor: "red",
  },
};
