import { useState } from "react";
import styles from "./Form.module.css";
function Form({todos, setTodos}) {
    const [todo, setTodo] = useState({name: "",done: false});



    function handleSubmit(e) {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo({name: "",done: false});
  }
  return (
    
        <form className={styles.todoform} onSubmit={handleSubmit}>
            <div className={styles.todoinputcontainer}>
        <input className={styles.todoinput}
          onChange={(e) => setTodo({name:e.target.value,done  : false})}
          value={todo.name}
          type="text"
          placeholder="Add a new todo"
        />
        <button className={styles.todobtn}
         type="submit">Add </button>
          </div>
      </form>
   
  )
}

export default Form
