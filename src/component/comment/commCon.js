import React from 'react';
import PropTypes from 'prop-types';
class CommCon extends React.Component {
  static propTypes = {
    comment: PropTypes.object.isRequired,
    onDeleteComment: PropTypes.func,
    index: PropTypes.number
  }
  constructor(props) {
    super(props)
    this.state = {
      timeString: ''
    }
  }
  //时间更新判断
  _upDateTime() {
    const comment = this.props.comment;
    const duration = (Date.now() - comment.createdTime) / 1000;
    this.setState({
      timeString: duration > 60 ? `${Math.round(duration / 60)} 分钟前` : `${Math.round(Math.max(duration, 1))}秒前`
    })
  }

  _displayClick() {
    this._delete.style.display = 'block'
  }
  //点击删除按钮
  handleDeleteClick() {
    if (this.props.onDeleteComment) {
      this.props.onDeleteComment(this.props.index)
    }
  }

  componentDidMount() {
    this._upDateTime()
    this.timer = setInterval(() => {
      this._upDateTime()
    }, 5000)
  }

  render() {
    return (
      <div className='comment' onClick={this._displayClick.bind(this)}>
        <div className='comment-user'>
          <span>{this.props.comment.userName} </span>：
        </div>
        <p>{this.props.comment.content}</p>
        <span className='comment-createdtime'>
          {this.state.timeString}
        </span>
        <span className={'comment-delete'} ref={ref => { this._delete = ref }} style={{
          display: 'none'
        }} onClick={this.handleDeleteClick.bind(this)}>删除</span>
      </div>
    )
  }
  componentWillUnmount() {
    clearInterval(this.timer)
  }
}
export default CommCon;
