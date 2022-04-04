import React, { Component } from 'react'
import './index.css'

export default class Item extends Component {

  //勾选、取消勾选todo的回调
  handleCheck=(id) => {
    return (e) => {
      this.props.changeTodo(id,e.target.checked)
    }
  }

  //删除一个todo的回调
  handleDelete=(id) => {
    if(window.confirm("你确定要删除吗？")){
      this.props.deleteTodo(id)
    }
  }

  render() {
    const {id, name, done } = this.props
    return (
        <li>
            <label>
                <input type="checkbox" checked={done} onChange={this.handleCheck(id)}/>
                <span>{name}</span>
            </label>
            <button onClick={() => this.handleDelete(id)}>删除</button>
        </li>
    )
  }
}
