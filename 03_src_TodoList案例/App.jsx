import React, { Component } from 'react'
import Header from './component/Header'
import List from './component/List'
import Footer from './component/Footer'
import './App.css'

export default class App extends Component {

	//初始化状态
	state ={todos:[
		{id:"001",name:'吃饭',done:true},
		{id:"002",name:'睡觉',done:false},
		{id:"003",name:'学习',done:true}
	]}

	//addTodo用于添加一个todo，接受的参数是todo对象
	addTodo = (todoObj) => {
		//获取原todos
		const { todos } = this.state
		//追加一个todo
		const newTodos = [todoObj,...todos]
		//更新状态
		this.setState({todos:newTodos})
	}

	//更新todo的done状态
	changeTodo = (id,done) => {
		//获取状态中的todos
		const {todos} = this.state
		const newTodos = todos.map((todoObj) => {
			if(todoObj.id===id) return {...todoObj,done:done}
			else return todoObj
		})
		this.setState({todos:newTodos})
	}

	//deleteTodo用于删除todo一个todo对象
	deleteTodo=(id) => {
		//获取原来的todos
		const {todos}=this.state
		//删除指定id的todo
		const newTodos = todos.filter((todo) => {
			return todo.id !== id
		})
		this.setState({todos:newTodos})
	}

	//checkAll用于全选
	checkAll=(done) => {
		//获取原来todos
		const { todos } = this.state
		//加工数据
		const newTodos = todos.map((todo) => {
			return{...todo,done:done}
		})
		//更新状态
		this.setState({todos:newTodos})
	}
	
	//deleteAllDone用于清除所有已完成
	deleteAllDone=() => {
		//获取原来的todos
		const {todos} = this.state
		const newTodos = todos.filter((todo) => {
			return !todo.done //filter默认返回为真的数组，需求是todo.done==false
			//直接简写!todo.done
		})
		//更新
		this.setState({todos:newTodos})
	}

	render() {
		const {todos} = this.state
		return (
				<div className="todo-container">
					<div className="todo-wrap">
						<Header addTodo={this.addTodo}/>
						<List todos={todos} changeTodo={this.changeTodo} deleteTodo={this.deleteTodo}/>
						<Footer todos={todos} checkAll={this.checkAll} deleteAllDone={this.deleteAllDone}></Footer>
					</div>
				</div>
    )
  }
}
