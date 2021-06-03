import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Container } from 'reactstrap';
import 'react-tabs/style/react-tabs.css';
import logoImg from '../../public/assets/images/logo.png';
import FormLogin from '../../components/FormLogin/index';

const Login = () => (
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
          <FormLogin />
        </Container>
      </TabPanel>
      <TabPanel className="custom-tab-panel">
        <h2>Any content 2</h2>
      </TabPanel>
    </Tabs>
  </div>
);
export default Login;
