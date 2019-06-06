import React from 'react';
import CommApp from '../../component/comment/commApp';
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
        <CommApp />
      </div>
    )
  }
}
export default List;
