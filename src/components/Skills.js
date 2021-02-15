import React from 'react';
import { copy } from '../assets/constants/copy';

const Skills = () => (
  <section
    className="resume-section p-3 p-lg-5 d-flex align-items-center"
    id="skills"
  >
    <div className="w-100">
      <h2 className="mb-5">{copy.nav.skills}</h2>
      <ul className="fa-ul mb-0">
        {copy.skills.map(group => (
          <ul>
            <li>
              <b>{group.title}</b> -{' '}
              {group.items.map((item, i) => (
                <>
                  {item}
                  {i === group.items.length - 1 ? '' : ','}{' '}
                </>
              ))}
            </li>
          </ul>
        ))}
      </ul>
    </div>
  </section>
);

export default Skills;
