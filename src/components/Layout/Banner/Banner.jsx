import Carousel from "react-material-ui-carousel";
import { bannerData } from "../../../constants/data.js";
import useStyles from "./styles.js";

const Banner = () => {
  const styles = useStyles();
  return (
    <Carousel
      autoPlay={true}
      animation="slide"
      indicators={false}
      navButtonsAlwaysVisible={true}
      cycleNavigation={true}
      className={styles.container}
      StylesProvider
      navButtonsProps={{
        style: {
          color: "#494949",
          backgroundColor: "#FFFFFF",
          borderRadius: 0,
          margin: 0,
          width: 50,
        },
      }}
    >
      {bannerData.map((image) => (
        <img src={image} alt={image} className={styles.image} />
      ))}
    </Carousel>
  );
};

export default Banner;
