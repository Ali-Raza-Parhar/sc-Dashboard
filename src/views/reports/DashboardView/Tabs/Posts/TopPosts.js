import React from 'react';
import './TopPosts.css';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TopPostsContent from './TopPostsContent';

function Posts({ ImgSrc }) {
  return (
    <Grid container style={{ width: '450px' }}>
      <Grid container style={{ padding: '5px 8px 10px' }}>
        <Grid item md={8} className="TopFollowersHeroText">
          Top Posts
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
        <TopPostsContent imgSrc={ImgSrc} />
      </Grid>
    </Grid>
  );
}
Posts.propTypes = {
  ImgSrc: PropTypes.any,
};
export default Posts;
