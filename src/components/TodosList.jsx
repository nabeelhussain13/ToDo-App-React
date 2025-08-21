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
    <div className={"${container text-center}"}>
      {todos.map((todo) => (
        <div key={todo.taskId} className={`row todoRow`}>
          <div className={" my-col col-4"}>{todo.taskName}</div>
          <div className={"my-col col-4"}>{todo.dueDate}</div>

          <div className="my-col col-2">
            <button
              className={`btn btn-success`}
              onClick={() => markAsDoneHandler(todo.taskId)}
            >
              Mark as Done
            </button>
          </div>
          <div className="my-col col-2">
            <button
              className={`btn btn-danger`}
              onClick={() => deleteSingleTodo(todo.taskId)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
      <div className={`row ${styles.btnContainer}`}>
        <div className="col-4">
          <button className="btn btn-primary" onClick={markAllAsDoneHandler}>
            Mark All As Done
          </button>
        </div>
        <div className="col-4">
          <button className="btn btn-danger" onClick={deleteAllTodos}>
            Delete All Tasks
          </button>
        </div>
        <div className="col-4">
          <button
            className="btn btn-secondary"
            onClick={undoDeletedTasks}
            disabled={isDisabled}
          >
            Undo Delete All Tasks
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodosList;
