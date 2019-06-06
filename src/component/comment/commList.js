import React from 'react';
import PropTypes from 'prop-types';
import CommCon from './commCon';
class CommList extends React.Component {
  static propTypes = {
    comments: PropTypes.array,//检测数组
    onDeleteComment: PropTypes.func//检测方法
  }
  constructor(props) {
    super(props)
    this.state = {}
  }
  handleDelete(index) {
    if (this.props.onDeleteComment) {
      this.props.onDeleteComment(index)
    }
  }
  render() {
    return (
      <div>
        {this.props.comments.map((item, i) =>
          <CommCon comment={item} key={i} onDeleteComment={this.handleDelete.bind(this,i)}/>
        )}
      </div>
    )
  }
}
export default CommList;
