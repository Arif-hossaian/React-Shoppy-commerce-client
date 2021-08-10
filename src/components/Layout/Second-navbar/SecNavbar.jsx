import { Box, Typography } from "@material-ui/core";
import { navData } from "./../../../constants/data";
import useStyles from "./styles.js";

const SecNavbar = () => {
  const styles = useStyles();
  return (
    <Box className={styles.component}>
      {navData.map((data) => (
        <Box className={styles.container}>
          <img src={data.url} alt={data.text} className={styles.image} />
          <Typography className={styles.text}>{data.text}</Typography>
        </Box>
      ))}
    </Box>
  );
};

export default SecNavbar;
