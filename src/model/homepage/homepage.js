import React from 'react';
import Lunbo from '../../component/lunbo/lunbo';
class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <div>
        <Lunbo />
      </div>
    )
  }
}
export default HomePage;