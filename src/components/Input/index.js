import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './Input.css';

const Input = ({ label, error, ...props }) => {
  return (
    <div className="input-container">
      <input
        className={classNames('input', {
          'input--error': error,
        })}
        placeholder=" "
        {...props}
      />
      <label
        className={classNames('label', {
          'label--error': error,
        })}
      >
        <span>{error || label}</span>
      </label>
    </div>
  );
};

Input.propTypes = {
  label: PropTypes.string.isRequired,
  error: PropTypes.string,
};

export default Input;
