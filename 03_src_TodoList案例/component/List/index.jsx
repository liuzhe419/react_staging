import React, { Component } from 'react'
import Item from '../Item'
import PropTypes from 'prop-types'
import './index.css'

export default class List extends Component {

  //对props进行限制
  static propTypes ={
    changeTodo:PropTypes.func.isRequired,
    todos:PropTypes.array.isRequired,
    deleteTodo:PropTypes.func.isRequired,
  }

  render() {
    const {todos, changeTodo, deleteTodo} = this.props
    return (
        <ul className="todo-main">
            {
              todos.map((todo) => { 
                return <Item key={todo.id} {...todo} changeTodo={changeTodo} deleteTodo={deleteTodo}></Item>
               })
            }
        </ul>
    )
  }
}
