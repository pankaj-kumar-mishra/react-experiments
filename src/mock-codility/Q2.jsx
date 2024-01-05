import cx from "classnames";
import { Component } from "react";

export default class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      todos: [],
    };
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  };

  handleAddTodo = () => {
    const text = this.state.value.trim();
    if (text) {
      this.setState((prev) => ({
        todos: [...prev.todos, { id: Date.now(), text, isDone: false }],
        value: "",
      }));
    }
  };

  handleToggleDoneTodo = (id) => {
    const newTodos = this.state.todos.map((item) => {
      if (item.id === id) {
        return { ...item, isDone: !item.isDone };
      } else {
        return { ...item };
      }
    });
    console.log(newTodos);
    this.setState({ todos: newTodos });
  };

  getRemainingTask = () => this.state.todos.filter((item) => !item.isDone);

  render() {
    const { value, todos } = this.state;
    return (
      <>
        <div>
          <h2>Todo List</h2>
          <div>
            <input type="text" value={value} onChange={this.handleChange} />
            <button className={cx("add")} onClick={this.handleAddTodo}>
              Add
            </button>
          </div>
          <p className={cx("task-counter")}>
            {this.getRemainingTask().length} remaining out of {todos.length}{" "}
            tasks
          </p>
          <ul>
            {todos.map((item) => (
              <li
                className={cx(`${item.isDone ? "is-done" : ""}`)}
                onClick={() => this.handleToggleDoneTodo(item.id)}
              >
                {item.text}
              </li>
            ))}
          </ul>
        </div>
        <style>
          {`
            .add{
                margin-left: 5px;
            }
            .is-done {
                text-decoration: line-through;
            }
          `}
        </style>
      </>
    );
  }
}
