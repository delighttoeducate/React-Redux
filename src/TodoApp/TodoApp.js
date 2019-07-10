import React, { Component } from "react";
import styled, { css } from "styled-components";
import EachTask from "./EachTask";
export class TodoApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todoItems: [
        { id: 1, subject: "Welcome Task1", status: "active" },
        { id: 2, subject: "Welcome Task2", status: "completed" },
        { id: 3, subject: "Welcome Task3", status: "active" },
        { id: 4, subject: "Welcome Task4", status: "completed" },
        { id: 5, subject: "Welcome Task5", status: "active" }
      ],
      displayItems: []
    };
  }

  componentDidMount() {
    // Onload display All Items

    this.setState({
      displayItems: this.state.todoItems
    });
  }
  render() {
    // Styled Componets
    const TodoHeader = styled.div`
      margin: auto;
      margin-top: 50px;
      width: 50%;
      border: 1px solid grey;
      padding: 10px;
      text-align: center;
      background-color: blue;
      font-weight: bold;
      color: white;
    `;
    const Button = styled.button`
      width: 95px;
      height: 36px;
      background-color: blue;
      color: white;
      font-weight: bold;
      border: 1px solid grey;
      margin: auto;
    `;
    const TodoWrapperBox = styled.div``;

    const TodoArea = styled.div`
      margin: auto;
      margin-top: 10px;
      width: 50%;
      border: 1px solid grey;
      padding: 10px;
    `;

    const TodoAdd = styled.div`
      margin: auto;
      width: 50%;
      padding: 10px;
      border: 1px solid grey;
    `;

    const TodoNavigate = styled.div`
      margin: auto;
      width: 50%;
      padding: 10px;
      border: 1px solid grey;
      display: flex;
      justify-content: space-between;
    `;

    // Handlers

    
    this.handlerClick = e => {
      let tmpArr = [];

      this.state.todoItems.filter(item => {
        if (item.status === e) {
          tmpArr.push(item);
        }
      });
      if (e === "all") {
        tmpArr = this.state.todoItems;
      }
      this.setState(
        {
          displayItems: tmpArr
        },
        () => {
        //   console.log("State object evt: %O", this.state.displayItems);
        }
      );
    };

    this.filterTodoItems = e => {};
    return (
      <div>
        <TodoWrapperBox>
          <TodoHeader>Todo List</TodoHeader>
          <TodoArea>
            {this.state.displayItems.map(eachItem => {
              return (
                <div>
                  <EachTask
                    key={eachItem.id}
                    subject={eachItem.subject}
                    status={eachItem.status}
                  />
                  <br />
                </div>
              );
            })}
          </TodoArea>
          <TodoAdd>
            <input type="text" width="100%" height="100%" />
          </TodoAdd>

          <TodoNavigate>
            <Button location="left" onClick={() => this.handlerClick("all")}>
              All
            </Button>
            <Button
              location="margin:0 auto"
              onClick={() => this.handlerClick("active")}
            >
              Active
            </Button>
            <Button
              location="right"
              onClick={() => this.handlerClick("completed")}
            >
              Completed
            </Button>
          </TodoNavigate>
        </TodoWrapperBox>
      </div>
    );
  }
}

export default TodoApp;
