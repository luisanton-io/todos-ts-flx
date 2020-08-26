import React from 'react'
import Component from '../models/FluxComponent'
import { Filter } from '../models/Filter'
import Todo from './Todo'

class VisibleTodoList extends Component {

  toDoList = this.hardBind(Component.shared.toDoList)
  filter = this.hardBind(Component.shared.filter)

  toggleTodo = (id: number) => {
    this.toDoList.value = 
    this.toDoList.value.map( toDo =>
      (toDo.id === id) 
      ? { ...toDo, completed: !toDo.completed } 
      : toDo
    )
  }

  render () {
    return (
      <ul>
        {
          this.toDoList.value.filter( toDo => {
            switch (this.filter.value) {
              case Filter.active:
                return toDo.completed === false
              case Filter.completed:
                return toDo.completed === true
              default: return true
            }
          }).map( toDo => 
            <Todo
              key={toDo.id}
              {...toDo}
              onClick={ () => this.toggleTodo(toDo.id)}
            />
          )
        }
      </ul>
    )
  }
}

export default VisibleTodoList