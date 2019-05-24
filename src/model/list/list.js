import React from 'react';
import ClipPath from '../../component/clip-path/clipPath';
class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <div style={{
        position: 'relative'
      }}>
        < ClipPath />
      </div>
    )
  }
}
export default List;
