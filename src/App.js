import React, { Component } from 'react';
import ResizeManager from './component/common/ResizeManager';
import logo from './logo.svg';
import './App.css';
import { HashRouter, Route, Link } from 'react-router-dom';
import Homepage from './model/homepage/homepage';
import List from './model/list/list';
import Product from './model/product/product';
class App extends Component {
  render() {
    const width = 1920;
    const height = 1080;
    const mode = window.resizeManagerMode || ResizeManager.MODE_DEBUG;
    return (
      <HashRouter>
        <div className="App">
          <ResizeManager fullWidth={width} fullHeight={height} mode={mode} />
          <Route exact path={'/'} />
          <div className={'list'}></div>
          <div className={'wrap'}>
            <div className={'main'}>
              <ul className={'nav-wrap'}>
                <Link to='/homepage'>
                  <li>首页</li>
                </Link>
                <Link to='/list'>
                  <li>1</li>
                </Link>
                <Link to='/product'>
                  <li>2</li>
                </Link>
              </ul>
            </div>
            <div className={'content'}>
              <Route exact path='/homepage' component={Homepage} />
              <Route path='/list' component={List} />
              <Route path='/product' component={Product} />
            </div>
          </div>
        </div>
      </HashRouter>
    );
  }
}
export default App;
