import React, { Component } from 'react'
import styled,{css} from 'styled-components'
class EachTask extends Component {
    constructor(props) {
        super(props)
        this.handlerCheckbox=this.handlerCheckbox.bind(this)
    }
    
    handlerCheckbox=()=>{
        alert("hello");
    }

    render() {
        const Span=styled.span`
        text-decoration:${props=>props.taskStatus?'line-through':'none'};
        `
        const Checkbox=styled.input`
        margin:auto;
        
        
        `

        return (
            <>
                <Checkbox type='checkbox' onClick={()=>this.handlerCheckbox()} /><Span taskStatus={true}>{this.props.subject}</Span>
            </>
        )
    }
}

export default EachTask
