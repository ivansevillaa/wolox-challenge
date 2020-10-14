import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './Picture.css';

const Picture = ({ src, srcset, alt, flip }) => (
  <figure
    className={classNames('picture', {
      'picture--flip': flip,
    })}
  >
    <img src={src} srcSet={srcset} alt={alt} />
  </figure>
);

Picture.propTypes = {
  src: PropTypes.string.isRequired,
  srcset: PropTypes.string,
  alt: PropTypes.string.isRequired,
  flip: PropTypes.bool,
};

Picture.defaultProps = {
  flip: false,
};

export default Picture;
