import React from 'react';
// import PropTypes from 'prop-types';

function BlockImage({ image, isSquare }) {
  return (
    <div className="block-image mx-auto">
      <img
        className={`${isSquare ? 'block-image-square' : 'block-image-circle'}`}
        src={image}
        alt="xx"
      />
    </div>
  );
}

BlockImage.propTypes = {};

export default BlockImage;
