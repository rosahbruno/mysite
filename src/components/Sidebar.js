import React, { useState } from 'react';
import Scrollspy from 'react-scrollspy';
import Scroll from './Scroll';

// *** Utils *** //
import avatar from '../assets/images/bbme.png';
import { copy } from '../assets/constants/copy';

const tabs = [
  { content: 'About', href: 'about' },
  { content: 'Experience', href: 'experience' },
  { content: 'Education', href: 'education' },
  { content: 'Interests', href: 'interests' },
  { content: 'Portfolio', href: 'portfolio' }
];

const Sidebar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const toggleMenu = () => setShowMobileMenu(!showMobileMenu);

  const show = showMobileMenu ? 'show' : '';
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top"
      id="sideNav"
    >
      <a className="navbar-brand" href="#page-top">
        <span className="d-block d-lg-none">
          {copy.firstName} {copy.lastName}
        </span>
        <span className="d-none d-lg-block">
          <img
            className="img-fluid img-profile rounded-circle mx-auto mb-2"
            src={avatar}
            alt="personal avatar | bruno rosa"
          />
        </span>
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
        onClick={toggleMenu}
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        id="navbarSupportedContent"
        className={'collapse navbar-collapse ' + show}
      >
        <Scrollspy
          items={tabs.map(s => s.href)}
          currentClassName="active"
          offset={-300}
          className="navbar-nav"
        >
          {tabs.map((tab, i) => (
            <li className="nav-item" key={tab.href} onClick={toggleMenu}>
              <Scroll type="id" element={tab.href}>
                <a className="nav-link" href={`#${tab.href}`}>
                  {tab.content}
                </a>
              </Scroll>
            </li>
          ))}
        </Scrollspy>
      </div>
    </nav>
  );
};

export default Sidebar;
