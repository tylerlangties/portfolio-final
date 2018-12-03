import React from 'react';
import Layout from '../components/layout';
import '../styles/work.scss';

const Work = () => (
    <Layout>
        <div className="work-page">
            <div className="page-wrapper">
            <h1>Work</h1> 
                <div className="rich-text"> 
                <div className="img-container">
                    <div className="work-page__grid">
                        <img className="work-page__grid--img" src="../static/travel-blog.png" />
                        <div className="work-page__grid--container">
                            <h1>Travel Blog Template</h1>
                            <p>A static blog template with a Contentful backend.</p>
                            <div>
                            <h3>Technologies:</h3>
                            <ul>
                                <li>Gatsby.js</li>
                                <li>Styled Components</li>
                                <li>GraphQL</li>
                                <li>Contentful</li>
                            </ul>
                            </div>
                            <a href="https://github.com/tylerlangties/travel-blog"><button className="button-primary">Codebase</button></a>
                            <a href="https://elastic-mcnulty-ae86ca.netlify.com/"><button className="button-primary">Website</button></a>
                        </div>
                    </div>
                    <hr />

                    <div className="work-page__grid">
                        <img className="work-page__grid--img" src="../static/movie-db.png" />
                        <div className="work-page__grid--container">
                            <h1>Flix Database</h1>
                            <p>A simple movie detail library.</p>
                            <div>
                            <h3>Technologies:</h3>
                            <ul>
                                <li>React</li>
                                <li>Styled Components</li>
                                <li>Rest</li>
                                <li>Overdrive</li>
                            </ul>
                            </div>
                            <a href="https://github.com/tylerlangties/movie-db"><button className="button-primary">Codebase</button></a>
                            <a href="https://ecstatic-ritchie-157e97.netlify.com/"><button className="button-primary">Website</button></a>
                        </div>
                    </div>

                    <hr />

                    <div className="work-page__grid">
                        <img className="work-page__grid--img" src="../static/portfolio.png" />
                        <div className="work-page__grid--container">
                            <h1>A Portfolio</h1>
                            <p>My personal portfolio! Feel free to clone it and make it your own.</p>
                            <div>
                            <h3>Technologies:</h3>
                            <ul>
                                <li>React</li>
                                <li>Next.js</li>
                                <li>Particles.js</li>
                                <li>SASS</li>
                            </ul>
                            </div>
                            <a href="https://github.com/tylerlangties/portfolio-final"><button className="button-primary">Codebase</button></a>
                            <a href="https://dreamy-heyrovsky-fa9d75.netlify.com/"><button className="button-primary">Website</button></a>
                        </div>
                    </div>
                    <hr />

                    <div className="work-page__grid">
                        <img className="work-page__grid--img" src="../static/crypto-index.png" />
                        <div className="work-page__grid--container">
                            <h1>Crypto Index</h1>
                            <p>An interactive chart which displays some of the most popular crypto currencies and their current values.</p>
                            <div>
                            <h3>Technologies:</h3>
                            <ul>
                                <li>React</li>
                                <li>Chart.js</li>
                                <li>Lodash</li>
                                <li>Moment.js</li>
                            </ul>
                            </div>
                            <a href="https://github.com/tylerlangties/crypto-index"><button className="button-primary">Codebase</button></a>
                            <a href="https://dreamy-heyrovsky-fa9d75.netlify.com/"><button className="button-primary">Website</button></a>
                        </div>
                    </div>
                    <hr />

                    </div>

                    <div className="work-page__button-container">
                        <a href="mailto:tylerlangties@gmail.com?Subject=Hello,%20Tyler!">
                            <button className="button-primary work-button">Get in touch</button>
                        </a>
                    </div>  
                </div>
            </div>
        </div>
    </Layout>
)

export default Work;
    
    