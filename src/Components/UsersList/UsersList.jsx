import Card from "../Card/Card";
import styles from "./UsersList.module.css";

const UsersList = (props) => {
  const { users } = props;
  return (
    <Card className={styles.users}>
      <ul>
        {users.map((user, index) => {
          return (
            <li key={index}>
              {user.name}({user.age}) years old
            </li>
          );
        })}
      </ul>
    </Card>
  );
};

export default UsersList;
