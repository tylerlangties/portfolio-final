import React from 'react';
import Layout from '../components/layout';
import Link from 'next/link';
import '../styles/index.scss';

const Index = () => (
  <Layout>
    <div className="landing-page">
      <div className="page-wrapper">
        <div className="container">
          <h1 className="landing-page__title">
            Tyler Langties,
            <br />
            Front-end / UI Developer
          </h1>
          <p className="landing-page__subtitle">
            Hi. I produce performant, and accessible web applications. Humbly
            working as a developer until robots take my job from me.
          </p>
          <div className="landing-page__button-container">
            <Link href="/work">
              <a>
                <button className="button-primary">Work</button>
              </a>
            </Link>
            <Link href="/about">
              <a>
                <button className="button-primary">Profile</button>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </Layout>
);

export default Index;
