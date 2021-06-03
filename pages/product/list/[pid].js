import React from 'react';
// import PropTypes from 'prop-types';
import SwiperCore, { Navigation } from 'swiper';
import { Button } from 'reactstrap';
import Slider from 'react-slick';
import MainLayout from '../../../components/MainLayout';
import BlockImage from '../../../components/BlockImage';
import ProductImg from '../../../public/assets/images/foods/product1.png';

SwiperCore.use([Navigation]);

function ProductDetail() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <MainLayout typeHeader="heart">
      <div className="product-detail">
        <Slider {...settings} className="slick-slider-custom">
          <div className="">
            <BlockImage image={ProductImg} />
          </div>
          <div className="">
            <BlockImage image={ProductImg} />
          </div>
          <div className="">
            <BlockImage image={ProductImg} />
          </div>
        </Slider>
        <h1 className="head-title text-center">Veggie tomato mix</h1>
        <p className="sub-title text-center">N1,900</p>
        <div className="product-description">
          <h4 className="font-weight-semibold m-b-7">Delivery info</h4>
          <p className="text-gray mb-5">
            Delivered between monday aug and thursday 20 from 8pm to 91:32 pm
          </p>
          <h4 className="font-weight-semibold m-b-7">Return policy</h4>
          <p className="text-gray mb-5">
            All our foods are double checked before leaving our stores so by any
            case you found a broken food please contact our hotline immediately.
          </p>
          <Button className="btn btn-orange w-100">Add to cart</Button>
        </div>
      </div>
    </MainLayout>
  );
}

ProductDetail.propTypes = {};

export default ProductDetail;
