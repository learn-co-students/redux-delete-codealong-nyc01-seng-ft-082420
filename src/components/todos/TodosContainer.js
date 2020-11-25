import React, { Component } from 'react';
import { connect } from 'react-redux'
import Todo from './Todo'

class TodosContainer extends Component {

  renderTodos = () => this.props.todos.map((todo, id) => <Todo delete={this.props.delete} Todo key={id} text={todo} />)

  render() {
    return(
      <div>
        {this.renderTodos()}
      </div>
    );
  }
};

const msp = state => {
  return {
    todos: state.todos
  }
}

const mdp = dispatch => {
  return {
    delete: todo => dispatch({type: 'DELETE_TODO', payload: todo })
  }
}

export default connect(msp, mdp)(TodosContainer);
