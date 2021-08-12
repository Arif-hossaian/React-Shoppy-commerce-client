import { useState } from "react";
import { ButtonGroup, Button } from "@material-ui/core";
import useStyles from "./styles.js";

const ControlButton = () => {
  const styles = useStyles();
  const [counter, setCounter] = useState(1);

  const handleIncrement = () => {
    setCounter((counter) => counter + 1);
  };

  const handleDecrement = () => {
    setCounter((counter) => counter - 1);
  };

  return (
    <ButtonGroup className={styles.component}>
      <Button
        className={styles.button}
        onClick={() => handleDecrement()}
        disabled={counter === 1}
      >
        -
      </Button>
      <Button disabled>{counter}</Button>
      <Button className={styles.button} onClick={() => handleIncrement()}>
        +
      </Button>
    </ButtonGroup>
  );
};

export default ControlButton;
