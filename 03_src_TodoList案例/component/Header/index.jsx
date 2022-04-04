import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid'
import './index.css'

export default class Header extends Component {
  //对props进行限制
  static propTypes ={
    addTodo:PropTypes.func.isRequired
  }
  //键盘输入的回调
  handleKeyUp = (e) => {
    //解构赋值获取keyCode,target
    const {keyCode, target} = e
    //判断按键是否是回车
    if (keyCode!==13) return
    //添加的todo名字不能为空
    if(target.value.trim()===''){
      alert('输入不能为空')
      return
    }
    //准备一个todoObj
    const todoObj = {id:nanoid(),name:target.value,done:false}
    //传递对象到APP
    this.props.addTodo(todoObj)
    target.value=''
  }

  render() {
    return (
        <div className="todo-header">
            <input onKeyUp={this.handleKeyUp} type="text" placeholder="请输入你的任务名称，按回车键确认" />
        </div>
    )
  }
}
