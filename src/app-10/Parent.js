import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";

import Child1UL from "./Child1-ul";
import Child2Form from "./Child2-form";

import "./Parent.css";

class Parent extends Component {
  state = {
    todoList: [
      {
        id: uuidv4(),
        todo: "walk the dog",
        isDone: false,
        isEditToggle: false,
        isButtonToggle: false,
      },
      {
        id: uuidv4(),
        todo: "buy milk",
        isDone: false,
        isEditToggle: false,
        isButtonToggle: false,
      },
      {
        id: uuidv4(),
        todo: "wash dishes",
        isDone: false,
        isEditToggle: false,
        isButtonToggle: false,
      },
    ],
    inputTodo: "",
  };

  handleSubmitTodo = (event) => {
    event.preventDefault();

    let newTodoArray = [
      ...this.state.todoList,
      {
        id: uuidv4(),
        todo: this.state.inputTodo,
        isDone: false,
        isEditToggle: false,
      },
    ];

    this.setState({
      todoList: newTodoArray,
      inputTodo: "",
    });
  };

  handleOnChange = (event) => {
    this.setState({
      inputTodo: event.target.value,
    });
  };

  handleDeleteByID = (id) => {
    console.log(id);

    let filteredTodoListArray = this.state.todoList.filter((item) => {
      if (item.id !== id) {
        item.isButtonToggle = false
        return item
    }
  });
    
    this.setState({
      todoList: filteredTodoListArray,
    });
  };

  handleIsDone = (id) => {
    let updatedTodoListArray = this.state.todoList.map((item) => {
      if (item.id === id) {
        item.isDone = !item.isDone;
      }
      return item;
    });

    this.setState({
      todoList: updatedTodoListArray,
    });
  };

  handleEditToggle = (id) => {
    let toggledTodoList = this.state.todoList.map((item) => {
      if (item.id === id) {
        item.isEditToggle = !item.isEditToggle;
      } 
      if (item.id !== id) {
        item.isButtonToggle = !item.isButtonToggle
        console.log(item)
      }
      return item;
    });
    this.setState({
      todoList: toggledTodoList,
    });
  };

  handleEditUpdateTodo = (id, newTodoItem) => {
    let updatedTodoItem = this.state.todoList.map((item) => {
      if(item.id === id) {
        item.todo = newTodoItem
      }
      return item
    })

    this.setState({
      todoList: updatedTodoItem,
    })
  };

  // handleDisabledButton = (id) => {
  //   let disabledButton = this.state.todoList.map((item) => {
  //     if(!item.id) {
  //       item.todo = false
  //     }
  //     return id
  //   })

  //   this.setState({
  //     todoList: disabledButton,
  //   })
  // }

  render() {
    return (
      <div className="parent-container">
        <Child2Form
          handleSubmitTodo={this.handleSubmitTodo}
          handleOnChange={this.handleOnChange}
          inputTodo={this.state.inputTodo}
        />
        <Child1UL
          todoList={this.state.todoList}
          handleDeleteByID={this.handleDeleteByID}
          handleIsDone={this.handleIsDone}
          handleEditToggle={this.handleEditToggle}
          handleEditUpdateTodo={this.handleEditUpdateTodo}
          // handleDisabledButton={this.handleDisabledButton}
        />
      </div>
    );
  }
}

export default Parent;
