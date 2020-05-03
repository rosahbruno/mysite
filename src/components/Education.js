import React from 'react';

const Education = () => (
  <section
    className="resume-section p-3 p-lg-5 d-flex align-items-center"
    id="education"
  >
    <div className="w-100">
      <h2 className="mb-5">Education</h2>
      <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
        <div className="resume-content">
          <h3 className="mb-0">juniata college</h3>
          <div className="subheading mb-3">Bachelor of Science</div>
          <div>computer science (with honors)</div>
          <p>
            overall gpa: 3.4
            <br/>
            major gpa: 3.9
          </p>
          <br/>
          <p>
            activities
            <br/>
            class of '18 member of the it advisory board, head of cs/it tutoring labs, head of cs/it mentoring program,
            golf team, ski club
          </p>
          <br/>
          <p>
            awards
            <br/>
            dale l. wampler award in information technology + computer science
            <br/>
            dean's list (over 3.6) 5 semesters
          </p>
        </div>
        <div className="resume-date text-md-right">
          <span className="text-primary">aug '14 - may '18</span>
        </div>
      </div>
      <div className="resume-item d-flex flex-column flex-md-row justify-content-between">
        <div className="resume-content">
          <h3 className="mb-0">conemaugh township high school</h3>
          <div className="subheading mb-3">high school diploma</div>
          <p>gpa: 3.65</p>
          <br/>
          <p>
            activities
            <br/>
            football, basketball, baseball, ski club, spanish club, computer club, newspaper/yearbook sports editor,
            journalism
          </p>
          <br/>
          <p>
            awards
            <br/>
            computer + technology award winner as a sophomore for web design + as a senior for programming 1 + 2
            <br/>
            team captain of football + baseball teams
            <br/>
            all conference: baseball 3x, football 2x
            <br/>
            all county: baseball 4x, football 2x
          </p>
        </div>
        <div className="resume-date text-md-right">
          <span className="text-primary">aug 2010 - may '14</span>
        </div>
      </div>
    </div>
  </section>
);

export default Education;
