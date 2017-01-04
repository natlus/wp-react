import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import { injectGlobal } from 'styled-components';

import BlogContainer from './containers/BlogContainer';
import Post from './containers/Post';
import Categories from './containers/Categories';
import Tags from './containers/Tags';
import NotFound from './components/NotFound';

// Global css
// eslint-disable-next-line
injectGlobal`
  html {
    box-sizing: border-box;
  }

  * {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    font: 16px/1.0 'Roboto';
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
    background: #fafafa;
  }
`;

ReactDOM.render(
  <Router history={browserHistory}>
    <Route name="Blog" path="/blog" component={BlogContainer}>
      <Route name="Post" path="post/:slug" component={Post} />
      <Route name="Category" path="category/:slug" component={Categories} />
      <Route name="Tag" path="tag/:slug" component={Tags} />
    </Route>
    <Route path="*" component={NotFound} />
  </Router>,
  document.getElementById('root')
);
