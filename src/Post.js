import React, { Component, createElement } from 'react';
import { createClient } from 'contentful';
import Helmet from 'react-helmet';
import marksy from 'marksy';

import './Post.css';

const getMarkup = field => {
  if (!field) return null;
  const compile = marksy({
    createElement,
    elements: {}
  });
  return compile(field).tree;
};

class Post extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {
        title : "MY APP"
      }
    };
  }

  render() {
    let title;
    let content;

    if (this.state.data) {
      title = this.state.data.title;
      content = getMarkup(this.state.data.content);
    }

    return (
      <div className="post">
        <Helmet title={title} />
        <h1>{title}</h1>
        {content}
      </div>
    );
  }
}

export default Post;
