import styles from "./TodosList.module.css";

const TodosList = ({
  todos,
  markAsDoneHandler,
  deleteSingleTodo,
  markAllAsDoneHandler,
  deleteAllTodos,
  undoDeletedTasks,
  isDisabled,
}) => {
  return (
    <div className={` container ${styles.todosListContainer}`}>
      {todos.map((todo) => (
        <div key={todo.taskId} className={`${styles.todoItemDiv}`}>
          <div className={styles.todoItem}>
            <span>{todo.taskName}</span>
            <span>{todo.dueDate}</span>
          </div>
          <div className={styles.btnContainer}>
            <button
              className={`btn btn-success`}
              onClick={() => markAsDoneHandler(todo.taskId)}
            >
              Mark as Done
            </button>
            <button
              className={`btn btn-danger`}
              onClick={() => deleteSingleTodo(todo.taskId)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
      <div className={styles.nextBtnContainer}>
        <button className="btn btn-primary" onClick={markAllAsDoneHandler}>
          Mark All As Done
        </button>
        <button className="btn btn-danger" onClick={deleteAllTodos}>
          Delete All Tasks
        </button>
        <button
          className="btn btn-warning"
          onClick={undoDeletedTasks}
          disabled={isDisabled}
        >
          Undo Delete All Tasks
        </button>
      </div>
    </div>
  );
};

export default TodosList;
