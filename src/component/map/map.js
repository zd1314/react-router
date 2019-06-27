import React from 'react';
import './map.css';
const AMap = window.AMap;

class Map extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div style={{
        width:1920,
        height:1080
      }}>
        <div id={'container'} >

        </div>
      </div>
    )
  }
  componentDidMount() {
    let map = new AMap.Map('container', {
      resizeEnable: true,
      center: [116.505348, 39.795592],
      zoom: 5,
      pitch: 50,
      rotation:116,
      viewMode: '3D',
      mapStyle: 'amap://styles/ef433b3e7889677c0ca7a260dfa8a9c5'
    });
    map.AmbientLight = new AMap.Lights.AmbientLight([0, 1, 14],2.2);
    map.on('indoor_create', function () {
      map.indoorMap.showIndoorMap('B000A856LJ', 5);
    })
  }
}
export default Map;
