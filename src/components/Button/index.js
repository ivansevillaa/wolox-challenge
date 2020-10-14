import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './Button.css';

const Button = ({
  variant,
  disableShadow,
  color,
  children,
  size,
  ...props
}) => (
  <button
    className={classNames('button', {
      [`button--variant-${variant}`]: variant,
      'button--disable-shadow': disableShadow,
      [`button--color-${color}`]: color,
      [`button--size-${size}`]: size,
    })}
    {...props}
  >
    {children}
  </button>
);

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['default', 'outline']),
  disableShadow: PropTypes.bool,
  color: PropTypes.oneOf(['transparent', 'primary', 'white']),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
};

Button.defaultProps = {
  variant: 'default',
  disableShadow: false,
  color: 'primary',
  size: 'md',
};

export default Button;
