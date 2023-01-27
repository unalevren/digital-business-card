import React, { Component } from 'react';
import { FaTwitterSquare, FaGithubSquare } from 'react-icons/fa';

class Icons extends Component {
  render() {
    return (
    <div className='icon-container'>
      <a className="icon-link" href="https://twitter.com/_EvrenUnal/" target="_blank"><FaTwitterSquare style={{width: "40px", height: "40px", color: "#918E9B"}}/></a>
      <a className="icon-link" href="https://github.com/unalevren" target="_blank"><FaGithubSquare style={{width: "40px", height: "40px", color: "#918E9B"}} /></a>
    </div>
    ) 
  }
}

export default Icons;