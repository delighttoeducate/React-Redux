import React, { Component } from 'react'
import styled,{css} from 'styled-components'
class EachTask extends Component {
  
    handlerCheckbox=()=>{
        alert("hello");
    }

    render() {
        const Span=styled.span`
        text-decoration:${props=>props.taskStatus==='completed'?'line-through':'none'};
        `
        const Checkbox=styled.input`
        margin:auto;
        
        
        `

        return (
            <>
                <Checkbox type='checkbox' onClick={()=>this.handlerCheckbox()} /><Span taskStatus={this.props.status}>{this.props.subject}</Span>
            </>
        )
    }
}

export default EachTask
