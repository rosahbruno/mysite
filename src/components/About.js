import React from 'react';
import config from '../../config';

const About = () => (
  <section
    className="resume-section p-3 p-lg-5 d-flex align-items-center"
    id="about"
  >
    <div className="w-100">
      <h1 className="mb-0">
        {config.firstName}
        <span className="text-primary"> {config.lastName}</span>
      </h1>
      <div className="subheading mb-5">
        {config.address} | <a href="tel:412-773-1347">{config.phone}</a> |
        <a href={`mailto:${config.email}`}> {config.email}</a>
      </div>
      <p className="lead mb-5">
        welcome to my site! i am a software engineer from pittsburgh currently working <a
        href="https://www.brandingbrand.com">@brandingbrand</a> specializing in mobile + web
        development using react + react native.
        <br/><br/>
        i also am a co-founder + lead developer <a href="https://precisionstudio.org">@precisionstudio</a> where i
        lead our web + mobile projects and help with design, marketing, client acquisition, etc..
        <br/><br/>
        and i've been building web sites for 5+ years and i have professional experience in big data & mobile dev
      </p>
      <div className="social-icons">
        {config.socialLinks.map(social => {
          const { icon, url } = social;
          return (
            <a key={url} href={url}>
              <i className={`fab ${icon}`}/>
            </a>
          );
        })}
      </div>
    </div>
  </section>
);

export default About;