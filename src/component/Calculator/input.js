import React from 'react';
import PercentageShower from './PercentageShower';
class Input extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      number: 0
    }
  }
  handleChange(e) {
    this.setState({
      number: e.target.value
    })
  }
  render() {
    return (
      <div>
        <input onChange={this.handleChange.bind(this)} />
        <PercentageShower showPercent={this.state.number}/>
      </div>
    )
  }
}
export default Input;
