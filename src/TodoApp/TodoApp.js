import React, { Component } from "react";
import {
  TodoHeader,
  TodoAdd,
  TodoArea,
  TodoNavigate,
  TodoWrapperBox,
  Button
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
        { id: 6, subject: "Welcome Task6", status: "completed" },
      ],
      displayItems: []
    };
  }

  itemStatusChangeHandler = (id, status) => {
    // alert(`Item status changed invoked from child-->id-${id},status-${status} `);
    this.setState({
    
      displayItems:this.state.todoItems.map(eItem=>
        eItem.id===id?{...eItem,status:status}:eItem
      )
    },()=>{
      // console.log("%O",this.state.todoItems);
    })
  
  };

  componentDidMount() {
    // Onload display All Items
  
    this.setState({
      displayItems: this.state.todoItems
    });
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
