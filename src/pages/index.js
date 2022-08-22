import React from 'react';

// *** Components *** //
import About from '../components/About';
import Experience from '../components/Experience';
import Education from '../components/Education';
import Interests from '../components/Interests';
import Portfolio from '../components/Portfolio';
import Layout from '../components/Layout';
import Sidebar from '../components/Sidebar';

const IndexPage = () => (
  <Layout>
    <Sidebar />
    <div className="container-fluid p-0">
      <About />
      <hr className="m-0" />
      <Experience />
      <hr className="m-0" />
      <Education />
      <hr className="m-0" />
      <Interests />
      <hr className="m-0" />
      <Portfolio />
    </div>
  </Layout>
);

export default IndexPage;
