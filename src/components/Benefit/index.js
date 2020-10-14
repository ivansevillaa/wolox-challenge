import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon';
import './Benefit.css';
import { icons } from '../../utils/icons';

const Benefit = ({ icon, width, height, benefitName }) => (
  <article className="benefit">
    <Icon icon={icon} width={width} height={height} />
    <p className="benefit__name">{benefitName}</p>
  </article>
);

const iconsKeys = Object.keys(icons);

Benefit.propTypes = {
  icon: PropTypes.oneOf(iconsKeys).isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  benefitName: PropTypes.string.isRequired,
};

export default Benefit;
