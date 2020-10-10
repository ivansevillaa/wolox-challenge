import React from 'react';
import { render } from 'react-dom';

import './index.css';
import image from './assets/img_woloxer.png';

const App = () => {
  return (
    <div>
      <h1>Hello world!!</h1>
      <img src={image} alt="" />
    </div>
  );
};

render(<App />, document.getElementById('root'));
