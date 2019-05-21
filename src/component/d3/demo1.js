import React from 'react';
import * as d3 from 'd3';
class Demo1 extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div ref={'lef'}></div>
    )
  }
  componentDidMount() {
    let me = this;
    let width = 500, height = 300;
    let svg = d3.select(me.refs.lef).append('svg')
      .attr('width', width)
      .attr('height', height)
      .append('rect')
      .attr('x1', 20)
      .attr('y1', 40)
      .attr('x2', 20)
      .attr('y2', 40)
  }
}
export default Demo1;