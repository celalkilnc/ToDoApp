import React, { useState } from "react";
import "../styles/task.css";
import { AnimatedDiv } from "../animated/AnimatedDiv";

function Task({ text, del }) {
  const [isEnd, setIsEnd] = useState(false);
  const [isHover, setIsHover] = useState(false);

  const textHandleClick = () => {
    setIsEnd(!isEnd);
  };

  return (
    <AnimatedDiv>
      <div
        className="task"
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        <p
          className="taskText"
          onClick={textHandleClick}
          style={{ textDecoration: `${isEnd ? "line-through" : "none"}` }}
        >
          {text}
        </p>

        <div className="buttons">
          {isHover && (
            <AnimatedDiv>
              {/* <button className="editButton">edit</button> */}
              <button className="delButton" >
                del
              </button>
            </AnimatedDiv>
          )}
        </div>
      </div>
    </AnimatedDiv>
  );
}

export { Task };
