// Write your code here
import './index.css'

const TodoItem = props => {
  const {todoDetails, onDelete} = props
  const {id, title} = todoDetails
  const deleteButtonClicked = () => {
    onDelete(id)
  }
  return (
    <li className="todo_item_container">
      <p className="title_name">{title}</p>
      <button
        type="button"
        className="delete_button"
        onClick={deleteButtonClicked}
      >
        Delete
      </button>
    </li>
  )
}

export default TodoItem
