import React from 'react';
import { copy } from '../assets/constants/copy';

const Education = () => (
  <section
    className="resume-section p-3 p-lg-5 d-flex align-items-center"
    id="education"
  >
    <div className="w-100">
      <h2 className="mb-5">Education</h2>
      {copy.education.schools.map(item => (
        <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
          <div className="resume-content">
            <h3 className="mb-0">{item.school}</h3>
            <div className="subheading mb-3">{item.degree}</div>
            <div>
              {item.gpa.split('\n').map(line => (
                <>
                  {line}
                  <br />
                </>
              ))}
            </div>
            {!!item?.activities?.length && (
              <>
                <br />
                <div>
                  <b>{copy.education.activities}</b>
                  <br />
                  {item.activities.split('\n').map(line => (
                    <>
                      - {line}
                      <br />
                    </>
                  ))}
                </div>
                <br />
              </>
            )}
            {!!item?.awards?.length && (
              <>
                <div>
                  <b>{copy.education.awards}</b>
                  <br />
                  {item.awards.split('\n').map(line => (
                    <>
                      - {line}
                      <br />
                    </>
                  ))}
                </div>
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

export default Education;
