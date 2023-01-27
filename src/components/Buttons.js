import React, { Component } from "react";
import { FaEnvelope, FaLinkedin } from "react-icons/fa";

class Buttons extends Component {
  render() {
    return (
      <>
        <FaEnvelope style={{ width: "40px", height: "40px", color: "#918E9B" }} />
        <FaLinkedin style={{ width: "40px", height: "40px", color: "#918E9B" }} />
      </>
    );
  }
}

export default Buttons;
