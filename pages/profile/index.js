import React from 'react';
// import PropTypes from 'prop-types';
import { Card, Button } from 'reactstrap';
import MainLayout from '../../components/MainLayout';
import avatar from '../../public/assets/images/profile.png';
import Cards from '../../public/assets/images/card.png';
import Bank from '../../public/assets/images/bank.png';
import Paypal from '../../public/assets/images/paypal.png';

function Profile() {
  const paymentMethod = [
    { label: 'Card', value: 'card', image: Cards },
    { label: 'Bank account', value: 'bank', image: Bank },
    { label: 'Paypal', value: 'paypal', image: Paypal },
  ];
  return (
    <MainLayout typeHeader="normal" textHeader="My profile">
      <div className="profile">
        <h1 className="profile-title font-weight-semibold m-b-12">
          Information
        </h1>
        <Card className="card-profile">
          <div className="d-flex">
            <img className="card-profile-avatar" src={avatar} alt="avatar" />
            <div>
              <h2 className="card-profile-name font-weight-semibold">
                Marvis Ighedosa
              </h2>
              <p className="card-profile-text m-b-9">dosamarvis@gmail.com</p>
              <p className="card-profile-text">
                No 15 uti street off ovie palace road effurun delta state
              </p>
            </div>
          </div>
        </Card>
        <h1 className="profile-title font-weight-semibold m-b-21">
          Payment Method
        </h1>
        <Card className="card-payment">
          {paymentMethod.map((item, index) => (
            <div className="d-flex align-items-center">
              <input
                className="card-payment-radio m-r-15"
                type="radio"
                name="payment"
                id={index}
                value={item.value}
                defaultChecked={index === 0}
              />
              <div className="card-payment-item">
                <img className="card-payment-avatar" src={item.image} alt="" />
                <p className="card-payment-text">{item.label}</p>
              </div>
            </div>
          ))}
        </Card>
        <Button className="btn btn-orange w-100">Update</Button>
      </div>
    </MainLayout>
  );
}

Profile.propTypes = {};

export default Profile;
