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

    return (
      <div style={{
        position: 'absolute',
        left: 1500,
        top: 300,
        zIndex:100
      }}>
        <h1>Hello {this.state.name}</h1>
        <h2>Your Id is {this.state.id}</h2>
      </div>
    )
  }

  componentDidMount() {
    const me = this;
    me.timer=setTimeout(() => { this.setState({ name: 'Jaeha', id: '222' }) }, 1000)
  }
  componentWillUnmount() {
    clearTimeout(this.timer)
  }
}
export default Tab;















