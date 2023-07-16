import React from "react";
import "../styles/HomePage.css";
import Task from "../components";

function HomePage() {
  return (
    <div className="HomePage">
      <div className="ListBorder">
        <div className="CardHeader">
          <h2 className="Title">To Do List</h2>
        </div>
        <div className="CardBody">
          <Task text = {"Test I"}/>
          <Task text={"Test II"}/>
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task /> 
        </div>
        <div className="AddItems">
          <input className="AddTaskText"></input>
          <button className="AddTaskButton">Add</button>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
