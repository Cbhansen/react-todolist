import React, {Component} from 'react';

class Todo extends React.Component {
    render() {
        // Pull in all props
        let {todo,removeTodo} = this.props
        return (
            <li>{todo} <span><button onClick={removeTodo}>x</button></span></li>
        )
    }
}

export default Todo;