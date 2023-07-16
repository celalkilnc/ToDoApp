import React, { useEffect } from "react";
import "../styles/HomePage.css";
import Task from "../components";

function HomePage() {
  
  useEffect(() => {
    
  }, [])
  

  return (
    <div className="HomePage">
      <div className="ListBorder">
        <div className="CardHeader">
          <h2 className="Title">To Do List</h2>
        </div>
        <div className="CardBody">
          <Task text = {"Test I"}/>
          <Task text={"Test II"}/>
          <Task text={"Test III"}/>
          <Task text={"Test IV"}/>
          <Task text={"Test VI"}/>
          <Task text={"Test VII"}/>
          <Task text={"Test VIII"}/>
          <Task text={"Test IX"}/>
          <Task text={"Test X"}/> 
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
