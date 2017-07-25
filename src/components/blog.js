import BlogList from './blogList';
import Footer from './footer';
import React, { Component } from 'react';

export default class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  componentWillMount() {
    document.body.style.backgroundImage = "url('../public/img/beach.jpg')";
    document.body.style.fontFamily = 'Quicksand';
    document.body.style.backgroundAttachment = 'fixed';
    document.body.style.backgroundSize = 'calc(90vw + 90vh)';
    document.body.style.backgroundPosition = 'center';
  }

  render() {
    return (
      <div>
        <div className="blog">
          <header>
            <p className="blog-header">Ariel Salem</p>
            <p className="blog-description"> Lover of Tech, Programming, and all things JavaScript </p>
          </header>
          <hr />
        </div>
        <br />
        <div>
          <BlogList blogs={this.props.blogs} />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    )
  }
}

