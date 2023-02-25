import Card from "../Card/Card";
import Button from "../Button/Button";
import styles from "./ErrorModal.module.css";

const ErrorModal = (props) => {
  const { title, message, onConfirm } = props;

  return (
    <>
      <div className={styles.backdrop} onClick={onConfirm}>
        <Card className={styles.modal}>
          <header className={styles.header}>
            <h2>{title}</h2>
          </header>
          <body>
            <div className={styles.content}>{message}</div>
          </body>
          <footer className={styles.acton}>
            <Button btnClick={onConfirm}>OK</Button>
          </footer>
        </Card>
      </div>
    </>
  );
};

export default ErrorModal;
