import React from 'react';
import Lunbo from '../../component/lunbo/lunbo';
import Tab from '../../component/tab/tab';
import Map from '../../component/map/map'
class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <div >
        {/* <Lunbo /> */}
        <Tab />
         <Map />
      </div>
    )
  }
}
export default HomePage;
