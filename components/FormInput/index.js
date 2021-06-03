import React, { Fragment } from 'react';
// import PropTypes from 'prop-types';
import { Input } from 'reactstrap';
import classnames from 'classnames';

const FormInput = ({
  register,
  id,
  className,
  placeholder,
  formErrors,
  // formSaveErrors,
  name,
  defaultValue,
  onBlur,
  type = 'text',
  // t,
}) => (
  <Fragment>
    <Input
      className={classnames(`form-control-input ${className}`, {
        'border-danger': formErrors,
      })}
      type={type}
      id={id}
      name={name}
      innerRef={register}
      placeholder={placeholder}
      defaultValue={defaultValue}
      onBlur={onBlur}
    />
    {formErrors && (
      <span className="text-danger text-nowrap d-inline-block width-by-px-350">
        {formErrors}
      </span>
    )}
  </Fragment>
);

FormInput.propTypes = {};

FormInput.defaultProps = {
  className: '',
};

export default FormInput;
