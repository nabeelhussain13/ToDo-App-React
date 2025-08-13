import AppName from "./components/AppName";
import AddTask from "./components/AddTask";
import TodosList from "./components/TodosList";
import CompletedTodosList from "./components/CompletedTodosList";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./App.css";

const App = () => {
  const [newTask, setNewTask] = useState("");
  const [taskDueDate, setTaskDueDate] = useState("");
  const [todos, setTodos] = useState([]);
  const [completedTodos, setCompletedTodos] = useState([]);
  const [undoDeletedAllTasks, setUnndoDeletedAllTasks] = useState([]);
  const [isDisabled, setIsDisabled] = useState(true);
  const [undoClearAllTasks, setUndoClearAllTasks] = useState([]);
  const [undoClearAllIsDisabled, setUndoClearAllIsDisabled] = useState(true);

  const onChangeTaskHandler = (event) => {
    setNewTask(event.target.value);
  };

  const onChangeDateHandler = (event) => {
    setTaskDueDate(event.target.value);
  };

  const addTask = () => {
    setTodos([
      ...todos,
      {
        taskName: newTask,
        taskId: uuidv4(),
        dueDate: taskDueDate,
        isCompleted: false,
      },
    ]);
    setNewTask("");
    setTaskDueDate("");
  };

  const markAsDoneHandler = (id) => {
    setTodos((prevTodos) => {
      const completed = prevTodos.find((todo) => todo.taskId === id);
      if (!completed) return prevTodos;

      setCompletedTodos((prevCompleted) => {
        if (prevCompleted.some((t) => t.taskId === id)) return prevCompleted;
        return [...prevCompleted, { ...completed, isCompleted: true }];
      });

      return prevTodos.filter((todo) => todo.taskId !== id);
    });
  };

  const deleteSingleTodo = (id) => {
    setTodos(todos.filter((todo) => todo.taskId !== id));
  };

  const markAllAsDoneHandler = () => {
    setTodos((prevTodos) => {
      const updatedItems = prevTodos.map((todo) => ({
        ...todo,
        isCompleted: true,
      }));

      setCompletedTodos((prevCompleted) => {
        const newList = [...prevCompleted, ...updatedItems];
        const uniqueList = newList.filter(
          (todo, index, self) =>
            index === self.findIndex((t) => t.taskId === todo.taskId)
        );
        return uniqueList;
      });

      return [];
    });
  };

  const deleteAllTodos = () => {
    setUnndoDeletedAllTasks([...todos]);
    setTodos([]);
    setIsDisabled(false);
  };

  const undoDeletedTasks = () => {
    setTodos(undoDeletedAllTasks);
    setUnndoDeletedAllTasks([]);
    setIsDisabled(true);
  };

  const clearAllHandler = () => {
    setUndoClearAllTasks([...completedTodos]);
    setCompletedTodos([]);
    setUndoClearAllIsDisabled(false);
  };

  const undoClearAll = () => {
    setCompletedTodos([...undoClearAllTasks]);
    setUndoClearAllTasks([]);
    setUndoClearAllIsDisabled(true);
  };

  return (
    <div className={`container todoContainer`}>
      <AppName></AppName>
      <AddTask
        newTask={newTask}
        taskDueDate={taskDueDate}
        onChangeTaskHandler={onChangeTaskHandler}
        onChangeDateHandler={onChangeDateHandler}
        addTask={addTask}
      ></AddTask>
      <TodosList
        todos={todos}
        markAsDoneHandler={markAsDoneHandler}
        deleteSingleTodo={deleteSingleTodo}
        markAllAsDoneHandler={markAllAsDoneHandler}
        deleteAllTodos={deleteAllTodos}
        undoDeletedTasks={undoDeletedTasks}
        isDisabled={isDisabled}
      ></TodosList>
      <CompletedTodosList
        completedTodos={completedTodos}
        clearAllHandler={clearAllHandler}
        undoClearAll={undoClearAll}
        undoClearAllIsDisabled={undoClearAllIsDisabled}
      ></CompletedTodosList>
    </div>
  );
};
export default App;
