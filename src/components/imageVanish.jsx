import React, { Component } from "react";
class ImageGo extends Component {
  state = {
    img: (
      <img
        src="https://i.picsum.photos/id/502/200/200.jpg?hmac=c6mcZ5mcmjadIeDKaJClpvPz9R9-X9q6c0Un-n73Kv4"
        alt="200px pic"
        key="pic"
      />
    ),
  };
  style = {
    width: 200,
    height: 200,
  };
  render() {
    return (
      <div className="d-flex justify-content-center">
        <div style={this.style}>{this.state.img}</div>
        <button
          className="btn btn-primary mt-5"
          onClick={this.makeItGo}
          style={{ height: 50 }}
        >
          Make Pic Disapear
        </button>
      </div>
    );
  }
  makeItGo = () => {
    if (this.state.img !== "") {
      this.setState({ img: "" });
    } else {
      this.setState({
        img: (
          <img
            src="https://i.picsum.photos/id/502/200/200.jpg?hmac=c6mcZ5mcmjadIeDKaJClpvPz9R9-X9q6c0Un-n73Kv4"
            alt="200px pic"
            key="pic"
          />
        ),
      });
    }
  };

  //   makeItGo = () => {
  //     if (this.state.img !== "") {
  //       this.state.img == "";
  //       return this.state.img;
  //     } else {
  //       this.state.img ===
  //       (
  //         <img
  //           src="https://i.picsum.photos/id/502/200/200.jpg?hmac=c6mcZ5mcmjadIeDKaJClpvPz9R9-X9q6c0Un-n73Kv4"
  //           alt="200px pic"
  //           key="pic"
  //         />
  //       );
  //     }
  //     this.setState({ img: this.state.img });
}

export default ImageGo;
