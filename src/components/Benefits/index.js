import React from 'react';
import PropTypes from 'prop-types';
import './Benefits.css';

const Benefits = ({ children }) => (
  <section className="benefits container">
    <h3 className="benefits__title">
      Entre los beneficios que ofrecemos se encuentran{' '}
      <span className="benefits__title--blue">;&#41;</span>
    </h3>
    <div className="benefits-list">{children}</div>
  </section>
);

Benefits.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Benefits;
