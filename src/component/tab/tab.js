import React from 'react';
class Tab extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      count:0
    }
  }
  render() {
    return (
      <div style={{
        position: 'absolute',
        left: 360,
        top:500
      }}>
        <div style={{
          width: 400,
          height: 200,
          border:'1px solid #fff'
        }}>
          <button onClick={this.handle.bind(this)}>点击</button>
        </div>
      </div>
    )
  }
  handle() {
    this.setState((prevState,tet) => ({ count: prevState.count+1  }), () => {
      console.log(this.state)
    })

  }
  componentDidMount() {

  }
}
export default Tab;















