import React, { Component } from "react";
import {
  TodoHeader,
  TodoAddBox,
  TodoArea,
  TodoNavigate,
  TodoWrapperBox,
  Button,
  TodoAddInput,
  TodoErrLog,
  TodoErrSpan
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
      addItemTxt: "",
      errMsg: "",
      activeBgColor: "teal",
      completedBgColor: "blue",
      allBgColor: "blue"
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

  handlerAddClick = event => {
    event.preventDefault();
    if (this.state.addItemTxt.length > 0) {
      this.setState({
        errMsg: ""
      });
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
    } else {
      this.setState({
        errMsg: "Task name shouldn't be empty!"
      });
    }
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

  handlerClick = e => {
    this.setState({
      errMsg: ""
    });
    e === "completed" &&
      this.setState({
        activeBgColor: "blue",
        completedBgColor: "teal",
        allBgColor: "blue"
      });
    e === "active" &&
      this.setState({
        activeBgColor: "teal",
        completedBgColor: "blue",
        allBgColor: "blue"
      });
    e === "all" &&
      this.setState({
        activeBgColor: "blue",
        completedBgColor: "blue",
        allBgColor: "teal"
      });

    let tmpArr = [];
    this.state.todoItems.filter(item => {
      if (item.status === e) {
        tmpArr.push(item);
      }
      return null;
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

  render() {
    this.filterTodoItems = e => {};
    return (
      <div>
        <TodoWrapperBox>
          <TodoHeader>Todo List</TodoHeader>
          <TodoErrLog>
            <TodoErrSpan>{this.state.errMsg}</TodoErrSpan>
          </TodoErrLog>
          <TodoArea>
            {this.state.displayItems.map(eachItem => {
              return (
                <React.Fragment key={eachItem.id}>
                  <EachTask
                    subject={eachItem.subject}
                    status={eachItem.status}
                    id={eachItem.id}
                    statusChanger={this.itemStatusChangeHandler.bind(this)}
                    checkedCheck={
                      eachItem.status === "completed" ? true : false
                    }
                  />
                  <br />
                </React.Fragment>
              );
            })}
          </TodoArea>
          <TodoNavigate>
            <Button
              bgColor={this.state.activeBgColor}
              txtColor="white"
              onClick={() => this.handlerClick("active")}
            >
              Active
            </Button>
            <Button
              bgColor={this.state.completedBgColor}
              txtColor="white"
              onClick={() => this.handlerClick("completed")}
            >
              Completed
            </Button>
            <Button
              bgColor={this.state.allBgColor}
              txtColor="white"
              onClick={() => this.handlerClick("all")}
            >
              All
            </Button>
          </TodoNavigate>
          <form onSubmit={() => this.handlerAddClick()}>
            <TodoAddBox>
              <TodoAddInput
                onChange={this.handlerAddInput}
                value={this.state.addItemTxt}
                placeholder="Add new task to Checklist and press <ENTER>"
              />

              <Button
                location="margin:0 auto"
                bgColor="blue"
                txtColor="white"
                onClick={this.handlerAddClick}
              >
                Add
              </Button>
            </TodoAddBox>
          </form>
        </TodoWrapperBox>
      </div>
    );
  }
}
export default TodoApp;
