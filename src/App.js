import { useState } from "react";
import AddUser from "./Components/AddUser/AddUser";
import UsersList from "./Components/UsersList/UsersList";
import "./styles.css";

export default function App() {
  const [usersList, setUsersList] = useState([]);
  const addUserHandler = (userName, age) => {
    setUsersList((prevState) => {
      return [{ name: userName, age: age }, ...prevState];
    });
  };
  return (
    <div className="App">
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </div>
  );
}
