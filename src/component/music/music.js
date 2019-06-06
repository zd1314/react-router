import React from 'react';
import './music.css';
import MusicDramp from '../../component/music/music-dramp';
let color = ['orange', '#CCC', 'green','blue','pink']
class Music extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      data: ['LDROG', 'LNDROG', 'CDROG', 'RDGOR', 'RDROG'],
      index:''
    }
  }

  _popClick(i) {
    this.setState({
      index:i
    })
    this.refs.drampRef._clickDramp(i)
  }
  render() {
    return (
      <div style={{
        position: 'absolute',
        left: 60,
        top:0
      }}>
        <ul className={'music-wrap'}>
          {
            this.state.data.map((s, i) => {
              let h = null;
              if (i == 2) {
                h=80
              } else {
                h=100
              }
              return <li key={'music' + i} style={{
                textAlign: 'center',
                display:'flex'
              }}>
                <p style={{
                  width: 2,
                  height: h,
                  background: color[i],
                }}></p>
                <div  className={this.state.index===i?'active':''} onClick={this._popClick.bind(this,i)}>{s}</div>
              </li>
            })
          }
        </ul>
        <MusicDramp ref={'drampRef'}/>
      </div>
    )
  }
}
export default Music;
