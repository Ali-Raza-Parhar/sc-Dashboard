// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Grid from '@material-ui/core/Grid';

// import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
// import CardMedia from '@material-ui/core/CardMedia';

// import Button from '@material-ui/core/Button';
// import Avatar from '@material-ui/core/Avatar';

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
  root: {
    display: 'flex',
    maxWidth: '375px',
    margin: theme.spacing(1)
  },
  details: {
    display: 'flex',
    flexDirection: 'column'
  },
  content: {
    flex: '1 0 auto'
  },
  cover: {
    width: 151
  },
  controls: {
    display: 'flex',
    flexDirection: 'column'
  },
  divider: {
    marginTop: theme.spacing(1)
  },
  cardAction: {
    margin: theme.spacing(1, 0, 1, 0)
  },
  boldtext: {
    fontWeight: '500',
    color: 'primary'
  },
  playIcon: {
    height: 38,
    width: 38
  }
}));

// const useStyles = makeStyles((theme) => ({
//   root: {
//     display: 'flex',
//     margin: theme.spacing(1)
//   },
//   Card: {
//     padding: theme.spacing(4, 2),
//     variant: 'outlined',
//     borderRadius: '20px',
//     backgroundColor: '#e0e3e4',
//     position: 'relative'
//   },
//   CoverImg: {
//     width: '290px',
//     height: '180px',
//     opacity: '0.8',
//     position: 'relative',
//     borderRadius: '10px'
//   },
//   Avatar: {
//     position: 'absolute',
//     zIndex: '100',
//     top: '22px',
//     right: '10px',
//     border: '2px solid #fff',
//     borderRadius: '50%',
//     height: '60px',
//     width: '60px',
//     boxShadow: '0px 0px 5px 2px #a0a0a0e6'
//   },
//   UserName: {
//     position: 'absolute',
//     backgroundColor: 'rgba(0,0,0,0.5)',
//     color: '#fff',
//     width: '100%',
//     bottom: '0',
//     margin: '0px',
//     textAlign: 'center',
//     padding: '5px 0px',
//     borderRadius: '0px 0px 10px 10px'
//   },
//   CouncelingBtn: {
//     variant: 'outlined',
//     color: '#d99298',
//     border: '1px solid #d99298',
//     borderRadius: '50px',
//     margin: '20px auto',
//     width: '80%'
//   },
//   GridContainer: {
//     borderRadius: '50px',
//     padding: '8px 18px',
//     backgroundColor: '#fff',
//     textAlign: 'center'
//   },
//   Headings: {
//     margin: '0px 1px',
//     fontSize: '12px'
//   },
//   Paragraphs: {
//     margin: '0px 1px',
//     fontSize: '12px',
//     color: '#d99298'
//   }
// }));

function Profiles({ profileImg }) {
  const classes = useStyles();

  return (
    <Card>
      <div className={classes.root}>
        <CardMedia
          style={{ border: '1px solid blue', height: '150px' }}
          width="150px"
          className={classes.cover}
          image={profileImg}
          title="Live from space album cover"
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
              control={<Switch color="primary" />}
              label="Activate"
              labelPlacement="start"
            />
            <Button
              variant="contained"
              style={{ borderRadius: '30px' }}
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
