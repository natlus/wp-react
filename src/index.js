import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import { injectGlobal } from 'styled-components';

import BlogContainer from './containers/BlogContainer';
import SingleContainer from './containers/SingleContainer';
import Navigation from './components/Navigation';
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
    <Navigation />
    <Route path="/blog" component={BlogContainer} />
    <Route path="/post/:slug" component={SingleContainer} />
    <Route path="/category/:slug" component={BlogContainer} />
    <Route path="/tag/:slug" component={BlogContainer} />
    <Route path="*" component={NotFound} />
  </Router>,
  document.getElementById('root')
);
