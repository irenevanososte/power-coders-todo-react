import trashCan from '../assets/images/trash-can.svg'
import styles from './Todo.module.css'

function Todo({ todo }) {
  return <li className={styles.todo_item}>
    <span className={styles.content}>{todo.content}</span> 
    <button className={styles.trashButton}>
      <img src={trashCan} alt="Borrar" className={styles.trashCan} />
    </button>
  </li>
}

export default Todo