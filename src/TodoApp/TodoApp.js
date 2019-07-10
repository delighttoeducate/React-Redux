import React, { Component } from "react";
import {
  TodoHeader,
  TodoAddBox,
  TodoArea,
  TodoNavigate,
  TodoWrapperBox,
  Button,
  TodoAddInput
} from "./StyledComponets";
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
        { id: 5, subject: "Welcome Task5", status: "active" },
        { id: 6, subject: "Welcome Task6", status: "completed" }
      ],
      displayItems: [],
      addItemTxt: ""
    };
  }

  itemStatusChangeHandler = (id, status) => {
    // alert(`Item status changed invoked from child-->id-${id},status-${status} `);
    this.setState(
      {
        todoItems: this.state.todoItems.map(eItem =>
          eItem.id === id ? { ...eItem, status: status } : eItem
        )
      },
      () => {
        // console.log("%O",this.state.todoItems);
        this.setState({
          displayItems: this.state.todoItems
        });
      }
    );
  };

  handlerAddClick = () => {
    let newItem = {
      id: this.state.todoItems.length + 1,
      subject: this.state.addItemTxt,
      status: "active"
    };
    let newTodoList = [...this.state.todoItems, newItem];
    this.setState(
      {
        todoItems: newTodoList
      },
      () => {
        this.setState({
          displayItems: this.state.todoItems
        });
      }
    );
  };

  handlerAddInput = event => {
    this.setState({
      addItemTxt: event.target.value
    });
  };

  componentDidMount() {
    // Onload display Active Items
    this.handlerClick("active");
  }
  render() {
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
                    id={eachItem.id}
                    statusChanger={this.itemStatusChangeHandler.bind(this)}
                    checkedCheck={
                      eachItem.status === "completed" ? true : false
                    }
                  />
                  <br />
                </div>
              );
            })}
          </TodoArea>
          <TodoNavigate>
            <Button color="blue" onClick={() => this.handlerClick("active")}>
              Active
            </Button>
            <Button color="blue" onClick={() => this.handlerClick("completed")}>
              Completed
            </Button>
            <Button color="blue" onClick={() => this.handlerClick("all")}>
              All
            </Button>
          </TodoNavigate>
          <TodoAddBox>
            <TodoAddInput
              onChange={this.handlerAddInput}
              value={this.state.addItemTxt}
              placeholder="Add new task to Checklist"
            />

            <Button
              location="margin:0 auto"
              color="blue"
              onClick={() => this.handlerAddClick()}
            >
              Add
            </Button>
          </TodoAddBox>
        </TodoWrapperBox>
      </div>
    );
  }
}
export default TodoApp;
