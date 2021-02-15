import React from 'react';
import config from '../../config';
import { copy } from '../assets/constants/copy';

const About = () => (
  <section
    className="resume-section p-3 p-lg-5 d-flex align-items-center"
    id="about"
  >
    <div className="w-100">
      <h1 className="mb-0">
        {copy.firstName}
        <span className="text-primary"> {copy.lastName}</span>
      </h1>
      <div className="subheading mb-5">
        {copy.location} | <a href="tel:412-773-1347">{copy.myPhone}</a> |
        <a href={`mailto:${copy.myEmail}`}> {copy.myEmail}</a>
      </div>
      <p className="lead mb-5">
        {copy.about.header}
        <br />
        <br />
        {copy.about.subHeader}
        <br />
        <br />
        {copy.about.tertiaryHeader}
      </p>
      <div className="social-icons">
        {config.socialLinks.map(social => (
          <a key={social.url} href={social.url}>
            <i className={`fab ${social.icon}`} />
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default About;
