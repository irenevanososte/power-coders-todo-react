import trashCan from '../assets/images/trash-can.svg'
import styles from './Todo.module.css'
import checkboxNotChecked from '../assets/images/checkbox-not-checked.svg'
import checkbox from '../assets/images/checkbox-checked.svg'
import { Link } from 'react-router-dom'

function Todo({ todo, deleteTodo, checkButton }) {

  const deleteButtonHandler = (e) => {
   deleteTodo(todo.id)
  }

  const checkButtonHandler = ({ id, done }) => {
    checkButton({ id: todo.id, done: !todo.done })
  }

  

  const icon = todo.done ? checkbox : checkboxNotChecked

  return <li className={styles.todo_item}>
    <span className={styles.content}>
      <Link>
      <img src={icon} alt= "" onClick={checkButtonHandler} className={styles.icon} />
      </Link>
      {todo.content}
    </span> 
    <button className={styles.trashButton} onClick={deleteButtonHandler}>
      <img src={trashCan} alt="Borrar" className={styles.trashCan} />
    </button>
  </li>
}

export default Todo
