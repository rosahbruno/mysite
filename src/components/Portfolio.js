import React from 'react';
import { copy } from '../assets/constants/copy';

const Portfolio = () => (
  <section
    className="resume-section p-3 p-lg-5 d-flex align-items-center"
    id="portfolio"
  >
    <div className="w-100">
      <h2 className="mb-5">{copy.nav.portfolio}</h2>
      <ul className="fa-ul mb-0">
        {copy.portfolio.map(item => (
          <>
            <li>
              <b>{item.title}</b>
            </li>
            <ul>
              {item.items.map(listItem => (
                <li>
                  {!!listItem.link ? (
                    <a href={listItem.link}>{listItem.description}</a>
                  ) : (
                    <>{listItem.description}</>
                  )}
                  {!!listItem.subItem && (
                    <ul>
                      <li>{listItem.subItem}</li>
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </>
        ))}
      </ul>
    </div>
  </section>
);

export default Portfolio;
