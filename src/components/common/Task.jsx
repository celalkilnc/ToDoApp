import React from "react";
import "../styles/task.css";
import { AnimatedDiv } from "../animated/AnimatedDiv";

function Task({ text }) {
  return (
    <AnimatedDiv>
      <div className="task">
        <p className="taskText">{text}</p>
        <div className="buttons">
            <button className="editButton">edit</button>
          <button className="delButton">del</button>
        </div>
      </div>
    </AnimatedDiv>
  );
}

export { Task };
