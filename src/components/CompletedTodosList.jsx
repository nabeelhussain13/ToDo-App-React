import styles from "./CompletedTodosList.module.css";

const CompletedTodosList = ({
  completedTodos,
  clearAllHandler,
  undoClearAll,
  undoClearAllIsDisabled,
}) => {
  return (
    <div className={`${styles.completedTodosContainer}`}>
      <h2 className={`${styles.heading}`}>Completed Todos</h2>
      {completedTodos.map((todo) => (
        <div className={`${styles.taskList}`} key={todo.taskId}>
          <span>{todo.taskName}</span>
        </div>
      ))}
      <div className={`${styles.completedBtnContainer}`}>
        <button className="btn btn-danger" onClick={clearAllHandler}>
          Clear All
        </button>
        <button
          className="btn btn-warning"
          onClick={undoClearAll}
          disabled={undoClearAllIsDisabled}
        >
          Undo Clear All
        </button>
      </div>
    </div>
  );
};

export default CompletedTodosList;
