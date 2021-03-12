import React from 'react';
import PropTypes from 'prop-types';
import './TopFollowers.css';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TopFollowersContent from './TopFollowersContent';

function Followers({ ImgSrc }) {
  return (
    <Grid container style={{ width: '450px' }}>
      <Grid container style={{ padding: '5px 8px 10px' }}>
        <Grid item md={8} className="TopFollowersHeroText">
          Top Followers
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
          noOfLikes="252"
          followerNo={1}
        />
        <TopFollowersContent
          imgSrc={ImgSrc}
          profileTitle="Hash_Code"
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
Followers.propTypes = {
  ImgSrc: PropTypes.string
};
export default Followers;
