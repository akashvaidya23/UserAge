import { useState } from "react";
import Button from "../Button/Button";
import Card from "../Card/Card";
import ErrorModal from "../ErrorModal/ErrorModal";
import styles from "./AddUser.module.css";

const AddUser = (props) => {
  const { onAddUser } = props;
  const [userName, setUserName] = useState("");
  const userNameHandler = (e) => {
    setUserName(e.target.value);
  };

  const [age, setAge] = useState("");
  const ageHandler = (e) => {
    setAge(e.target.value);
  };

  const [error, setError] = useState();
  const btnClickHandler = () => {
    if (userName.trim().length === 0 || age.trim().length === 0) {
      setError({
        title: "InValid Input",
        mesaage: "Please enter valid name and age"
      });
      return;
    } else if (age < 0) {
      setError({
        title: "InValid Age",
        mesaage: "Please enter valid age greater than 0"
      });
      return;
    }
    onAddUser(userName, age);
    setAge("");
    setUserName("");
  };

  const errorHandler = () => {
    setError(null);
  };
  return (
    <>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={styles.input}>
        <label htmlFor="userName">User Name</label>
        <input
          type="text"
          id="userName"
          onChange={userNameHandler}
          value={userName}
          autoComplete="off"
        />
        <label htmlFor="age">Age(Years)</label>
        <input
          type="number"
          id="age"
          onChange={ageHandler}
          value={age}
          autoComplete="off"
        />
        <Button btnClick={btnClickHandler}>Submit</Button>
      </Card>
    </>
  );
};

export default AddUser;
