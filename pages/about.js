import React from 'react'
import Layout from '../components/layout'
import Link from 'next/link'
import '../styles/about.scss'

const About = () => (
  <Layout>
    <div className='about-page'>
      <div className='page-wrapper'>
        <h1>Profile</h1>
        <div className='rich-text'>
          {' '}
          <p>
            {' '}
            I'm a Front-end Developer who enjoys building rich and accessible
            web applications.
          </p>
          <p>
            {' '}
            I love staying up to date with modern technologies, collaborating
            with front-end teams, and consulting on client-side architecture. I
            also love running with my dog 🐕, and riding my bicycle. 🚴‍♂️
          </p>{' '}
          <p>
            {' '}
            Browse some of my{' '}
            <Link href='/work'>
              <a>work</a>
            </Link>
            , or <a href='mailto:tylerlangties@gmail.com'>get in touch</a>.{' '}
          </p>{' '}
          <p>
            {' '}
            You can also find me on{' '}
            <a href='https://linkedin.com/in/tylerlangties'>LinkedIn</a>,{' '}
            <a href='https://github.com/tylerlangties'>Github</a> and{' '}
            <a href='http://codepen.io/tylerlangties/'>CodePen</a>
          </p>{' '}
          <br />{' '}
          <Link href='/work'>
            <button name='explore work' className='button-primary'>
              Explore my work
            </button>
          </Link>{' '}
        </div>
      </div>
    </div>
  </Layout>
)

export default About
