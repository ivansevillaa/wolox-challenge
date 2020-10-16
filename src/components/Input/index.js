import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './Input.css';

const Input = ({ label, error, square, shadow, ...props }) => {
  return (
    <div
      className={classNames('input-container', {
        'input-container--shadow': shadow,
        'input--type-square': square,
      })}
    >
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
          'label--type-square': square,
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
  square: PropTypes.bool,
  shadow: PropTypes.bool,
};

export default Input;
