import React, { Component } from 'react';
import './lunbo.css';

/**
 * 产品优势
 * */

class Lunbo extends Component {
  constructor() {
    super();
    this.state = {
      index: 0
    };
    this.classes = ['left', 'center', 'right'];
  }

  render() {
    const classes = this.classes;
    return (
      <div style={{ position: 'absolute', left: 320, top: 80 }}>
        {this.changeClass(0)}
      </div>
    )
  }

  changeClass() {
    let index = this.state.index;
    index %= 3;
    const classes = this.classes;
    return (
      <ul className={'carouselList'} ref={'formList'}>
        {
          classes.map((t, i) => {
            let num = i - index;
            if (num == -1) {
              num = 2;
            } else if (num == -2) {
              num = 1;
            }
            return <li className={classes[num]} key={i}></li>
          })
        }
      </ul>
    )
  }

  componentDidMount() {
    const me = this;
    let index = this.state.index;
    me.timer = setInterval(() => {
      index += 1;
      me.setState({
        index
      });
    }, 2000)
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }
}

export default Lunbo;