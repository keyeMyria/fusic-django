import React from 'react';
import { Link } from 'react-router-dom';

export default () => (
  <div>
    <p>This is the index page, browse &amp; stuff.</p>
    <ul>
      <li>
        <Link to="/radios/1/">Radio</Link>
      </li>
      <li>
        <Link to="/new/">New</Link>
      </li>
      <li>
        <Link to="/components/">Component list</Link>
      </li>
    </ul>
  </div>
);
