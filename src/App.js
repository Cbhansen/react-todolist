import React, { Component } from 'react';
import './App.css';

// Import components
import Todo from './Todo';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: []
    }
  } // end constructor

  addTodo(e) {
    e.preventDefault();
    let todoInput = this.refs.todoInput.value;
    let newTodos = this.state.todos;

    newTodos.push(todoInput)
    this.setState({
      todos: newTodos
    })
    // Reset input val
    this.refs.todoInput.value = " ";

    // Set focus to input box
    this.refs.todoInput.focus();
  }

  removeTodo(id) {
    let todos = this.state.todos.filter((todo, index) => {
      return id !== index
    })
    this.setState({
      todos: todos
    })
}
  

  render() {
    return (
      <div className="App">
        <h1>React Todo</h1>
        <form onSubmit={this.addTodo.bind(this)}>
        <input type="text" placeholder="Enter new task" ref="todoInput"/>
        <button>Add</button>
        </form>
        <ul>
        <p>Todo count: {this.state.todos.length}</p>
          {
            this.state.todos.map((todo, index) => {
              return <Todo id={index} key={index} todo={todo} removeTodo={() => this.removeTodo(index)} />
            })
          }
        </ul>
      </div>
    );
  }
}

export default App;
