import React from 'react'

class Todo extends React.Component{
  render(){
    return (
      <div>
        <span>{this.props.text}</span>
        <button onClick={()=>this.props.delete(this.props.text)}>DELETE</button>
      </div>
    )
  }
}

export default Todo;
