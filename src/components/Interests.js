import React from 'react';
import { copy } from '../assets/constants/copy';

const Interests = () => (
  <section
    className="resume-section p-3 p-lg-5 d-flex align-items-center"
    id="interests"
  >
    <div className="w-100">
      <h2 className="mb-5">{copy.nav.interests}</h2>
      {copy.interests.map(item => (
        <p>{item}</p>
      ))}
    </div>
  </section>
);

export default Interests;
