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
      resizeEnable: true, //是否监控地图容器尺寸变化
      zoom: 11, //初始化地图层级
      center: [116.397428, 39.90923], //初始化地图中心点
      mapStyle: 'amap://styles/9a4a00a96613c1c76f89fbe89ba9fb77'
    });
  }
}
export default Map;
