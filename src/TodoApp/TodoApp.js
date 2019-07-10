import React, { Component } from 'react'
import styled,{css} from 'styled-components'
import EachTask from './EachTask';
export class TodoApp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            todoItems:[  {id: 1, subject: "Welcome Task", status: true}]
             
        }
    }
    
    render() {
        const TodoHeader=styled.div`
        margin:auto;
        width:50%;
        border:1px solid grey;
        padding:10px;

        
        `
        const TodoWrapperBox=styled.div`
      
        `

        const TodoArea=styled.div`
        margin:auto;
        width:50%;
        border:1px solid grey;
        padding:10px;
        `

        const TodoAdd=styled.div`
        margin:auto;
        width:50%;
        padding:10px;
        border:1px solid grey;
        `

        const TodoNavigate=styled.div`
        margin:auto;
        width:50%;
        padding:10px;
        border:1px solid grey;
        `
        return (
            <div>
            
               <TodoWrapperBox>
                    <TodoHeader>
                        Todo List
                    </TodoHeader>
                    <TodoArea>
                    {this.state.todoItems.map((eachItem,index)=>{
                        return <EachTask key={index} subject={eachItem.subject} status={eachItem.status}/>
                    })}
                    </TodoArea>
                    <TodoAdd><input type='text' width='100%' height='100%'/></TodoAdd>

                    <TodoNavigate>

                        <button>All</button>
                        <button>Active</button>
                      <button>Completed</button>
                    </TodoNavigate>

               </TodoWrapperBox>
            </div>
        )
    }
}

export default TodoApp
