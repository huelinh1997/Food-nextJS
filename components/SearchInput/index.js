import React from 'react';
// import PropTypes from 'prop-types';
import { Input } from 'reactstrap';
import classnames from 'classnames';

const SearchInput = ({
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
  <div className="search">
    <Input
      className={classnames(`form-control-search ${className}`, {
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
    <span className="icon-search" />
    {formErrors && (
      <span className="text-danger text-nowrap d-inline-block width-by-px-350">
        {formErrors}
      </span>
    )}
  </div>
);

SearchInput.propTypes = {};
SearchInput.defaultProps = {
  className: '',
};

export default SearchInput;
