import React from "react";
import PropTypes from "prop-types";
import Button from "./common/Button";

import "./Child1-ul.css";

function Child1UL(props) {
  return (
    <ul>
      {props.todoList.map((item) => {
        let strikeThroughClass = `${
          item.isDone ? "strike-through-isDone" : ""
        }`;

        return (
          <React.Fragment key={item.id}>
            {/* <li style={{ textDecoration: item.isDone ? "line-through" : "" }}> */}
            {/* <li className={`${item.isDone ? "strike-through-isDone" : ""}`}> */}
            {/* <li style={{ textDecoration: item.isDone && "line-through" }}> */}
            {/* <li className={strikeThroughClass}>{item.todo}</li>{" "} */}

            {item.isEditToggle ? (
              <input
                value={item.todo}
                style={{ marginRight: 10 }}
                onChange={props.handleToggleOnChange}
              />
            ) : (
              <li className={strikeThroughClass}>{item.todo}</li>
            )}

            <Button
              propsClassName={"btn btn-success button-style"}
              propsName={"Edit"}
              propsOnClick={() => props.handleEditToggle(item.id)}
            />
            <Button
              propsClassName={"btn btn-warning button-style"}
              propsOnClick={() => props.handleIsDone(item.id)}
              propsName={"Done"}
            />
            <Button
              propsClassName={"btn btn-danger button-style"}
              propsOnClick={() => props.handleDeleteByID(item.id)}
              propsName={"Delete"}
            />
            {/* <button
              className="btn btn-warning button-style"
              onClick={() => props.handleIsDone(item.id)}
            >
              Done
            </button>
            <button
              className="btn btn-danger button-style"
              onClick={() => props.handleDeleteByID(item.id)}
              //onClick={this.handleDeleteByID(item.id)}
            >
              Delete
            </button> */}
            <br />
          </React.Fragment>
        );
      })}
    </ul>
  );
}

Child1UL.propTypes = {
  todoList: PropTypes.array.isRequired,
  handleDeleteByID: PropTypes.func.isRequired,
  handleIsDone: PropTypes.func.isRequired,
};

export default Child1UL;
