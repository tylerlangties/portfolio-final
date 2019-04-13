import React from 'react'
import Layout from '../components/layout'
import Link from 'next/link'
import Image from '../components/Image'

import '../styles/work.scss'

const Work = () => (
  <Layout>
    <div className='work-page'>
      <div className='page-wrapper'>
        <h1>Work</h1>
        <div className='rich-text'>
          <div className='img-container'>
            <div className='work-page__grid'>
              <a href='https://ecstatic-ritchie-157e97.netlify.com/'>
                <Image
                  src='../static/movie-db.png'
                  alt='movie database'
                  className='work-page__grid--img'
                />
              </a>
              <div className='work-page__grid--container'>
                <h1>Flix Database</h1>
                <p>A simple movie detail library.</p>
                <div>
                  <h3>Technologies:</h3>
                  <ul>
                    <li>React</li>
                    <li>Styled Components</li>
                    <li>Redux</li>
                  </ul>
                </div>
                <a href='https://github.com/tylerlangties/movie-db'>
                  <button name='moviedb codebase' className='button-primary'>
                    Codebase
                  </button>
                </a>
                <a href='https://ecstatic-ritchie-157e97.netlify.com/'>
                  <button name='moviedb website' className='button-primary'>
                    Website
                  </button>
                </a>
              </div>
            </div>
            <hr />
            <div className='work-page__grid'>
              <a href='https://pedantic-mahavira-c8186f.netlify.com/'>
                <Image
                  src='./static/yello-app.png'
                  alt='yello app'
                  className='work-page__grid--img'
                />
              </a>
              <div className='work-page__grid--container'>
                <h1>Yello Vue</h1>
                <p>
                  A drag and drop productivity app inspired by one of my
                  favorites, Trello.
                </p>
                <div>
                  <h3>Technologies:</h3>
                  <ul>
                    <li>Vue.js</li>
                    <li>Beufy</li>
                    <li>Drag and drop API</li>
                    <li>SASS</li>
                  </ul>
                </div>
                <a href='https://github.com/tylerlangties/Yello'>
                  <button name='yello codebase' className='button-primary'>
                    Codebase
                  </button>
                </a>
                <a href='https://pedantic-mahavira-c8186f.netlify.com/'>
                  <button name='blog website' className='button-primary'>
                    Website
                  </button>
                </a>
              </div>
            </div>

            <hr />

            <div className='work-page__grid'>
              <a href='https://langties.works/'>
                <Image
                  src='../static/portfolio.png'
                  alt='portfolio'
                  className='work-page__grid--img'
                />
              </a>
              <div className='work-page__grid--container'>
                <h1>A Portfolio</h1>
                <p>
                  My personal portfolio! Feel free to clone it and make it your
                  own.
                </p>
                <div>
                  <h3>Technologies:</h3>
                  <ul>
                    <li>React</li>
                    <li>Next.js</li>
                    <li>Particles.js</li>
                    <li>SASS</li>
                  </ul>
                </div>
                <a href='https://github.com/tylerlangties/portfolio-final'>
                  <button name='portfolio codebase' className='button-primary'>
                    Codebase
                  </button>
                </a>
                <a href='https://langties.works/'>
                  <button name='portfolio site' className='button-primary'>
                    Website
                  </button>
                </a>
              </div>
            </div>
            <hr />

            <div className='work-page__grid'>
              <a href='https://dreamy-heyrovsky-fa9d75.netlify.com/'>
                <Image
                  src='../static/crypto-index.png'
                  alt='crypto index'
                  className='work-page__grid--img'
                />
              </a>
              <div className='work-page__grid--container'>
                <h1>Crypto Index</h1>
                <p>
                  An interactive chart which displays some of the most popular
                  crypto currencies and their current values.
                </p>
                <div>
                  <h3>Technologies:</h3>
                  <ul>
                    <li>React</li>
                    <li>Chart.js</li>
                    <li>Lodash</li>
                    <li>Moment.js</li>
                  </ul>
                </div>
                <a href='https://github.com/tylerlangties/crypto-index'>
                  <button name='crypto codebase' className='button-primary'>
                    Codebase
                  </button>
                </a>
                <a href='https://dreamy-heyrovsky-fa9d75.netlify.com/'>
                  <button name='crypto website' className='button-primary'>
                    Website
                  </button>
                </a>
              </div>
            </div>
            <hr />

            <div className='work-page__grid'>
              <a href='https://github.com/tylerlangties/vue-welp'>
                <Image
                  src='../static/vue-welp.png'
                  alt='vue welp'
                  className='work-page__grid--img'
                />
              </a>
              <div className='work-page__grid--container'>
                <h1>Vue Welp</h1>
                <p>Demo of a small review forum for local restaurants.</p>
                <div>
                  <h3>Technologies:</h3>
                  <ul>
                    <li>Vue.js</li>
                    <li>Jest</li>
                    <li>Bootstrap</li>
                    <li>Axios</li>
                  </ul>
                </div>
                <a href='https://github.com/tylerlangties/vue-welp'>
                  <button name='vue welp' className='button-primary'>
                    Codebase
                  </button>
                </a>
              </div>
            </div>
            <hr />
          </div>

          <div className='work-page__button-container'>
            <a href='mailto:tylerlangties@gmail.com?Subject=Hello,%20Tyler!'>
              <button
                name='contact button'
                className='button-primary work-button'
              >
                Get in touch
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default Work
