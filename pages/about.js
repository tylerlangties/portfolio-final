import React from 'react';
import Layout from '../components/layout';
import '../styles/main.scss';
import '../styles/about.scss';

export default () => (
    <Layout>
        <div className="about-page">
            <div className="page-wrapper">
            <h1>Profile</h1> 
            <div className="rich-text"> <p> I'm a Front-end Developer who enjoys building rich and engaging digital experiences for the 3rd sector, and the open source community.</p>
            <p> I enjoy building complex web applications, collaborating with front-end teams and consulting on client-side architecture. I also enjoy getting involved with smaller side projects.</p> <p> Browse some of my <a href="/work">work</a>,  or <a href="mailto:tylerlangties@gmail.com">get in touch</a>. </p> <p> You can also find me on <a href="https://linkedin.com/in/tylerlangties">LinkedIn</a>, <a href="https://github.com/tylerlangties">Github</a>, <a href="http://codepen.io/tylerlangties/">CodePen</a> and <a href="https://www.instagram.com/imniceirl/">Instagram</a>. </p> <br /> <a href="/work"><button className="button-primary">Explore my work</button></a> </div>
            </div>
        </div>
    </Layout>
)