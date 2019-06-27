import React from 'react';
import * as d3 from 'd3';
class Demo1 extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div style={{
        position: 'absolute',
        left: 800,
        top: 300
      }} ref={ref=>this._refs=ref}></div>
    )
  }
  componentDidMount() {
    let me = this;
    let width = 500, height = 300;
    me.svg = d3.select(this._refs).append('svg')
      .attr('width', width)
      .attr('height', height)
      .append('path')
      .attr('d', ' M 18,3 L 46,3 L 46, 40 L 61, 40 L 32, 68 L 3, 40 L 18, 40Z ')
      .attr('stroke', '#ccc')
      // .attr('stroke-width',5)
      .attr('fill', 'red')



  }
}
export default Demo1;
