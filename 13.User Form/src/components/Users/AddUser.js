import React, { useState } from "react";
import styles from "./AddUser.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";

const AddUser = () => {
  const addUserHandler = (event) => {
    event.preventDefault();
  };
  const [username, setUsername] = useState("");
  const [userage, setUserage] = useState("");

  const nameInputHandler = (event) => {
    setUsername(event.target.value);
  };
  const ageInputHandler = (event) => {
    setUserage(event.target.value);
  };

  return (
    <Card className={styles.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" onChange={nameInputHandler} />

        <label htmlFor="age">Age (Years)</label>
        <input
          id="age"
          type="number"
          onChange={ageInputHandler}
          min={1}
          step={1}
        />

        <Button>Add User</Button>
      </form>
    </Card>
  );
};
export default AddUser;
