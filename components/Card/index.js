import React from 'react';
// import PropTypes from 'prop-types';
import { Card } from 'reactstrap';
import ImgProduct1 from '../../public/assets/images/foods/product1.png';
import BlockImage from '../BlockImage';

function CardImage({ className }) {
  return (
    <Card className={`${className} card-image d-flex align-items-center`}>
      <BlockImage image={ImgProduct1} />
      <div className="card-image-text">Veggie tomato mix</div>
      <div className="card-image-subtext">N1,900</div>
    </Card>
  );
}

CardImage.propTypes = {};
CardImage.defaultProps = {
  className: '',
};

export default CardImage;
