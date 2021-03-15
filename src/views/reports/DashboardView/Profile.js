import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Divider from '@material-ui/core/Divider';
import Switch from '@material-ui/core/Switch';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
  card: {
    margin: theme.spacing(1)
  },
  root: {
    display: 'flex',
    maxWidth: '375px',
    margin: theme.spacing(2)
  },
  details: {
    display: 'flex',
    flexDirection: 'column'
  },
  content: {
    flex: '1 0 auto'
  },
  cover: {
    width: 150,
    height: 150,
    borderRadius: '5px'
  },
  startCouncelingBtn: {
    borderRadius: '30px',
    [theme.breakpoints.down(342)]: {
      padding: '11px',
      marginLeft: '0px',
      lineHeight: 1,
    },
  },
  divider: {
    marginTop: theme.spacing(1)
  },
  cardAction: {
    margin: theme.spacing(1, 0, 1, 0)
  },
  boldtext: {
    fontWeight: '500',
    color: 'primary',
  }
}));

function Profiles({ profileImg }) {
  const classes = useStyles();
  const [councelingBtn, setCouncelingBtn] = React.useState({
    status: true
  });
  const switchHandler = () => {
    setCouncelingBtn({ status: !councelingBtn.status });
  };

  return (
    <Card className={classes.card}>
      <div className={classes.root}>
        <CardMedia
          className={classes.cover}
          image={profileImg}
          title="IG profile img"
        />
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <Typography component="h6" variant="h6">
              @therock
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              <span className={classes.boldtext}>Followers:</span>
              1.5M
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              <span className={classes.boldtext}>Followings:</span>
              540
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              <span className={classes.boldtext}>Posts:</span>
              99K
            </Typography>
          </CardContent>
        </div>
      </div>
      <div className={classes.controls}>
        <div>
          <Divider variant="middle" className={classes.divider} />
        </div>
        <div>
          <CardActions className={classes.cardAction}>
            <FormControlLabel
              value="start"
              control={<Switch onClick={switchHandler} color="primary" />}
              label="Activate"
              labelPlacement="start"
            />
            <Button
              variant="contained"
              disabled={councelingBtn.status}
              className={classes.startCouncelingBtn}
              fullWidth
              color="primary"
            >
              Start Counceling
            </Button>
          </CardActions>
        </div>
      </div>
    </Card>
  );
}
Profiles.propTypes = {
  profileImg: PropTypes.string
};

export default Profiles;
