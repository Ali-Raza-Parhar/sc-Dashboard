import React from 'react';
import './TopFollowings.css';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TopFollowersContent from './TopFollowingsContent';

function Followings({
  ImgSrc
}) {
  return (
    <Grid container style={{ width: '450px' }}>
      <Grid container style={{ padding: '5px 8px 10px' }}>
        <Grid item md={8} className="TopFollowersHeroText">
          Top Followings
        </Grid>
        <Grid item md={4}>
          <Button
            variant="outlined"
            color="primary"
            style={{
              padding: '8px 25px',
              border: '2px solid #000',
              color: '#000',
              fontSize: '11px',
              borderRadius: '50px'
            }}
          >
            View All
          </Button>
        </Grid>
      </Grid>
      <Grid container md={12}>
        <TopFollowersContent
          imgSrc={ImgSrc}
          profileTitle="Hash_Code"
          postLikes="Post Likes"
          noOfLikes="99"
          followerNo={1}
        />
        <TopFollowersContent
          imgSrc={ImgSrc}
          profileTitle="NoumanBasit"
          postLikes="Post Likes"
          noOfLikes="252"
          followerNo={2}
        />
        <TopFollowersContent
          imgSrc={ImgSrc}
          profileTitle="Hash_Code"
          postLikes="Post Likes"
          noOfLikes="252"
          followerNo={3}
        />
        <TopFollowersContent
          imgSrc={ImgSrc}
          profileTitle="Hash_Code"
          postLikes="Post Likes"
          noOfLikes="252"
          followerNo={4}
        />
      </Grid>
    </Grid>
  );
}
Followings.propTypes = {
  ImgSrc: PropTypes.any
};
export default Followings;
