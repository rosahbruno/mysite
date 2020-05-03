import React from 'react';

const Portfolio = () => (
  <section
    className="resume-section p-3 p-lg-5 d-flex align-items-center"
    id="portfolio"
  >
    <div className="w-100">
      <h2 className="mb-5">portfolio</h2>
      <ul className="fa-ul mb-0">
        <li>
          branding brand
          <ul>
            <li>check our <a href="https://www.brandingbrand.com/">site</a> for some clients that we've worked with (you
              may have heard of a few)
            </li>
          </ul>
        </li>
        <li>
          bny mellon
          <ul>
            <li>all proprietary internal apps (help desk tool, incident management, internal social network, emergency
              contacts)
            </li>
          </ul>
        </li>
        <li>
          upmc
          <ul>
            <li>
              worked on <a
              href="https://www.diagnosticimaging.com/articles/mars-data-archiving-system-poised-nationwide-intro">MARS</a>..
              our team was moving this massive dataset to hadoop and rebuilding its services + ui
            </li>
          </ul>
        </li>
        <li>
          precision studio
          <ul>
            <li><a href="http://www.denunziosrestaurant.com/">denunzios</a></li>
            <li><a href="http://stoneybrooketown.com/">stoney brook</a></li>
            <li><a href="https://spaghettibenders.com/">spaghetti benders</a></li>
            <li><a href="http://shrewsburypets.com/">shrewsbury pet shop</a></li>
            <li><a href="https://precisionstudio.org/">precision studio</a></li>
          </ul>
        </li>
        <li>
          juniata
          <ul>
            <li><a href="https://www.juniata.edu/">juniata</a> - led a team of 8 students working on our main site</li>
            <li><a href="https://github.com/rosahbruno/Hue_Calendar">hue calendar</a></li>
            <li><a href="https://github.com/rosahbruno/fmEMSFinalApp">fort mill ems app</a></li>
          </ul>
        </li>
        <li>
          freelancing
          <ul>
            <li><a href="http://matthewgaynor.com/">matthewgaynor.com</a></li>
            <li>this site (obvi)</li>
          </ul>
        </li>
        <li>
          additional programming
          <ul>
            <li>
              <a href="https://www.codewars.com/users/rosahbruno">codewars</a>
            </li>
          </ul>
        </li>
        <li>
          research
          <ul>
            <li>creating a cross-platform mobile app</li>
            <ul>
              <li>conducted research with a colleague on the process + proper toolset for building a cross-platform
                mobile app
              </li>
            </ul>
            <li>
              quantum computing - the catalyst of a computing revolution
              <ul>
                <li>conducted research with a colleague on the potential impact of quantum computing on our everyday
                  lives in a very near future
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </section>
);

export default Portfolio;
