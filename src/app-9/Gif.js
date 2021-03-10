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

  getGiphyAPIFuncV1 = async (inputValue) => {
    try {
      let result = await axios.get(
        `https://api.giphy.com/v1/gifs/search?api_key=kUOV7JObAWL2CGRIBtTxqYp6q0uvgroU&q=${inputValue}&limit=6`
      );

      this.setState({
        giphyArray: result.data.data,
        isLoading: false,
      });
    } catch (e) {
      console.log(e);
    }
  };

  // getGiphyAPIFuncV2 = async () => {
  //   try {
  //     let result = await axios.get(
  //       `https://api.giphy.com/v1/gifs/search?api_key=kUOV7JObAWL2CGRIBtTxqYp6q0uvgroU&q=${this.state.inputValue}&limit=6`
  //     );

  //     this.setState({
  //       giphyArray: result.data.data,
  //       isLoading: false,
  //     });
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };

  componentDidMount() {
    this.getGiphyAPIFuncV1("hamster");
    // this.getGiphyAPIFuncV2();
  }

  handleOnChange = (event) => {
    this.setState({
      inputValue: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    //console.log(this.state.inputValue);
    this.getGiphyAPIFuncV1(this.state.inputValue);
    // this.getGiphyAPIFuncV2();
  };

  handleDeleteByID = (itemID) => {
    let filteredGiphyArray = this.state.giphyArray.filter(
      (item) => item.id !== itemID
    );

    this.setState({
      giphyArray: filteredGiphyArray,
    });

    // let filteredGiphyArray = this.state.giphyArray.filter((item) => {
    //   if (item.id !== itemID) {
    //     return item;
    //   }
    // });
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
        <GifView
          giphyArray={giphyArray}
          isLoading={isLoading}
          handleDeleteByID={this.handleDeleteByID}
        />
      </div>
    );
  }
}
