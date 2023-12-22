// Write your code here

import './index.css'

const TodoItem = props => {
  const {todoList, onDeleteTodo} = props
  const {id, title} = todoList

  const deleteTodo = () => {
    onDeleteTodo(id)
  }
  return (
    <li>
      <p>{title}</p>
      <button type="button" className="delete-btn" onClick={deleteTodo}>
        Delete
      </button>
    </li>
  )
}
export default TodoItem
