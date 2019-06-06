import React from 'react';

import Input from './input';
class PercentageApp extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  render() {
    return (
      <div style={{
        position: 'absolute',
        left: 400,
        top: 100
      }}>
        <Input />
       
      </div>
    )
  }
}
export default PercentageApp;
