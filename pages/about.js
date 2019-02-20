import React from 'react';
import Layout from '../components/layout';
import Link from 'next/link';
import '../styles/about.scss';

const About = () => (
  <Layout>
    <div className="about-page">
      <div className="page-wrapper">
        <h1>Profile</h1>
        <div className="rich-text">
          {' '}
          <p>
            {' '}
            I'm a Front-end Developer who enjoys building rich and engaging
            digital experiences.
          </p>
          <p>
            {' '}
            I enjoy building snappy web applications, collaborating with
            front-end teams, and consulting on client-side architecture. I also
            love running with my dog 🐕, and riding my bicycle. 🚴‍♂️
          </p>{' '}
          <p>
            {' '}
            Browse some of my{' '}
            <Link name="work-link" href="/work">
              <a>work</a>
            </Link>
            , or <a href="mailto:tylerlangties@gmail.com">get in touch</a>.{' '}
          </p>{' '}
          <p>
            {' '}
            You can also find me on{' '}
            <a href="https://linkedin.com/in/tylerlangties">LinkedIn</a>,{' '}
            <a href="https://github.com/tylerlangties">Github</a>,{' '}
            <a href="http://codepen.io/tylerlangties/">CodePen</a> and{' '}
            <a href="https://www.instagram.com/imniceirl/">Instagram</a>.{' '}
          </p>{' '}
          <br />{' '}
          <Link name="work-link" href="/work">
            <button name="explore work" className="button-primary">
              Explore my work
            </button>
          </Link>{' '}
        </div>
      </div>
    </div>
  </Layout>
);

export default About;
