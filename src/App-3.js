import React, { Component } from "react";
import PropTypes from "prop-types";

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
class ParentMovie extends Component {
  state = {
    movieListArray: [],
    movieValue: "",
  };

  handleOnChange = (event) => {
    this.setState({
      movieValue: event.target.value,
    });
  };
  
// 2. create an array called movieListArray
  handleOnClick = (event) => {
    let movieListArray = [
      ...this.state.movieListArray,
      {
        id: this.state.movieListArray.length + 1,
        movie: this.state.movieValue, //this what we captured from the input
      },
    ];
    
    this.setState({
      movieListArray: movieListArray,
      // 3. create a state called movieValue
      movieValue: "",
    });
  };
  
  render() {
    return (
      // 4. create an input to capture user value
      <div style={style.divStyle}>
        <input
          type="text"
          name="movieValue"
          value={this.state.movieValue}
          onChange={this.handleOnChange}
          />
        <br />
        <button onClick={this.handleOnClick}>Submit</button>

        <br />
        <p>From the State</p>
        {this.state.movieListArray.map((item, index) => {
// 5. create a submit button to submit user value
          return <div key={index}>{item.movie}</div>;
        })}

        <br />
        <p>From the child and props</p>
        <ChildMovie
          name={"123"}
          number={123}
          movieListArray={this.state.movieListArray}
        />
      </div>
    );
  }
}

// 6. create a child component and pass the movieListArray to the child componenet
function ChildMovie(props) {
  console.log(props);
  return (
    <div>
      {" "}
      {props.movieListArray.map((item, index) => {
        return <div key={index}>{item.movie}</div>;
      })}
    </div>
  );
}

// 7. render the movieArrayList in the child component
ChildMovie.propTypes = {
  movieListArray: PropTypes.array,
  name: PropTypes.string,
  number: PropTypes.number,
};

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

