import React from 'react';
import PropTypes from 'prop-types';
import { icons } from '../../utils/icons';

const Icon = ({ icon, width, height }) => (
  <img src={icons[icon]} alt={`Icon ${icon}`} width={width} height={height} />
);

const iconsKeys = Object.keys(icons);

Icon.propTypes = {
  icon: PropTypes.oneOf(iconsKeys).isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
};

Icon.defaultProps = {
  width: 54,
  height: 54,
};

export default Icon;
