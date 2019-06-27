import React from 'react';
import CommInput from './commInput';
import CommList from './commList';
import './common.css';
class CommApp extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      comments: []
    }
  }
  //点击发布
  handleSumbitComment(comment) {
    if (!comment) return;
    if (!comment.userName) return alert('请输入用户名')
    if (!comment.content) return alert('请输入评论内容')
    const comments = this.state.comments;
    comments.push(comment)
    this.setState({
      comments: this.state.comments
    })
    //本地存储
    this._saveComments(comments)

  }


  _loadComments() {
    let comments = localStorage.getItem(comments);
    if (comments) {
      comments = JSON.parse(comments);
      this.setState({ comments })
    }
  }
  _saveComments(comments) {
    localStorage.setItem('comments', JSON.stringify(comments))
  }

  //删除按钮
  handleDeleteComment(index) {
    const comments = this.state.comments;
    comments.splice(index, 1)
    this.setState({ comments })
    this._saveComments(comments)
  }

  componentDidMount() {
    this._loadComments()
    console.log(React.Children)

  }
  render() {
    return (
      <div style={{
        width: 500,
        border: '1px solid #f1f1f1',
        position: 'absolute',
        left: 30,
        top: 15,
        zIndex: 200,
        background: '#fff',
        padding: 20

      }}>
        <CommInput onSubmit={this.handleSumbitComment.bind(this)} />
        <CommList comments={this.state.comments} onDeleteComment={this.handleDeleteComment.bind(this)} />
      </div>
    )
  }
}
export default CommApp;
