import React from 'react';

import Single from '../../components/Single';
import NotFound from '../../components/NotFound';
import Loading from '../../components/Loading';

import { loadSinglePost } from '../../helpers/request';

class Post extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      post: {},
    }
  }

  componentDidMount() {
    loadSinglePost(this.props.params.slug)
      .then((post) => {
        this.setState({
          isLoading: false,
          post: post[0],
        });

        this.title = post[0].title;
      });
  }

  render() {
    return this.state.isLoading
    ? <Loading />
    : !this.state.post
      ? <NotFound />
      : <Single post={this.state.post} />
  }

}

export default Post;
