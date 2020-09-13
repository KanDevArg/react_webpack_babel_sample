import React, { Component } from "react";

class MainContent extends Component {
  constructor(props) {
    super();

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    console.log("Component did mount");

    this.setState = {
      text1: "",
      text2: "this is gonna be a new value",
    };
  }

  handleChange(event) {
    console.log("handle change!!");

    const { value } = event.target;

    this.setState(() => {
      return {
        text1: value,
        text2: "new Value",
      };
    });
  }

  render() {
    console.log("render");
    return (
      <form>
        <input
          type="text"
          value={this.props.text1}
          onChange={this.handleChange}
        />
        <br />
        <br />
        <input
          type="text"
          value={this.props.text2}
          onChange={this.handleChange}
        />
      </form>
    );
  }
}

MainContent.defaultProps = { text1: "0", text2: "This is the default value" };

export default MainContent;
