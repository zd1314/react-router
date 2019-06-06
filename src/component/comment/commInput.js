import React from 'react';
import PropTypes from 'prop-types';
class CommInput extends React.Component {
  static propTypes = {
    onSubmit: PropTypes.func
  }
  constructor(props) {
    super(props)
    this.state = {
      userName: '',
      content: ''
    }
  }
  //onchage事件改变input --value值
  handleUsernameChange(e) {
    this.setState({
      userName: e.target.value
    })
  }

  handContentChange(e) {
    this.setState({
      content: e.target.value
    })
  }
  //点击发布
  handSubmit() {
    if (this.props.onSubmit) {
      this.props.onSubmit({
        userName:this.state.userName,
        content: this.state.content,
        createdTime:new Date()
      })
    }
    //通过 setState 清空用户输入的评论内容（但为了用户体验，保留输入的用户名）。
    this.setState({ content: '' })
  }
  componentDidMount() {
    //页面加载完成自动聚焦到评论输入框。
    this.refs.textarea.focus()

  }
  componentWillMount() {
    this._loadUsername()
  }
/*把用户名持久化，存放到浏览器的 LocalStorage 中。页面加载时会把用户名加载出来显示到输入框，用户就不需要重新输入用户名*/
  //LocalStorage 加载用户名并且 setState 到组件的 state.username 中在render的时候就可用户名了

  _loadUsername() {
    let userName = localStorage.getItem('userName')
    if (userName) {
      this.setState({
        userName: userName
      })
    }
  }
  _saveUsername(userName) {
    localStorage.setItem('userName', userName)//设置 LocalStorage 中的 username 字段
  }
  //用户名失去焦点在LocalStorage中保存用户名
  handleUsernameBlur(e) {
    const me = this;
    me._saveUsername(e.target.value)
  }

  render() {
    return (
      <div className='comment-input'>
        <div className='comment-field'>
          <span className='comment-field-name'>用户名：</span>
          <div className='comment-field-input'>
            <input value={this.state.userName}
              onBlur={this.handleUsernameBlur.bind(this)}
              onChange={this.handleUsernameChange.bind(this)}
            />
          </div>
        </div>
        <div className='comment-field'>
          <span className='comment-field-name'>评论内容：</span>
          <div className='comment-field-input'>
            <textarea value={this.state.content}
              ref={'textarea'}
              onChange={this.handContentChange.bind(this)}
            />
          </div>
        </div>
        <div className='comment-field-button'>
          <button onClick={this.handSubmit.bind(this)}>
            发布
            </button>
        </div>
      </div>
    )
  }
}
export default CommInput;
