import React, { Component } from 'react'
import './index.css'

export default class Footer extends Component {

  //全选todo的回调
  handleCheckAll=(e) => {
    this.props.checkAll(e.target.checked)
  }

  //清除所有已完成的回调
  handleDeleteAllDone=() => {
    if(window.confirm("你确定要删除所有已完成事件嘛？")) this.props.deleteAllDone()
  }

  render() {
    const {todos} = this.props
    //已完成的个数
    const doneCount = todos.reduce((pre,todo) => { return pre + (todo.done ? 1:0) },0)
    //总数
    const number = todos.length
    return (
        <div className="todo-footer">
            <label>
                <input type="checkbox" onChange={this.handleCheckAll} checked={doneCount===number && number!==0  ? true:false}/>
            </label>
            <span>
                <span>已完成{doneCount}</span> / 全部{number}
            </span>
            <button onClick={this.handleDeleteAllDone} className="btn btn-danger">清除已完成任务</button>
        </div>
    )
  }
}
