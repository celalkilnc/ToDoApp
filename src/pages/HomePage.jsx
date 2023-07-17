import React, { useEffect, useState } from "react";
import "../styles/HomePage.css";
import Task from "../components";

function HomePage() {
  const [tasks, setTasks] = useState(["Task I", "Task II","Task III","Task IV"]);

  const taskAddHandleClick = () => {
    setTasks((tasks) => [
      ...tasks,
      document.getElementById("AddTaskText").value,
    ]);
    sessionStorage.setItem("datas", tasks);
  };

  const taskDelHandleClick = element   => {
    setTasks(prevData => prevData.filter(item => item !== element));
  };

  return (
    <div className="HomePage">
      <div className="ListBorder">
        <div className="CardHeader">
          <h2 className="Title">To Do List</h2>
        </div>
        <div className="CardBody">
          {tasks?.map((x) => {
            return <Task text={x} del={taskDelHandleClick}/>;
          })}
        </div>
        <div className="AddItems">
          <input className="AddTaskText" id="AddTaskText"></input>
          <button
            className="AddTaskButton"
            onClick={() => {
              taskAddHandleClick();
            }}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
