import React, { useState } from "react";

import Button from "../../UI/Button/Button";
import "./CourseInput.css";

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      /* trim is for ruling out blanks(trims excess blanks) and this line means that we can't add empty in the app*/
      setIsValid(false);
      return; /* It stops when you return, so won't execute nothing if it is blank */
    }
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`form-control ${!isValid ? "invalid" : "" }`}>  {/* as the className is dynamic we can add and take styles from/to it; ``Because we can inject a dynamic value in this with  and this can be any js expression} */}
        <label /* style={{ color: !isValid ? "red" : "black" }} */>Course Goal</label>
        <input
          /* style={{
            border: !isValid ? "dotted 1px red" : "black",
            background: !isValid ? "salmon" : "transparent",
          }}
          type="text" */
          onChange={goalInputChangeHandler}
        />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;

