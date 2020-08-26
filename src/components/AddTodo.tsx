import React from 'react'
import Component from '../models/FluxComponent'

class AddTodo extends Component {
  
  inputText = React.createRef<HTMLInputElement>()

  toDoList = this.softBind(Component.shared.toDoList)
  nextToDoId = this.softBind(Component.shared.nextToDoId)

  handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault()
    
    if (!(this.inputText.current?.value.trim())) {
      return
    }

    // this.toDoList.value.push(
    this.toDoList.value = [
      ...this.toDoList.value,
      {
        id: this.nextToDoId.value++,
        text: this.inputText.current.value,
        completed: false
      }
    ]
    // )   

    this.inputText.current.value = ''
  }

  render () {
    return (
      <div>
        <form onSubmit={ this.handleSubmit }>
          <input ref={ this.inputText } />
          <button type="submit">
            Add Todo
          </button>
        </form>
      </div>
    )
  }
}

export default AddTodo
