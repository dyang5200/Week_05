import React, { Component } from "react";
class App extends Component {
  state = {
    newTodo: "",
    todos: [
      "Buy tea",
      "Buy boba",
      "Boil water",
      "Add boba",
      "Drain water",
      "Add tea"
    ]
  };

  render() {
    return (
      <div>
        <h1> How to make boba at home</h1>
        {this.state.todos.map(todo => (
          <li key={todo}> {todo}</li>
	  <textarea value={this.state.value} onChange={this.state.todo}
        ))}
      </div>
    );
  }
}

export default App;