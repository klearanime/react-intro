import React, { Component } from "react";
import axios from "axios";
import GifView from "./GifView";

//`https://api.giphy.com/v1/gifs/search?api_key=kUOV7JObAWL2CGRIBtTxqYp6q0uvgroU&q=hamster`;
export default class Gif extends Component {
  state = {
    isLoading: true,
    giphyArray: [],
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

  render() {
    const { giphyArray, isLoading } = this.state;

    return (
      <div>
        <GifView giphyArray={giphyArray} isLoading={isLoading} />
      </div>
    );
  }
}
