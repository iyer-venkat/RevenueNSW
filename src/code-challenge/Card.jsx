import React from 'react';
import { formatName } from './helpers';

export const Card = ({ name, image }) => (
  <div className="card">
    <div className="image-container">{image}</div>
    <div className="name">{formatName(name)}</div>
  </div>
);
