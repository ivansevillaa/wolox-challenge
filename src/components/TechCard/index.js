import React from 'react';
import PropTypes from 'prop-types';
import './TechCard.css';

const TechCard = ({ data }) => (
  <article className="tech-card">
    <img
      className="tech-card__image"
      src={data.logo}
      alt={`${data.tech} logo`}
    />
    <div className="tech-card__details">
      <h3>{data.tech}</h3>
      <p>
        <span>Language:</span> {data.language}
      </p>
      <p>
        <span>Year:</span> {data.year}
      </p>
      <p>
        <span>License:</span> {data.license}
      </p>
      <p>
        <span>Author:</span> {data.author}
      </p>
      <p>
        <span>Type:</span> {data.type}
      </p>
    </div>
  </article>
);

TechCard.propTypes = {
  data: PropTypes.objectOf(PropTypes.string),
};

export default TechCard;
