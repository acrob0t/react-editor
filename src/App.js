import React, { Fragment, Component } from 'react';
import grapesjs from 'grapesjs'
import 'grapesjs/dist/css/grapes.min.css';
import 'grapesjs-preset-webpage/dist/grapesjs-preset-webpage.min.css';
import 'grapesjs/dist/grapes.min.js';
import 'grapesjs-preset-webpage/dist/grapesjs-preset-webpage.min.js';

class App extends Component {
  componentDidMount() {
    grapesjs.init({
      container: '#gjs',
      plugins: ['gjs-preset-webpage'],
    })
  }

  render() {
    return (
      <Fragment>
        <div id="gjs"></div>
      </Fragment>
    )
  }
}

export default App;
