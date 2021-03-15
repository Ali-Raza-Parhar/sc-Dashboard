import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Profile from './Profile';
import ProfileImg from '../../../assets/avatars/avatar_4.png';

const useStyles = makeStyles(() => ({
  sliderWidth: {
    width: '100%',
    margin: '0px auto',
    outline: 'none'
  },
  mainGrid: {
    display: 'flex',
    flexWrap: 'wrap'
  }
}));

function SimpleSlider() {
  const classes = useStyles();
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 2400,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    focusOnSelect: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <Grid container xs={12} className={classes.mainGrid}>
      <Slider {...settings} className={classes.sliderWidth}>
        <Grid item xs={12}>
          <Profile
            profileImg={ProfileImg}
          />
        </Grid>
        <Grid item xs={12}>
          <Profile
            profileImg={ProfileImg}
          />
        </Grid>
        <Grid item xs={12}>
          <Profile
            profileImg={ProfileImg}
          />
        </Grid>
        <Grid item xs={12}>
          <Profile
            profileImg={ProfileImg}
          />
        </Grid>
      </Slider>
    </Grid>
  );
}

export default SimpleSlider;
