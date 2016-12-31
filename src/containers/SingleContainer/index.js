import React from 'react';

import Single from '../../components/Single';
import NotFound from '../../components/NotFound';
import Loading from '../../components/Loading';

import { loadPostBySlug } from '../../helpers/request';

class SingleContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      post: {}
    }
  }

  componentDidMount() {
    loadPostBySlug(this.props.params.slug)
      .then((post) => {
        this.setState({
          isLoading: false,
          post: post[0]
        });
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

export default SingleContainer;
