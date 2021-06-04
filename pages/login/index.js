import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Router from 'next/router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Container } from 'reactstrap';
import 'react-tabs/style/react-tabs.css';
import logoImg from '../../public/assets/images/logo.png';
import FormLogin from '../../components/FormLogin/index';
import {
  loginAction,
  cleanUpData,
} from '../../redux/actions/authenticationAction';
import { setShowAlert } from '../../redux/actions/globalAction';
import { ROUTER_HOME } from '../../share/constant/Router';

const Login = ({ auth, login, showAlert, cleanDataAction }) => {
  useEffect(() => {
    () => () => {
      cleanDataAction();
    };
  }, []);

  useEffect(() => {
    if (auth?.loggedIn) {
      Router.push(ROUTER_HOME);
      return showAlert({
        state: true,
        message: 'Login success!',
      });
    }
  }, [auth?.loggedIn]);

  const handleSubmitForm = data => {
    login(data);
  };
  return (
    <div className="login-page">
      <Tabs className="custom-tab">
        <TabList className="custom-tab-list custom-tab-white">
          <div className="login-header w-100 d-flex justify-content-center">
            <img className="login-img" src={logoImg} alt="img-logo" />
          </div>
          <Tab>Login</Tab>
          <Tab>Sign-up</Tab>
        </TabList>

        <TabPanel className="custom-tab-panel">
          <Container>
            <FormLogin submitFormLogin={handleSubmitForm} />
          </Container>
        </TabPanel>
        <TabPanel className="custom-tab-panel">
          <h2>Any content 2</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

Login.propTypes = {};

const mapStateToProps = state => ({
  auth: state.AuthenticationReducer,
});

const mapDispatchToProps = dispatch => ({
  login: params => dispatch(loginAction(params)),
  showAlert: params => dispatch(setShowAlert(params)),
  cleanDataAction: () => dispatch(cleanUpData()),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default withConnect(Login);
