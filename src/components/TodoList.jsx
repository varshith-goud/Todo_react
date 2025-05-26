import Todoitem from "./TodoItem";
import styles from "./TodoList.module.css";

function TodoList({todos,setTodos}) {
  const sortedTodos = todos.slice().sort((a, b) =>Number(a.done)-Number(b.done)) 
  return (
    <div className={styles.listContainer}>
       {sortedTodos.map((item) => (
        <Todoitem key={item.name}   item={item} todos={todos}
        setTodos={setTodos}/>
      ))}
    </div>
  )
}

export default TodoList
