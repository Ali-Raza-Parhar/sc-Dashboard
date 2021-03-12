import React from 'react';
import PropTypes from 'prop-types';
import './TopFollowings.css';
import Grid from '@material-ui/core/Grid';

function TopFollower({
  profileTitle, imgSrc, postLikes, noOfLikes, followerNo
}) {
  return (
    <Grid container md={12} className="TopFollowers">
      <Grid item md={2} className="TopFollowersGridContainers">
        <img
          src={imgSrc}
          alt="top follower"
          className="TopFollowerImage"
        />
      </Grid>
      <Grid
        item
        md={4}
        className="TopFollowersGridContainers TopFollowersProfileTitle"
      >
        {profileTitle}
      </Grid>
      <Grid item md={3} className="TopFollowersGridContainers">
        <p className="TopFollowersPostLikes">
          {postLikes}
          <br />
          <span>{noOfLikes}</span>
        </p>
      </Grid>
      <Grid
        item
        md={3}
        className="TopFollowersGridContainers TopFollowersCount"
      >
        <div>
          <span>{followerNo}</span>
        </div>
      </Grid>
    </Grid>
  );
}
TopFollower.propTypes = {
  profileTitle: PropTypes.string,
  imgSrc: PropTypes.any,
  noOfLikes: PropTypes.any,
  postLikes: PropTypes.any,
  followerNo: PropTypes.any
};
export default TopFollower;
