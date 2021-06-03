import React, { useEffect } from 'react';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
import { Label, Row, Col, Button } from 'reactstrap';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { get } from 'lodash';
import FormInput from '../FormInput/index';
import { MIN_LENGTH_PASSWORD } from '../../share/constant/common';
import {
  loginAction,
  cleanUpData,
} from '../../redux/actions/authenticationAction';

function FormLogin({ login, cleanDataAction }) {
  const formValidationSchema = {
    email: yup
      .string()
      .required('Field is required')
      .email('Field must be email'),
    password: yup
      .string()
      .required('Field is required')
      .min(MIN_LENGTH_PASSWORD, 'Password min length is 6'),
  };
  const methods = useForm({
    resolver: yupResolver(yup.object().shape(formValidationSchema)),
  });

  const {
    register,
    errors,
    handleSubmit,
    // formState: { isSubmitted },
  } = methods;

  const onSubmit = data => {
    login({ email: data.email, password: data.password });
  };

  useEffect(() => {
    () => () => {
      cleanDataAction();
    };
  }, []);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form-login">
      <Row>
        <Col>
          <div className="form-control-group">
            <Label className="form-control-label" for="email">
              Email address
              <span className="text-danger ml-1">*</span>
            </Label>
            <FormInput
              id="email"
              register={register}
              placeholder="example@gmail.com"
              name="email"
              formErrors={get(errors, 'email.message')}
              // defaultValue="Dosamarvis@gmail.com"
            />
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="form-control-group">
            <Label className="form-control-label" for="password">
              Password
              <span className="text-danger ml-1">*</span>
            </Label>
            <FormInput
              id="password"
              register={register}
              placeholder="Enter password here"
              name="password"
              type="password"
              formErrors={get(errors, 'password.message')}
            />
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <a className="form-login-link form-control-link" href="#">
            Forgot passcode?
          </a>
        </Col>
      </Row>
      <Row>
        <Col>
          <Button
            type="submit"
            className="form-login-btn btn btn-orange w-100"
            color="none"
            onClick={handleSubmit(onSubmit)}
          >
            Login
          </Button>
        </Col>
      </Row>
    </form>
  );
}

FormLogin.propTypes = {};

// const mapStateToProps = state => ({
//   // errorMsg: state.userListReducer.messageError,
// });

const mapDispatchToProps = dispatch => ({
  login: params => dispatch(loginAction(params)),
  cleanDataAction: () => dispatch(cleanUpData()),
});

const withConnect = connect(
  null,
  mapDispatchToProps,
);
export default withConnect(FormLogin);
