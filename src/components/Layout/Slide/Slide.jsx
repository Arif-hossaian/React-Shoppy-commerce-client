import { Box, Button, Divider, Typography } from "@material-ui/core";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
//import { products } from "../../../constants/data.js";
import Countdown from "react-countdown";
import useStyles from "./styles.js";
import { Link } from "react-router-dom";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Slide = ({ products }) => {
  const styles = useStyles();
  const timerURL =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg";
  const renderer = ({ hours, minutes, seconds }) => {
    return (
      <span className={styles.timer}>
        {hours} : {minutes} : {seconds} Left
      </span>
    );
  };
  return (
    <Box className={styles.component}>
      <Box className={styles.deal}>
        <Typography className={styles.dealText}>Deal of the day</Typography>
        <img src={timerURL} alt="Timer" style={{ width: 24 }} />
        <Countdown date={Date.now() + 5.04e7} renderer={renderer} />
        <Button variant="contained" color="primary" className={styles.button}>
          View All
        </Button>
      </Box>
      <Divider />
      <Carousel
        responsive={responsive}
        swipeable={false}
        draggable={false}
        centerMode={true}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={10000}
        keyBoardControl={true}
        showDots={false}
        containerClass="carousel-container"
        // removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {products.map((product) => (
          <Link to={`product/${product.id}`}>
            <Box textAlign="center" className={styles.wrapper} key={product.id}>
              <img
                src={product.url}
                className={styles.image}
                alt={product.url}
              />
              <Typography
                className={styles.text}
                style={{ fontWeight: 600, color: "#212121" }}
              >
                {product.title.shortTitle}
              </Typography>
              <Typography className={styles.text} style={{ color: "green" }}>
                {product.discount}
              </Typography>
              <Typography
                className={styles.text}
                style={{ color: "#212121", opacity: ".6" }}
              >
                {product.tagline}
              </Typography>
            </Box>
          </Link>
        ))}
      </Carousel>
    </Box>
  );
};

export default Slide;
