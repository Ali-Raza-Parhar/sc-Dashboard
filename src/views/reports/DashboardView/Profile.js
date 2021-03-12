import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';

import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';

import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    margin: theme.spacing(1)
  },
  Card: {
    padding: theme.spacing(4, 2),
    variant: 'outlined',
    borderRadius: '20px',
    backgroundColor: '#e0e3e4',
    position: 'relative'
  },
  CoverImg: {
    width: '290px',
    height: '180px',
    opacity: '0.8',
    position: 'relative',
    borderRadius: '10px'
  },
  Avatar: {
    position: 'absolute',
    zIndex: '100',
    top: '22px',
    right: '10px',
    border: '2px solid #fff',
    borderRadius: '50%',
    height: '60px',
    width: '60px',
    boxShadow: '0px 0px 5px 2px #a0a0a0e6'
  },
  UserName: {
    position: 'absolute',
    backgroundColor: 'rgba(0,0,0,0.5)',
    color: '#fff',
    width: '100%',
    bottom: '0',
    margin: '0px',
    textAlign: 'center',
    padding: '5px 0px',
    borderRadius: '0px 0px 10px 10px'
  },
  CouncelingBtn: {
    variant: 'outlined',
    color: '#d99298',
    border: '1px solid #d99298',
    borderRadius: '50px',
    margin: '20px auto',
    width: '80%'
  },
  GridContainer: {
    borderRadius: '50px',
    padding: '8px 18px',
    backgroundColor: '#fff',
    textAlign: 'center'
  },
  Headings: {
    margin: '0px 1px',
    fontSize: '12px'
  },
  Paragraphs: {
    margin: '0px 1px',
    fontSize: '12px',
    color: '#d99298'
  }
}));

function Profiles({ imageSrc, profileImg }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Card className={classes.Card}>
        <Avatar className={classes.Avatar} alt="Profile Img" src={profileImg} />
        <CardMedia
          className={classes.CoverImg}
          image={imageSrc}
          title="Profile Image"
        >
          <p className={classes.UserName}>Username</p>
        </CardMedia>

        <CardActions>
          <Button className={classes.CouncelingBtn}>Start Counseling</Button>
        </CardActions>

        <Grid container className={classes.GridContainer}>
          <Grid item md={4} sm={4}>
            <h5 className={classes.Headings}>FOLLOWERS</h5>
            <p className={classes.Paragraphs}>10000</p>
          </Grid>
          <Grid item md={4} sm={4}>
            <h5 className={classes.Headings}>FOLLOWINGS</h5>
            <p className={classes.Paragraphs}>599</p>
          </Grid>
          <Grid item md={4} sm={4}>
            <h5 className={classes.Headings}>POSTS</h5>
            <p className={classes.Paragraphs}>100</p>
          </Grid>
        </Grid>
      </Card>
    </div>
  );
}
Profiles.propTypes = {
  imageSrc: PropTypes.string,
  profileImg: PropTypes.string
};

export default Profiles;
