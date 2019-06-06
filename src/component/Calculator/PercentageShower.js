import React from 'react';
class PercentageShow extends React.Component {
  render() {
    return (
      <div>
        {Number(this.props.showPercent).toFixed(2)}%
      </div>
    )
  }
}
export default PercentageShow;
