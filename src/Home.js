import React, { Component } from 'react';
import Helmet from 'react-helmet';
import PostLink from './PostLink';

class Home extends Component {
  state = {
    posts: [
      {
        title : "HEllo"
      },
      {
        title: 'world'
      }
    ]
  };

  render() {
    return (
      <div className="cards">
        <Helmet title="Contentful Static React" />
        {this.state.posts &&
          this.state.posts.map((post,index) => {
            return (
              <PostLink
                key={index}
                title={post.title}
              />
            );
          })}
      </div>
    );
  }
}

export default Home;
