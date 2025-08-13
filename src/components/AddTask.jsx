import styles from "./AddTask.module.css";

const AddTask = ({
  newTask,
  taskDueDate,
  onChangeTaskHandler,
  onChangeDateHandler,
  addTask,
}) => {
  return (
    <div className={styles.addTaskDiv}>
      <input
        className={`${styles.addTaskDisplay}`}
        type="text"
        placeholder="Enter Your Task Here"
        value={newTask}
        onChange={onChangeTaskHandler}
      />
      <input
        className={`${styles.addTaskDate}`}
        type="date"
        value={taskDueDate}
        onChange={onChangeDateHandler}
      />
      <button
        className={` btn btn-success ${styles.addTaskBtn}`}
        onClick={addTask}
      >
        Add
      </button>
    </div>
  );
};

export default AddTask;
