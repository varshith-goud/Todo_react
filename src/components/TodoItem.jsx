import styles from "./TodoItem.module.css";

function TodoItem({ item, todos, setTodos }) {
  function handleDelete(item) {
    setTodos(todos.filter((todo) => todo !== item));
  }

  function handleClick(name) {
    const newArray=todos.map((todo) =>
      todo.name === name ? { ...todo, done: !todo.done } : todo
    );
  setTodos(newArray);
  }
 const isDone = item.done ? styles.completed : "";
  return (
    <div className={styles.items}>
      <div className={styles.itemName}>
        <span  className={isDone}
        onClick={() => handleClick(item.name)}>{item.name}</span>

        <span>
          <button
            onClick={() => handleDelete(item)}
            className={styles.deleteButton}
          >
            X
          </button>
        </span>
      </div>
      <hr className={styles.line} />
    </div>
  );
}

export default TodoItem;
