import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Match } from 'react-router';
import { injectGlobal } from 'styled-components';

import BlogContainer from './containers/BlogContainer';
import SingleContainer from './containers/SingleContainer';
import Navigation from './components/Navigation';

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
  <BrowserRouter>
    <div>
      <Navigation />
      <Match pattern="/blog" component={BlogContainer} />
      <Match pattern="/blog/:page" component={BlogContainer} />
      <Match pattern="/post/:slug" component={SingleContainer} />
      <Match pattern="/category/:slug" component={BlogContainer} />
      <Match pattern="/tag/:slug" component={BlogContainer} />
    </div>
  </BrowserRouter>,
  document.getElementById('root')
);
