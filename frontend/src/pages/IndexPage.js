import React from 'react';
import { Link } from 'react-router-dom';

export default () => (
  <div>
    <p>
      This is the index page, browse &amp; stuff.{' '}
      <Link to="/radios/1/">Radio</Link>
      <Link to="/new/">New</Link>
    </p>
  </div>
);
