import React from 'react';
class Tab extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      name: 'zhanfgsan',
      id:123
    }
  }
  render() {
    setTimeout(() => { this.setState({ name: 'Jaeha', id: '222' }) }, 1000)
    return (
      <div style={{
        position: 'absolute',
        left: 1500,
        top:300
      }}>
        <h1>Hello {this.state.name}</h1>
        <h2>Your Id is {this.state.id}</h2>
      </div>
    )
  }

  componentDidMount() {

  }
}
export default Tab;















