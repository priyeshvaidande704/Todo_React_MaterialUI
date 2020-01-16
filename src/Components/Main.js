import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import Paper from "material-ui/Paper";
import uuid from "uuid";
import { grey700 } from "material-ui/styles/colors";

import AddTodo from "./AddTodo";
import TodoList from "./TodoList";

class Main extends Component {
  state = {
    todos: [],
    open: false
  };

  handleClick = todo => {
    this.setState({
      todos: [
        {
          id: uuid(),
          title: todo,
          completed: false
        },
        ...this.state.todos
      ]
    });
  };

  handleRemove = id => {
    const finalTodos = this.state.todos.filter(todo => {
      return todo.id !== id;
    });
    this.setState({
      todos: finalTodos,
      open: true
    });
  };

  handleCheck = id => {
    const finalTodos = this.state.todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    this.setState({
      todos: finalTodos
    });
  };

  async componentDidMount() {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await response.json();
    this.setState({ todos: data });
  }

  render() {
    return (
      <MuiThemeProvider>
        <Paper
          style={{
            paddingBottom: "20px",
            marginTop: 100,
            marginBottom: 100,
            marginRight: 20,
            marginLeft: 40
          }}
        >
          <div
            style={{
              display: "flex"
            }}
          >
            <div style={{ marginLeft: "44%" }}>
              <h1 style={{ textAlign: "center", color: grey700 }}>Todo List</h1>
            </div>
          </div>

          <div style={{ marginLeft: "5%" }}>
            <AddTodo handleClick={this.handleClick} />
          </div>

          <TodoList
            todos={this.state.todos}
            handleRemove={this.handleRemove}
            handleCheck={this.handleCheck}
          />

          <br />
        </Paper>
      </MuiThemeProvider>
    );
  }
}

export default Main;
