import React from 'react';
import Message from '../message/message';
import { Route} from 'react-router-dom';
class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return <div>
      <Route path={`${this.props.match.url}/messages/:id`} component={Message} />
    </div>
  }
}
export default Product;
