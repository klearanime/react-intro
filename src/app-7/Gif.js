import React, { Component } from "react";
import axios from "axios";
import GifView from "./GifView";

//`https://api.giphy.com/v1/gifs/search?api_key=kUOV7JObAWL2CGRIBtTxqYp6q0uvgroU&q=hamster`;
export default class Gif extends Component {
  state = {
    isLoading: true,
    giphyArray: [],
    inputValue: "",
  };

  async componentDidMount() {
    try {
      let result = await axios.get(
        `https://api.giphy.com/v1/gifs/search?api_key=kUOV7JObAWL2CGRIBtTxqYp6q0uvgroU&q=hamster`
      );

      this.setState({
        giphyArray: result.data.data,
        isLoading: false,
      });
    } catch (e) {
      console.log(e);
    }
  }

  handleOnChange = (event) => {
    this.setState({
      inputValue: event.target.value,
    });
  };

  handleSubmit = async (event) => {
    event.preventDefault();

    try {
      let result = await axios.get(
        `https://api.giphy.com/v1/gifs/search?api_key=kUOV7JObAWL2CGRIBtTxqYp6q0uvgroU&q=${this.state.inputValue}`
      );

      this.setState({
        giphyArray: result.data.data,
        isLoading: false,
      });
    } catch (e) {
      console.log(e);
    }
  };

  render() {
    const { giphyArray, isLoading } = this.state;

    return (
      <div>
        <form style={{ textAlign: "center" }} onSubmit={this.handleSubmit}>
          <div className="container">
            <input
              type="text"
              name="inputValue"
              onChange={this.handleOnChange}
              className="form-control"
              value={this.state.inputValue}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Search
          </button>
        </form>
        <GifView giphyArray={giphyArray} isLoading={isLoading} />
      </div>
    );
  }
}
