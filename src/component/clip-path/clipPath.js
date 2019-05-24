import React from 'react';
class ClipPath extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className={'picture-wrap'}
        style={{
          position: 'absolute',
          left: 30,
          top: 140,
          maxWidth: 640
        }}
      >

         <h1>web前端开发与图形学</h1>
        <div className="leftP">
          <p className="text">SPORTS</p>
        </div>
        <div className="topP">
          <p className="text ">TECHNOLOGY</p>
        </div>
        <div className="rightP">
          <p className="text ">FOOD</p>
        </div>
        <div className="bottomP">
          <p className="text ">NATURE</p>
        </div>

      </div>
    )
  }
}
export default ClipPath;

