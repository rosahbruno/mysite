import React from 'react';
import { copy } from '../assets/constants/copy';

const Experience = () => (
  <section
    className="resume-section p-3 p-lg-5 d-flex justify-content-center"
    id="experience"
  >
    <div className="w-100">
      <h2 className="mb-5">{copy.nav.experience}</h2>
      {copy.experience.map(item => (
        <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
          <div className="resume-content">
            <h3 className="mb-0">{item.title}</h3>
            <div className="subheading mb-3">
              <a href={item.link}>{item.company}</a>
            </div>
            {item.description.split('\n').map(line => (
              <p>{line}</p>
            ))}
            {!!item?.links && item.links.map(linkDetails => (
              <>
                <a href={linkDetails.link}>{linkDetails.title}</a>
                <br />
              </>
            ))}
            {!!item.skills && (
              <>
                <b>Skills</b>: {item.skills}
              </>
            )}
          </div>
          <div className="resume-date text-md-right">
            <span className="text-primary">
              {item.startDate} - {item.endDate}
            </span>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Experience;
