import React, { Component } from 'react';

export default class ReactHero extends Component {
  render() {
    return(
      <div className="react-hero">
        <div className="hero-image">
          <img src="https://www.myblogposter.com/wp-content/uploads/2021/03/305-3056765_40-blog-wallpapers-pictures-per-blog.jpg"></img>
        </div>
        <div className="hero-text">
          <h1>Jordan Pagkalinawan</h1>
        <p>Student journalist.</p>
        </div>
      </div>
    )
  }
}
