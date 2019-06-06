import React from 'react';
let timer = null;
let color = ['#FFDAC8', 'aqua', '#CCFF99', '#F0BBFF','#D8BFD8']
class MusicDramp extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
       data:[1,2,3,4,5]
    }
  }
  _inChangeHeight(i) {
    const me = this;
    me.refs['musicRef' + i].style.height = 160 - (i * 10) + 'px';
    me.ani(me.refs['musicRef' + i])
  }
  _outChangeHeight(i) {
    const me = this;
    me.refs['musicRef' + i].style.height = 200 + 'px';
    clearInterval(me.timer)

  }
  //动画
  ani(obj) {
  this.timer = setInterval(function () {    //设置定时器
    let speed = 5;
    if (parseInt(obj.style.height) < 120) {     //如果传入的对象的宽小于700px
      obj.style.height = parseInt(obj.style.height) + speed + 'px';   //让当前宽加speed
      speed += 5;    //每执行一次定时器，speed+10
    } else {
      return;
    }
  }, 20);
  }
  //点击小球
  _clickDramp(i) {
    const me = this;
      me.refs['musicRef' + i].style.height = Math.floor(Math.random() * (250 -180 + 1) + 180) + 'px'
  }
  render() {
    return (
      <div style={{
        width:600
      }}>
        <ul className='dramp-wrap' >
          {
            this.state.data.map((s, i) => {
              return <li key={'dramp' + i} ref={'musicRef'+i} style={{
                background: color[i],
                height: 200,
                verticalAlign: 'bottom',
              }}
                onMouseOver={this._inChangeHeight.bind(this, i)} onMouseOut={this._outChangeHeight.bind(this, i)}
              >
                <p></p>
              </li>
            })
          }
        </ul>
      </div>
    )
  }
  componentDidMount() {
    const me = this;
    me.timer;
  }
}
export default MusicDramp
