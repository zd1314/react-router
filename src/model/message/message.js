import React from 'react';

class Message extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
   
    return <div style={{
      position: 'absolute',
      left:900
    }}>
      <h3>new messages</h3>
      <h3>{this.props.match.params.id}</h3>
    </div>
  }
}
export default Message;
