import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import { Box } from "@mui/system";
import React, { Fragment } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import data from "../data/slider.json";
import styles from "../styles/carouselSlider.module.css";

class CarouselSlider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loader: [],
    };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.redirectToLink = this.redirectToLink.bind(this);
  }

  next() {
    this.slider.slickNext();
  }

  previous() {
    this.slider.slickPrev();
  }

  redirectToLink(link) {
    window.location.replace(link);
  }

  render() {
    const card = data.map((item) => {
      return (
        <Card
          key={item.title}
          onClick={() => this.redirectToLink(item.url)}
          className="slider-card"
        >
          <CardHeader
            className="sliderCardTitle"
            titleTypographyProps={{ variant: "p" }}
            title={
              item.title.length > 20
                ? item.title.substring(0, 20) + "..."
                : item.title
            }
          />
          <CardMedia
            className={styles.sliderCardImage}
            component="img"
            image={item.thumbnailUrl}
            alt={item.title}
          />
        </Card>
      );
    });

    const settings = {
      dots: false,
      infinite: true,
      speed: 1000,
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: false,
      autoplaySpeed: 5000,
      marginRight: 100,
      responsive: [
        {
          breakpoint: 1280,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          },
        },
        {
          breakpoint: 1025,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          },
        },
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            initialSlide: 1,
          },
        },

        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
      ],
    };

    return (
      <Fragment>
        <Box className={styles.slider}>
          {/* <Button className={styles.sliderLeftArrow} onClick={this.previous}>
                    <ArrowBackIosIcon />
                </Button>

                  <Button className={styles.nextArrow} onClick={this.next}>
                      <ArrowForwardIosIcon />
                  </Button> */}

          <Fragment>
            <Slider ref={(c) => (this.slider = c)} {...settings}>
              {card}
            </Slider>
          </Fragment>
        </Box>
      </Fragment>
    );
  }
}

export default CarouselSlider;
