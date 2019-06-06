import React from 'react';
import Lunbo from '../../component/lunbo/lunbo';
import Tab from '../../component/tab/tab';
import Map from '../../component/map/map';

import Music from '../../component/music/music';
import ClipPath from '../../component/clip-path/clipPath';
class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <div >
        {/* <Lunbo /> */}
        {/* <Tab /> */}
        <Map />

        <Music />
        < ClipPath />
      </div>
    )
  }
}
export default HomePage;
