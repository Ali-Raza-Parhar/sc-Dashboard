import React from 'react';
import './TopPosts.css';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';

function TopFollower({ imgSrc }) {
  return (
    <>
      <Box
        height={140}
        width="100%"
        bgcolor="#fbced1;"
        style={{ borderRadius: '5px' }}
      >
        <Box height="50%" mx={0} width="50%" my="0px" display="inline-block">
          <img src={imgSrc} alt="top_post" className="TopPostImage" />
        </Box>
        <Box height="50%" mx={0} width="50%" my="0px" display="inline-block">
          <img src={imgSrc} alt="top_post" className="TopPostImage" />
        </Box>
      </Box>
    </>
  );
}
TopFollower.propTypes = {
  imgSrc: PropTypes.any,
};
export default TopFollower;
